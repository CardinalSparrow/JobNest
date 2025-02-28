import React, { useState } from 'react'

const Portfolio = () => {
    const [add, setAdd] = useState(false)
    const [portfolio, setPortfolio] = useState([])

    const addPortfolio = () => {
        setPortfolio([portfolio])
        setAdd(false)
    }
  return (
    <div className='bg-[#97EFAB99] py-6 px-10 my-4'>
        <div className='grid'>
            <h2 className='text-xl font-medium text-primary'>Portfolio</h2>
            <hr className='h-[1px] my-3' />
            <input type="text" placeholder='Add portfolio link' className='focus:outline-none w-full p-2 bg-transparent' value={portfolio} onChange={(e) => setPortfolio(e.target.value)} onFocus={() => setAdd(true)} />
            <hr className='h-[1px] my-3' />
            {
                add  ? <button className='justify-self-end' onClick={addPortfolio}>Add</button> : null
            }
        </div>
        <div>
            <h2 className='text-xl font-medium text-primary'>CV</h2>
            <hr className='h-[1px] my-4' />
            <input type="file" placeholder='Upload CV' className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary' />
            <hr className='h-[1px] my-4 mb-8' />
        </div>
    </div>
  )
}

export default Portfolio