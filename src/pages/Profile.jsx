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
	const [profileInfo, setProfileInfo] = useState({
		img: profile_img,
		fullName: 'James Justin',
		loc: 'Lagos, Nigeria',
		bio: 'I am a versatile professional with expertise in Virtual assistance, UI/UX design and social media management. I bring strong organizational and communication skills to every role...',
		experience: 2,
		certificate: 3
	})
	const [edit, setEdit] = useState(false)
	const [newProfile, setNewProfile] = useState({
		img: null,
		fullName: '',
		loc: '',
		bio: '',
		experience: '',
		certificate: ''
	})
	const handleImageUpload = (e) => {
		const file = e.target.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
		  setNewProfile({...newProfile, img: reader.result})
		}
	  }
	const editProfile = () => {
		setEdit(true)
		setNewProfile(profileInfo)
	}

	const updateProfile = () => {
		setProfileInfo(newProfile)
		setEdit(false)
		setNewProfile({
			img: null,
			fullName: '',
			loc: '',
			bio: '',
			experience: '',
			certificate: ''
		})
		console.log(profileInfo)
	}
  return (
	<div>
		{ !edit ? 
			(
				<div className='flex flex-col md:flex-row md:justify-between text-center md:text-start items-center md:items-start'>
					<div className='w-[15%]'>
						<img src={profileInfo.img} />
					</div>
					<div className='justify-start md:w-[40%] w-[70%]'>
						<h2 className='font-semibold text-primary'>{profileInfo.fullName}</h2>
						<p className='flex text-sm mb-3 justify-center md:justify-normal'><IoLocationSharp className='self-center' /> <span>{profileInfo.loc}</span></p>
						<p className='mb-3'>
							{profileInfo.bio}
						</p>
						<div className='flex gap-4 md:justify-normal justify-center'>
							<div className='flex text-xs gap-2'>
								<CiClock2 className='self-center size-6' />
								<div>
									<p className='font-bold'>{profileInfo.experience}+ years Job</p>
									<p>Experience</p>
								</div>
							</div>
							<div className='flex text-xs gap-2'>
								<TfiCup className='self-center size-6' />
								<div>
									<p className='font-bold'>{profileInfo.certificate} Certificates</p>
									<p>Achieved</p>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[40%] md:ps-20 mt-4 md:pt-0'>
						<button className='bg-black text-white rounded-2xl py-1 px-3 self-center md:self-start' onClick={editProfile}>Edit profile</button>
					</div>
				</div>
			) :
			(
				<div className=' bg-transparent grid margin-auto w-full gap-2 px-4'>
					<img src={newProfile.img} alt="" className='w-28' />
					<input type="file" className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary' onChange={handleImageUpload} />
					<input type="text" placeholder='Enter your full name' className='bg-transparent border md:w-1/3 border-black placeholder:text-primary px-3 rounded-md' value={newProfile.fullName} onChange={(e) => setNewProfile({...newProfile, fullName: e.target.value})} />
					<input type="text" placeholder='Enter your Location e.g Lagos, Nigeria' className='bg-transparent md:w-1/3 border border-black placeholder:text-primary px-3 rounded-md' value={newProfile.loc} onChange={(e) => setNewProfile({...newProfile, loc: e.target.value})} />
					<textarea placeholder='Enter your bio' className='bg-transparent border border-black md:w-1/3 placeholder:text-primary px-3 rounded-md' value={newProfile.bio} onChange={(e) => setNewProfile({...newProfile, bio: e.target.value})} ></textarea>
					<input type="text" placeholder='Enter your years of experience e.g 3' className='bg-transparent border md:w-1/3 border-black placeholder:text-primary px-3 rounded-md' value={newProfile.experience} onChange={(e) => setNewProfile({...newProfile, experience: e.target.value})} />
					<input type="text" placeholder='Enter your number of certificates e.g 2' className='bg-transparent border md:w-1/3 border-black placeholder:text-primary px-3 rounded-md' value={newProfile.certificate} onChange={(e) => setNewProfile({...newProfile, certificate: e.target.value})} />
					<div className='flex gap-2'>
						<button className='bg-primary text-white px-4 py-1 rounded-md' onClick={updateProfile}>Update</button>
                        <button className='bg-gray-500 text-white px-4 py-1 rounded-md' onClick={() => {
                            setEdit(false)
                            setNewProfile({
								img: profile_img,
								fullName: '',
								loc: '',
								bio: '',
								experience: '',
								certificate: ''})
                            }}
                        >Cancel</button>
					</div>
				</div>
			)
		}
		
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