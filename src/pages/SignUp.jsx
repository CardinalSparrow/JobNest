import React, { useState } from 'react'
import Label from '../components/Label'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import useFormValidation from '../hooks/useFormValidation'
import { Link } from 'react-router-dom'

const SignUp = () => {

	const initialState = useState({
		email: '',
		password: '',
		type: '',
        companyName: '',
        fullName: '',
        resume: '',
        position: ''
	})
    const {handleChange, formData, formErrors, handleSubmit} = useFormValidation(initialState)
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [loading, setLoading] = useState(false)
	const userTypes = [
        {label: 'Select User Type', value: ''},
		{label: 'Recruiter', value: 'recruiter'},
		{label: 'Job Seeker', value: 'jobseeker'}
	]
    const [user, setUser] = useState(formData.type)
    const formfields = user === 'recruiter' ? ['email', 'type', 'companyName', 'position'] : ['email', 'type', 'fullName', 'resume']
  return (
	<div className='grid mb-4'>
        <div className='text-primary rounded-sm'>
            <h1 className='text-center font-semibold text-2xl mb-6'>Signup Page</h1>
            <form onSubmit={(e) => handleSubmit(e, formfields, setLoading)}>
                <Label name='email' label='Email Address' value={formData.email} onChange={handleChange} error={formErrors.email} />
                <label className="grid relative" htmlFor="password">
                    <input
                        className="focus:outline-none p-2 rounded-sm mb-4 text-black"
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
						placeholder='Create Password'
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
				<Label name='type' id='type' value={formData.type} onChange={(e) => handleChange(e, setUser)} options={userTypes} elementType='select' error={formErrors.type} />
                {
                    user === 'recruiter' ? (
                        <>
                            <Label name='companyName' label='Company Name' value={formData.companyName} onChange={handleChange} error={formErrors.companyName} />
                            <Label name='position' label='Position' value={formData.position} onChange={handleChange} error={formErrors.position} />
                        </>
                    ) : 
                    (
                        user === 'jobseeker' &&
                        (
                            <>
                                <Label name='fullName' label='Full Name' value={formData.fullName} onChange={handleChange} error={formErrors.fullName} />
                                <Label name='resume' label='Resume/Portfolio Link' value={formData.resume} onChange={handleChange} error={formErrors.resume} />
                            </>
                        )
                    )
                }
                {
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
						"Sign up"
					)}
                    </button>
                }
                <p className='text-center text-xs mb-3'>By clicking “Sign up” you agreee to our <Link to='/'>Terms of Use</Link> and <Link to='/'>Privacy Policy</Link></p>
                <p className='text-center text-xs'>Already have an Account? <Link to='/sign-in' >Sign In</Link></p>
            </form>
        </div>
    </div>
  )
}

export default SignUp