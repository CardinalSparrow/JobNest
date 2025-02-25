import React, { useState } from 'react'
import Label from '../components/Label'
import useFormValidation from '../hooks/useFormValidation'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

const SignIn = () => {
    const navigate = useNavigate()
    const initialState = useState({
        email: '',
        password: ''
    })
    const {handleChange, formData, formErrors, validateForm} = useFormValidation(initialState)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const isValid = validateForm()
        if (!isValid){
            setLoading(false)
            return
        }
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                formData.email, 
                formData.password
            )

            if (userCredential.user) {
                alert('User signed in successfully')
                navigate('/')
            }
        } catch (error) {
            console.error(error)
            if (error.code === 'auth/invalid-credential') {
                alert("Invalid email or password")
            } else {
                alert(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className='grid mb-4'>
        <div className='text-primary rounded-sm'>
            <h1 className='text-center font-semibold text-2xl mb-6'>Welcome Back !</h1>
            <form onSubmit={handleSubmit}>
                <Label name='email' label='Email Address' value={formData.email} onChange={handleChange} />
                <label className="grid relative" htmlFor="password">
                    <input
                        className="focus:outline-none p-2 rounded-sm mb-4 text-black"
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Password'
                    />
                    {passwordVisible ? (
                        <MdOutlineVisibilityOff
                            onClick={() =>
                                setPasswordVisible(!passwordVisible)
                            }
                            className="absolute right-2 top-3 size-5 text-black"
                        />
                    ) : (
                        <MdOutlineVisibility
                            onClick={() =>
                                setPasswordVisible(!passwordVisible)
                            }
                            className="absolute right-2 top-3 size-5 text-black"
                        />
                    )}
                    {formErrors.password && (
                        <p className="text-red-600">{formErrors.password}</p>
                    )}
                </label>
                <Link to='/forgot-password' className='text-xs'>Forgot Password?</Link>
                <button type='submit' className='bg-secondary text-white w-full py-2 rounded-sm my-3 font-medium grid' disabled={loading}>
                {loading ? (
							<svg className="animate-spin h-5 w-5 justify-self-center" viewBox="0 0 24 24">
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						) : (
							"Log in"
						)}
                </button>
                <p className='text-center text-xs mb-3'>By clicking “Log In” you agreee to our <Link to='/'>Terms of Use</Link> and <Link to='/'>Privacy Policy</Link></p>
                <p className='text-center text-xs'>Don't have an Account? <Link to='/sign-up' >Sign Up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default SignIn