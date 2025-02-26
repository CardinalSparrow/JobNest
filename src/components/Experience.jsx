import React from 'react'
import ExperienceTemplate from './ExperienceTemplate'
import virtual_assistant from '../images/virtual_assistant.png'
import graphic_designer from '../images/graphic_designer.png'

const Experience = () => {
  return (
    <div className='bg-[#97EFAB99] p-5 my-4'>
        <h1 className='text-2xl font-medium text-primary mb-2'>Job Experience <span className='text-sm font-normal'>2 job history</span></h1>
        <ExperienceTemplate title={'Virtual Assistant'} date={'Aug 2014 - Jan 2015'} img={virtual_assistant} />
        <hr className='h-[1px] mb-2 md:mb-0' />
        <ExperienceTemplate title={'Graphic Designer'} date={'Mar 2015 - Aug 2016'} img={graphic_designer} />
        <hr className='h-[1px] mb-2 md:mb-0' />
        <p className='px-8 my-2'>Add more</p>
        <hr className='h-[1px] mb-3' />
    </div>
  )
}

export default Experience