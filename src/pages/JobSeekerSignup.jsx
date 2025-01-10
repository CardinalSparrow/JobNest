import React, { useState } from 'react'
import { TiArrowDownThick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../utils/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { qualifications, jobRoles, availabilityOptions, yearsOfExperienceOptions, currentJobRoles, jobTypeOptions } from '../utils/options';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import useFormValidation from '../hooks/useFormValidation';
import Label from '../components/Label';
import SocialAuthentication from '../components/SocialAuthentication';


const JobSeekerSignup = () => {
    const initialState = useState({
            firstName: "",
            email: "",
            gender: "",
            number: "",
            password: "",
            lastName: "",
            dateOfBirth: "",
            nationality: "",
            location: "",
            confirmPassword: "",
            highestQualification: "",
            desiredJobRole: "",
            availability: "",
            yearsOfExperience: "",
            currentJobRole: "",
            jobType: "",
            file: null,
            portfolioLink: ""
    })

    const {formData, setFormData, formErrors, handleChange, handleSubmit, passwordError} = useFormValidation(initialState)
    const [loading, setLoading] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState({
        password: false,
        confirmPassword: false,
    })
    const [isSocialSignIn, setIsSocialSignIn] = useState(false)
    const requiredFields = ['firstName','email', 'gender', 'number', 'password', 'lastName', 'dateOfBirth', 'nationality', 'location', 'confirmPassword', 'highestQualification', 'desiredJobRole', 'availability', 'yearsOfExperience', 'currentJobRole', 'jobType', 'portfolioLink' ]


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
            <h2 className='font-medium text-2xl mb-4 text-primary'>Personal Details</h2>
            <form onSubmit={(e) => handleSubmit(e, requiredFields, setLoading, isSocialSignIn)} className=''>
                
                {/* Personal Information */}

                <div className='flex flex-col sm:flex-row sm:gap-20 lg:gap-40 bg-background3 p-4'>
                    <div className='grid w-full sm:w-1/2'>
                        <Label name='firstName' label='First Name' value={formData.firstName} onChange={handleChange} error={formErrors.firstName} />
                        <Label name='lastName' label='Last Name' value={formData.lastName} onChange={handleChange} error={formErrors.lastName} />
                        <Label name='email' label='Email Address' value={formData.email} onChange={handleChange} error={formErrors.email} type='email' />
                        <label className='grid' htmlFor="">Gender
                            <select className='focus:outline-none p-2 rounded-sm mb-4' name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {formErrors.gender && <p className='text-red-600'>{formErrors.gender}</p>}
                        </label>
                        <Label name='number' label='Mobile Number' value={formData.number} onChange={handleChange} error={formErrors.number} type='tel' />
                        
                    </div>
                    <div className='grid w-full sm:w-1/2'>
                        <label className='grid relative' htmlFor="password">Password
                            <input className='focus:outline-none p-2 rounded-sm mb-4'  type={passwordVisible.password ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} disabled={isSocialSignIn} />
                            {
                                passwordVisible.password ? <MdOutlineVisibilityOff onClick={() => togglePasswordVisibilty("password")} className='absolute right-2 top-9 size-5' /> :<MdOutlineVisibility onClick={() => togglePasswordVisibilty('password')} className='absolute right-2 top-9 size-5' />
                            }
                            {formErrors.password && <p className='text-red-600'>{formErrors.password}</p>}
                        </label>
                        <label className='grid relative' htmlFor="confirmPassword">Confirm Password
                            <input className='focus:outline-none p-2 rounded-sm mb-4' type={passwordVisible.confirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} disabled={isSocialSignIn} />
                            {
                                passwordVisible.confirmPassword ? <MdOutlineVisibilityOff onClick={() => togglePasswordVisibilty("confirmPassword")} className='absolute right-2 top-9 size-5' /> :<MdOutlineVisibility onClick={() => togglePasswordVisibilty('confirmPassword')} className='absolute right-2 top-9 size-5' />
                            }
                            {
                                passwordError &&
                                <p className='text-red-600'>Passwords do not match!</p>
                            }
                            {formErrors.confirmPassword && <p className='text-red-600'>{formErrors.confirmPassword}</p>}
                        </label>
                        <Label name='dateOfBirth' label='Date of Birth' value={formData.dateOfBirth} onChange={handleChange} error={formErrors.dateOfBirth} type='date' />
                        <Label name='nationality' label='Nationality' value={formData.nationality} onChange={handleChange} error={formErrors.nationality} />
                        
                        <label className='grid' htmlFor="location">Location
                            <select className='focus:outline-none p-2 rounded-sm mb-4'  name="location" value={formData.location} onChange={handleChange}>
                                <option value="">Location</option>
                                <option value="lagos">Lagos</option>
                            </select>
                            {formErrors.location && <p className='text-red-600'>{formErrors.location}</p>}
                        </label>
                    </div>
                </div>
                <p className='mb-2 mt-2'>Already have an account? <span className='font-medium underline'><Link to='/'>Log in</Link></span></p>
                <a href="#work"><p className='flex justify-self-end bg-secondary text-white p-2 rounded-md' >Next<TiArrowDownThick className='self-center size-6' /></p></a>
                
                {/* Work Details */}
                
                <h2 className='font-medium text-2xl mb-4 text-primary'>Work Details</h2>
                <div id='work' className='flex flex-col sm:flex-row sm:gap-20 lg:gap-40 bg-background3 p-4'>
                    <div className='grid w-full sm:w-1/2'>
                        <Label 
                        name='highestQualification' 
                        label='Highest Qualification' 
                        value={formData.highestQualification} 
                        onChange={handleChange} 
                        error={formErrors.highestQualification} 
                        elementType='select' 
                        options={qualifications} 
                        />
                        <Label 
                        name='desiredJobRole' 
                        label='Desired Job Role' 
                        value={formData.desiredJobRole} 
                        onChange={handleChange} 
                        error={formErrors.desiredJobRole} 
                        elementType='select' 
                        options={jobRoles} 
                        />
                        <Label 
                        name='availability' 
                        label='Availabilty' 
                        value={formData.availability} 
                        onChange={handleChange} 
                        error={formErrors.availability} 
                        elementType='select' 
                        options={availabilityOptions} 
                        />
                    </div>
                    <div className='grid w-full sm:w-1/2'>
                        <Label 
                        name='yearsOfExperience' 
                        label='Years of Experience' 
                        value={formData.yearsOfExperience} 
                        onChange={handleChange} 
                        error={formErrors.yearsOfExperience} 
                        elementType='select' 
                        options={yearsOfExperienceOptions} 
                        />
                        <Label 
                        name='currentJobRole' 
                        label='Current Job Roles' 
                        value={formData.currentJobRole} 
                        onChange={handleChange} 
                        error={formErrors.currentJobRole} 
                        elementType='select' 
                        options={currentJobRoles} 
                        />
                        <Label 
                        name='jobType' 
                        label='Job Types' 
                        value={formData.jobType} 
                        onChange={handleChange} 
                        error={formErrors.jobType} 
                        elementType='select' 
                        options={jobTypeOptions} 
                        />
                    </div>
                </div>
                <input 
                className='mt-6 mb-4'   
                type="file" name="file" id="file" onChange={handleChange} />
                <p>Optionally upload a CV no larger than 10MB for file types .pdf .doc .docx .rtf</p>
                <p>Please note: You will need to upload a CV to apply for jobs, however you can skip the CV upload on sign up.</p>
                <hr className='mb-4 mt-4' />
                <label htmlFor="portfolioLink" className='grid mb-4'>Add Portfolio Link
                    <input type="text" className='border-2 rounded-sm p-2 mt-2'  name='portfolioLink' id='portfolioLink' value={formData.portfolioLink} onChange={handleChange} />
                    {formErrors.portfolioLink && <p className='text-red-600'>{formErrors.portfolioLink}</p>}
                </label>
                <div className='flex sm:w-3/5 md:w-2/5 gap-4 bg-primary p-4 mb-4'>
                    <input type="checkbox" required className='size-12'  />
                    <p className='text-xs self-center text-white'>
                        <Link>
                            By ticking this, i agree to receiving emails about jobnest alert and updates. 
                            In addition, you also agree to jobnest's User agreement and Privacy Policy
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

export default JobSeekerSignup