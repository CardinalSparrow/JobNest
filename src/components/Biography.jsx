import React, { useState } from 'react'

const Biography = () => {
    const [text, setText] = useState(`
        I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. 
        I bring strong organizational and communication skills to every role I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. 
        I bring strong organizational and communication skills to every role I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. 
        I bring strong organizational and communication skills to every roleI am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. 
        I bring strong organizational and communication skills to every role
        `)
    const [edit, setEdit] = useState(false)
    const [word, setWord] = useState(text)
    const saveText = () => {
        setEdit(false)
        setText(word)
    }
  return (
    <div className='bg-[#97EFAB99] py-6 md:px-10 px-3 my-4'>
        <div className='flex justify-between'>
            <div className='flex justify-between md:gap-8 gap-0 mb-4'>
                <h2 className='md:text-2xl text-lg text-primary self-center font-medium'>About Me</h2>
                <p className='self-end text-sm font-light md:block hidden'>Give a short overview of your career history and skills.</p>
            </div>
            {!edit ? <p className='font-medium cursor-pointer' onClick={() => setEdit(true)}>Edit</p> : <p className='font-medium cursor-pointer' onClick={saveText}>Save</p>}
        </div>
        <div className='px-10 mb-10'>
            {
                !edit ? (
                    <p className='text-sm md:text-base'>{text}</p>
                ) :
                (
                    <textarea className='p-2 focus:outline-none bg-transparent w-full h-auto min-h-56' name="text" id="text" value={word} onChange={(e) => setWord(e.target.value)}>{text}</textarea>
                )
            }
        </div>
    </div>
  )
}

export default Biography