import React from "react";
import Placepic from "../images/fortune-vieyra-xdmtQVVKibU-unsplash.png";
import { ProfileFormItem } from "../components/ResuableComponents";

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
			<ProfileFormItem
				label={"About Me"}
				placeholder={"Give a short overview of your career history and skills."}
				button={"Add"}
			/>
			<ProfileFormItem
				label={"Exerience"}
				placeholder={
					"Include your work experience, such as internships, part-time roles, or long-term specialized positions"
				}
				button={"Add"}
			/>
			<ProfileFormItem
				label={"Qualification"}
				placeholder={"List your qualifications here."}
				button={"Add"}
			/>
			<ProfileFormItem
				label={"Certification"}
				placeholder={
					"Received any certificates? Show them off to help enrich your career profile."
				}
				button={"Edit"}
			/>
			<ProfileFormItem
				label={"Skills"}
				placeholder={"What are your areas of expertise?"}
				button={"Edit"}
			/>
			<ProfileFormItem
				label={"Language Skills"}
				placeholder={
					"Let your employers know if you speak more than one language."
				}
				button={"Add"}
			/>
			<ProfileFormItem
				label={"Cover Letter"}
				placeholder={
					"Showcase your experience, skills, and areas of expertise, emphasizing what you can contribute to the company and why you are the ideal candidate for the role. "
				}
				button={"Add"}
			/>
			<ProfileFormItem label={"Curriculum Vitae"} button={"Upload"} />
			<ProfileFormItem
				label={"Portfolio"}
				placeholder={"Add links to your online projects and portfolios."}
				button={"Add"}
			/>
		</section>
	);
};

export default Profile;
