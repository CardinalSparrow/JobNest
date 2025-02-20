import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const useFormValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState)
  const [formErrors, setFormErrors] = useState({})
  const navigate = useNavigate()
  

  const handleChange = (e, setUser='') => {
    const {name, value, files} = e.target
    setFormData({
        ...formData,
        [name]: files ? files[0] : value
    })
    if (name === 'type') {
        setUser(value)
    }
    setFormErrors({})
    }

    //  // Function to check if both passwords are the same
    //  const handlePassword = (value, name) => {
    //     const password = name === 'password' ? value : formData.password
    //     const confirmPassword = name === 'confirmPassword' ? value : formData.confirmPassword
    //     setPasswordError(password !== confirmPassword)
    // }

    // Function to validate form
    const validateForm = () => {
        const errors = {}
        Object.keys(formData[0]).forEach((key) =>{ 

            //check if the formdata is jobseeker or recruiter so that we can validate the form accordingly
            if(formData.type === 'jobseeker') {
                if(key === 'companyName' || key === 'position') {
                    return
                }
            } else if(formData.type === 'recruiter') {
                if(key === 'resume' || key === 'fullName') {
                    return
                }

            }
            

            if(!formData[key]) {
                errors[key] = "This field is required"
            }
        })       
        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    // Function to toggle password visibility
    const togglePasswordVisibilty = (field, setPasswordVisible) => {
        setPasswordVisible((prevState) => ({
            ...prevState,
            [field] : !prevState[field]
        }))
    }
    
    // Handle submit function
    const handleSubmit = async (e, formFields, setLoading) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            // Create auth account first
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
    
            // Create user data object
            const userData = {};
            formFields.forEach(field => {
                userData[field] = formData[field];
            });
    
            try {
                // Only attempt database write if user is authenticated
                if (userCredential.user) {
                    await setDoc(doc(db, "users", userCredential.user.uid), {
                        ...userData,
                        createdAt: serverTimestamp()
                    });
                }
                alert("Successfully signed up");
                navigate('/');
            } catch (dbError) {
                console.error("Database Error:", dbError);
                // Clean up auth if database fails
                if (userCredential.user) {
                    await userCredential.user.delete();
                }
                throw dbError;
            }
        } catch (error) {
            console.error("Auth Error:", error);
            alert("Error signing up: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return {formData, setFormData, formErrors, handleChange, validateForm, handleSubmit, togglePasswordVisibilty}
}

export default useFormValidation