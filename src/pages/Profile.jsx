import React, { useState } from 'react'
import profile_img from '../images/profile_img.png'
import { IoLocationSharp } from 'react-icons/io5'
import { CiClock2 } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";
import Experience from '../components/Experience'
import Biography from '../components/Biography'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'

const Profile = () => {
	const [profile, setProfile] = useState("experience")
  return (
	<div>
		<div className='flex flex-col md:flex-row md:justify-between text-center md:text-start items-center md:items-start'>
			<div className='w-[15%]'>
				<img src={profile_img} alt="" className='' />
			</div>
			<div className='justify-start md:w-[40%] w-[70%]'>
				<h2 className='font-semibold text-primary'>James Justin</h2>
				<p className='flex text-sm mb-3 justify-center md:justify-normal'><IoLocationSharp className='self-center' /> <span>Lagos, Nigeria</span></p>
				<p className='mb-3'>
					I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. 
					I bring strong organizational and communication skills to every role...
				</p>
				<div className='flex gap-4 md:justify-normal justify-center'>
					<div className='flex text-xs gap-2'>
						<CiClock2 className='self-center size-6' />
						<div>
							<p className='font-bold'>2+ years Job</p>
							<p>Experience</p>
						</div>
					</div>
					<div className='flex text-xs gap-2'>
						<TfiCup className='self-center size-6' />
						<div>
							<p className='font-bold'>3 Certificates</p>
							<p>Achieved</p>
						</div>
					</div>
				</div>
			</div>
			<div className='w-[40%] md:ps-20 mt-4 md:pt-0'>
				<button className='bg-black text-white rounded-2xl py-1 px-3 self-center md:self-start'>Edit profile</button>
			</div>
		</div>
		<div>
			<div className='flex md:gap-12 gap-6 mt-6 font-light mb-px-0 px-2'>
				<p className={`p-2 hover:bg-slate-100 cursor-pointer ${profile === 'experience' ? 'border-b-[1px] border-b-black' : ''}`} onClick={() => setProfile("experience")}>Experience</p>
				<p className={`p-2 hover:bg-slate-100 cursor-pointer ${profile === 'biography' ? 'border-b-[1px] border-b-black' : ''}`} onClick={() => setProfile("biography")}>Biography</p>
				<p className={`p-2 hover:bg-slate-100 cursor-pointer ${profile === 'skills' ? 'border-b-[1px] border-b-black' : ''}`} onClick={() => setProfile("skills")}>Skills</p>
				<p className={`p-2 hover:bg-slate-100 cursor-pointer ${profile === 'portfolio' ? 'border-b-[1px] border-b-black' : ''}`} onClick={() => setProfile("portfolio")}>Portfolio</p>
			</div>
			<hr className='mb-4 h-[1px]' />
			{
				profile === 'experience' ? (
					<Experience />
				) : (
					profile === "biography" ? (
						<Biography />
					) : (
						profile === "skills" ? (
							<Skills />
						) : (<Portfolio />)
					)
				)
			}
		</div>
	</div>
  )
}

export default Profile