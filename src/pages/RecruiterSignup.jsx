import React, { useEffect, useState } from 'react'
import { TiArrowDownThick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from '../utils/firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { companyPositions, numberOfEmployeesOptions, industryOptions } from '../utils/options';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import useFormValidation from '../hooks/useFormValidation';
import Label from '../components/Label';
import SocialAuthentication from '../components/SocialAuthentication';

const RecruiterSignup = () => {
    const initialState = useState({
        firstName: "",
        email: "",
        number: "",
        password: "",
        lastName: "",
        confirmPassword: "",
        position: "",
        companyName: "",
        noOfEmployees: "",
        companyAddress: "",
        industry: "",
        companyWebsite: "",
        notificationEmail: ""
    })

    const {formData, setFormData, formErrors, handleChange, passwordError, handleSubmit} = useFormValidation(initialState)
    const [loading, setLoading] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState({
        password: false,
        confirmPassword: false,
    })
    const requiredFields = ['firstName', 'email', 'number', 'lastName', 'position', 'companyName', 'noOfEmployees', 'companyAddress', 'industry', 'companyWebsite', 'notificationEmail']
    const [isSocialSignIn, setIsSocialSignIn] = useState(false)

    

    // Function to toggle password visibility
    const togglePasswordVisibilty = (field) => {
        console.log('Toggling visibility for:', field);
        setPasswordVisible((prevState) => ({
            ...prevState,
            [field] : !prevState[field]
        }))
        console.log(passwordVisible)
    }
  return (
    <div>
        <div>
            <SocialAuthentication formData={formData} setFormData={setFormData} requiredFields={requiredFields} isSocialSignIn={isSocialSignIn} setIsSocialSignIn={setIsSocialSignIn} />
            <h2 className='font-medium text-2xl mb-4 text-primary'>Company Representative</h2>
            <form onSubmit={(e) => handleSubmit(e, requiredFields, setLoading, isSocialSignIn)}>
                
                {/* Company Representative */}

                <div className='flex flex-col sm:flex-row sm:gap-20 lg:gap-40 bg-background3 p-4'>
                    <div className='grid w-full sm:w-1/2'>
                        <Label label='First Name' name='firstName' value={formData.firstName} onChange={handleChange} error={formErrors.firstName}/>
                        <Label label='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} error={formErrors.lastName}/>
                        <Label label='Work Email' name='email' value={formData.email} onChange={handleChange} error={formErrors.email}/>
                        <Label label='Mobile Number' name='number' value={formData.number} onChange={handleChange} error={formErrors.number} type='tel'/>
                    </div>
                    <div className='grid w-full sm:w-1/2 pb-24'>
                        <label className='grid relative' htmlFor="password">Password
                            <input className='focus:outline-none p-2 rounded-sm mb-4' type={passwordVisible.password ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} disabled={isSocialSignIn} />
                            {
                                passwordVisible.password ? <MdOutlineVisibilityOff onClick={() => togglePasswordVisibilty("password")} className='absolute right-2 top-8 size-5' /> :<MdOutlineVisibility onClick={() => togglePasswordVisibilty('password')} className='absolute right-2 top-8 size-5' />
                            }
                            {formErrors.password && <p className='text-red-600'>{formErrors.password}</p>}
                        </label>
                        <label className='grid relative' htmlFor="confirmPassword">Confirm Password
                            <input className='focus:outline-none p-2 rounded-sm mb-4' type={passwordVisible.confirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} disabled={isSocialSignIn} />
                            {
                                passwordVisible.confirmPassword ? <MdOutlineVisibilityOff onClick={() => togglePasswordVisibilty("confirmPassword")} className='absolute right-2 top-8 size-5' /> :<MdOutlineVisibility onClick={() => togglePasswordVisibilty('confirmPassword')} className='absolute right-2 top-8 size-5' />
                            }
                            {
                                passwordError &&
                                <p className='text-red-600'>Passwords do not match!</p>
                            }
                            {formErrors.confirmPassword && <p className='text-red-600'>{formErrors.confirmPassword}</p>}
                        </label>
                        <Label name='position' label='Position in the Company' elementType='select' value={formData.position} onChange={handleChange} options={companyPositions} error={formErrors.position} />
                    </div>
                </div>
                <p className='mb-2 mt-2'>Already have an account? <span className='font-medium underline'><Link to='/'>Log in</Link></span></p>
                <a href="#work"><p className='flex justify-self-end bg-secondary text-white p-2 rounded-md' >Next<TiArrowDownThick className='self-center size-6' /></p></a>
                
                {/* Company Details */}
                
                <h2 className='font-medium text-2xl mb-4 text-primary'>Company Details</h2>
                <div id='work' className='flex flex-col sm:flex-row sm:gap-20 lg:gap-40 bg-background3 p-4'>
                    <div className='grid w-full sm:w-1/2'>
                        <Label name='companyName' label='Company Name' value={formData.companyName} onChange={handleChange} error={formErrors.companyName} />
                        <Label
                        name='noOfEmployees'
                        label='Number of Employees'
                        elementType='select'
                        value={formData.noOfEmployees}
                        onChange={handleChange}
                        options={numberOfEmployeesOptions}
                        error={formErrors.noOfEmployees}
                        />
                        <Label name='companyAddress' label='Company Address' elementType='textarea' value={formData.companyAddress} onChange={handleChange} error={formErrors.companyAddress} />
                    </div>
                    <div className='grid w-full sm:w-1/2 pb-10'>
                        <Label
                        name='industry'
                        label='Industry'
                        elementType='select'
                        value={formData.industry}
                        onChange={handleChange}
                        options={industryOptions}
                        error={formErrors.industry}
                        />
                        <Label name='companyWebsite' label='Company Website' value={formData.companyWebsite} onChange={handleChange} error={formErrors.companyWebsite} />
                        <Label name='notificationEmail' label='Notification Email' value={formData.notificationEmail} onChange={handleChange} error={formErrors.notificationEmail} type='email' />
                        
                    </div>
                </div>
                <div className='flex sm:w-3/5 md:w-2/5 gap-4 bg-primary p-4 mb-4 mt-6'>
                    <input type="checkbox" required className='size-6'  />
                    <p className='text-xs self-center text-white'>
                        <Link>
                            I have read and agree with the terms and services
                        </Link>
                    </p>
                </div>
                <button className='bg-secondary p-2 mb-2 text-white justify-self-end flex rounded-md' type="submit" disabled={loading}>
                    {
                        loading ? (
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            "Create Your Account"
                        )
                    }
                </button>
            </form>
        </div>
    </div>
  )
}

export default RecruiterSignup