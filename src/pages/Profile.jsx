import React from "react";
import Placepic from "../images/fortune-vieyra-xdmtQVVKibU-unsplash.png";

const Profile = () => {
	return (
		<section className="flex flex-col sm:text-[18px] mt-20 sm:p-10 p-5 gap-4">
			<div className="bg-primary text-white flex flex-col items-center relative rounded-[50px] pt-20">
				<img src={Placepic} alt="" className="absolute -top-28 w-[200px]" />
				<div>
					<p>Username</p>
					<p>Experience</p>
					<p>Availability</p>
					<p>Location</p>
					<p>Qualification</p>
				</div>
			</div>
			<div className="flex flex-col py-3 px-8 border border-black w-full relative rounded-[40px] gap-2">
				<label htmlFor="about" className="font-semibold">
					About Me
				</label>
				<input
					className="h-full  outline-none py-3"
					type="text"
					name="about"
					placeholder="Give a short overview of your career history and skills."
				/>
				<button className=" absolute right-12 bottom-1">Add</button>
			</div>
		</section>
	);
};

export default Profile;
