import React, { useState } from 'react'

const Portfolio = () => {
    const [add, setAdd] = useState(false)
  return (
    <div className='bg-[#97EFAB99] py-6 px-10 my-4'>
        <div className='grid'>
            <h2 className='text-xl font-medium text-primary'>Portfolio</h2>
            <hr className='h-[1px] my-3' />
            <input type="text" placeholder='Add portfolio link' className='focus:outline-none w-full p-2 bg-transparent' onFocus={() => setAdd(true)} />
            <hr className='h-[1px] my-3' />
            {
                add ? <button className='justify-self-end' onClick={() => setAdd(false)}>Add</button> : null
            }
        </div>
        <div>
            <h2 className='text-xl font-medium text-primary'>CV</h2>
            <hr className='h-[1px] my-4' />
            <input type="file" placeholder='Upload CV' />
            <hr className='h-[1px] my-4 mb-8' />
        </div>
    </div>
  )
}

export default Portfolio