import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const useFormValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState)
  const [formErrors, setFormErrors] = useState({})
  const [passwordError, setPasswordError] = useState(false)
  

  const handleChange = (e) => {
    const {name, value, files} = e.target
    setFormData({
        ...formData,
        [name]: files ? files[0] : value
    })

    if (name === 'password' || name === 'confirmPassword') {
        handlePassword(value, name)
    }
    // setFormErrors({})
    console.log("I am changing the form data")
    }

     // Function to check if both passwords are the same
     const handlePassword = (value, name) => {
        const password = name === 'password' ? value : formData.password
        const confirmPassword = name === 'confirmPassword' ? value : formData.confirmPassword
        setPasswordError(password !== confirmPassword)
    }

    // Function to validate form
    const validateForm = (isSocialSignIn) => {
        console.log("ValidateForm")
        console.log(formData)
        const errors = {}
        Object.keys(formData[0]).forEach((key) =>{ 
            console.log(key)
             // Skip password validation if user signed in with Google
            if ((key === 'password' || key === 'confirmPassword') && isSocialSignIn) {
                return;
            }

            if(!formData[key] && key!== 'file') {
                errors[key] = "This field is required"
            }
        })
        console.log(errors)
        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }
    
    // Handle submit function
    const handleSubmit = async (e, formFields, setLoading, isSocialSignIn) => {
        e.preventDefault()
        setLoading(true)

        const isValid = validateForm(isSocialSignIn)
        console.log("test")
        console.log(formData)
        if (!isValid || passwordError) {
            setLoading(false)
            return
        }

        try {
            // Check if email exists in database
            const usersRef = collection(db, 'users');
            const q = query(usersRef, where('email', '==', formData.email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                alert('Account already exists. Please login.');
                navigate('/login');
                return;
            }

            const userData = {};
            formFields.forEach(field => {
                
                // Skip password fields for social sign-in
                if ((field === 'password' || field === 'confirmPassword') && isSocialSignIn) {
                return;
                }
                userData[field] = formData[field];
            });
            // Check if a user is currently signed in
            const user = auth.currentUser
            if (user) {
                // Update existing user information
                await setDoc(doc(db, "users", user.uid), userData, {merge: true})
                alert("Successfully signed up")
                console.log(userData)
            } else {
                // Create auth account and database entry atomically
                let userCredential;
                try {
                    userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                    await setDoc(doc(db, "users", userCredential.user.uid), userData);
                    alert("User created successfully");
                } catch (error) {
                    // If database creation fails, delete the auth account
                    if (userCredential?.user) {
                        await userCredential.user.delete();
                    }
                    throw error;
                }
            }
        } catch (error) {
            console.error("Error signing up:", error);
            console.log("userData:", userData); // Debug log
            if (auth.currentUser) {
                await auth.currentUser.delete()
            }
            alert("Error signing up:" + error.message)
            throw error
        } finally {
            setLoading(false)
        }
    }



    return {formData, setFormData, formErrors, handleChange, validateForm, passwordError, handleSubmit}
}

export default useFormValidation