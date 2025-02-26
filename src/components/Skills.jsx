import React from 'react'

const Skills = () => {
  return (
    <div className='bg-[#97EFAB99] px-10 py-5 my-4'>
        <div>
            <div className='flex gap-8 mb-4 justify-between md:justify-normal'>
                <h2 className='text-2xl text-primary font-medium'>Skills</h2>
                <p className='text-sm font-light self-end md:block hidden'>What are your areas of expertise?</p>
                <p className='font-medium self-end'>Edit</p>
            </div>
            <div className='px-10 text-sm md:text-base'>
                <ol className='list-decimal'>
                    <li>Email Marketing</li>
                    <li>Problem-Solving</li>
                    <li>Time Management</li>
                    <li>Google Workspace</li>
                </ol>
            </div>
        </div>
        <hr className='h-[1px] my-3' />
        <div>
            <div className='flex gap-8 mb-4'>
                <h2 className='text-xl text-primary font-medium'>Language Skills?</h2>
                <p className='self-end font-medium'>Edit</p>
            </div>
            <div className='px-10 text-sm md:text-base'>
                <ol className='list-decimal'>
                    <li>French</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Skills