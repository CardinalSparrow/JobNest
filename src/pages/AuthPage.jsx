import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const AuthPage = ({page}) => {
    const [selected, setSelected] = useState(page)
  return (
    <div>
        <div className='sm:p-8 p-6 lg:mx-72 mx-6 sm:mx-20 my-6 bg-gradient-to-b from-[#C7F9CC] to-[#57CC99]'>
            <div className='flex justify-between w-full mb-3'>
                <button 
                className={`p-2 w-1/2 px-8 font-medium ${selected === 'sign-up' ? 'bg-secondary rounded-md text-white' : 'bg-white rounded-md rounded-r-none text-black'}`} 
                onClick={() => setSelected("sign-up")}
                >Sign Up</button>
                <button 
                className={`p-2 w-1/2 px-8 font-medium ${selected === 'sign-in' ? 'bg-secondary rounded-md text-white' : 'bg-white rounded-md rounded-l-none text-black'}`} 
                onClick={() => setSelected("sign-in")}>Sign In</button>
            </div>
            {
                selected === 'sign-in' ? <SignIn /> : <SignUp />
            }
        </div>
    </div>
  )
}

export default AuthPage