import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { CiClock2 } from "react-icons/ci";

const ExperienceTemplate = ({img, title, date, description, onEdit}) => {
  return (
    <div className='flex flex-col md:flex-row md:p-8 pt-2'>
        <div className='grid'>
            <img src={img} alt="" className='md:w-80 self-center justify-self-center' />
        </div>
        <div className='md:px-10 px-2 pt-2'>
            <div className='mb-4 text-sm'>
                <h2 className='font-semibold text-xl text-primary text-center md:text-start mb-2 md:mb-0'>{title}</h2>
                <div className='flex justify-between text-xs'>
                    <p>Oasis INC</p>
                    <p className='flex gap-1'><CiClock2 className='self-center' />{date}</p>
                    <p className='flex gap-1'><IoLocationSharp className='self-center' />Lagos, Nigeria</p>
                    <p className='font-medium cursor-pointer' onClick={onEdit}>Edit</p>
                </div>
            </div>
            <div>
                <p className='text-sm md:text-base mb-4 md:mb-0'>
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ExperienceTemplate