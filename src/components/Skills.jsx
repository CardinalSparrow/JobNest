import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'

const Skills = () => {
    const [skills, setSkills] = useState([
        'Email Marketing',
        'Problem-Solving',
        'Time Management',
        'Google Workspace'
    ])
    const [languages, setLanguages] = useState([
        'French'
    ])
    const [edit, setEdit] = useState({skills: false, language: false})  
    const [newSkill, setNewSkill] = useState('')
    const [newLanguage, setNewLanguage] = useState('')
    const deleteSkill = (index, type) => {
        if(type === 'skills') {
            setSkills(skills.filter((skill, i) => i !== index))
        } else {
            setLanguages(languages.filter((skill, i) => i !== index))
        }
    }
    const addSkill = (type) => {
        if(newSkill === '' && newLanguage === '') return
        if(type === 'skills') {
            setSkills([...skills, newSkill])
            setNewSkill('')
        } else {
            setLanguages([...languages, newLanguage])
            setNewLanguage('')
        }
    }
  return (
    <div className='bg-[#97EFAB99] px-10 py-5 my-4'>
        <div>
            <div className='flex gap-8 mb-4 justify-between md:justify-normal'>
                <h2 className='text-2xl text-primary font-medium'>Skills</h2>
                <p className='text-sm font-light self-end md:block hidden'>What are your areas of expertise?</p>
                {
                    !edit.skills ? <p className='font-medium self-end cursor-pointer' onClick={() => setEdit({...edit, skills: true})}>Edit</p>
                    :
                    <p className='font-medium self-end cursor-pointer' onClick={() => setEdit({...edit, skills: false})}>Save</p>
                }
            </div>
            <div className='px-10 text-sm md:text-base'>
                <ol className='list-decimal'>
                    {skills.map((skill, index) => (
                        <li key={index}><p className='flex gap-6'>{skill}{edit.skills ? <MdDelete onClick={() => deleteSkill(index, 'skills')} className='self-center cursor-pointer' /> : null}</p></li>
                    ))}
                </ol>
                {
                    edit.skills && (
                        <div>
                            <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder='Add Skill' className='p-1 rounded-md focus:outline-none w-full' />
                            <button className='bg-primary text-white rounded-md px-4 py-1 mt-2' onClick={() => addSkill('skills')}>Add</button>
                        </div>
                    )
                }
            </div>
        </div>
        <hr className='h-[1px] my-3' />
        <div>
            <div className='flex gap-8 mb-4'>
                <h2 className='text-xl text-primary font-medium'>Language Skills?</h2>
                {
                    !edit.language ? <p className='font-medium self-end cursor-pointer' onClick={() => setEdit({...edit, language: true})}>Edit</p>
                    :
                    <p className='font-medium self-end cursor-pointer' onClick={() => setEdit({...edit, language: false})}>Save</p>
                }
            </div>
            <div className='px-10 text-sm md:text-base'>
                <ol className='list-decimal'>
                    {languages.map((skill, index) => (
                        <li key={index}><p className='flex gap-6'>{skill}{edit.language ? <MdDelete onClick={() => deleteSkill(index, 'language')} className='self-center cursor-pointer' /> : null}</p></li>
                    ))}
                </ol>
                {
                    edit.language && (
                        <div>
                            <input type="text" value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)} placeholder='Add Skill' className='p-1 rounded-md focus:outline-none w-full' />
                            <button className='bg-primary text-white rounded-md px-4 py-1 mt-2' onClick={() => addSkill('language')}>Add</button>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Skills