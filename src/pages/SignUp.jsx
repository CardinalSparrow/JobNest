import React from "react";
import { SignUpCard } from "../components/ResuableComponents";
import Jobseeker from "../images/jobseeker-icon.png";
import Recruiter from "../images/recruiter-icon.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const card = [
		{
			src: Jobseeker,
			name: "Jobseeker",
			content:
				"Looking for your dream job? Sign up as a job seeker to explore endless opportunities and connect with top employers",
			bg: "bg-background2-default",
			button: "SIGN UP AS A JOB SEEKER",
			signUrl: "/jobseeker-sign-up",
		},
		{
			src: Recruiter,
			name: "Recruiter",
			content:
				"Are you looking to find top talents? Sign up as a Recruiter to discover the best candidates for your team today!",
			bg: "bg-background1",
			button: "SIGN UP AS A RECRUITER",
			signUrl: "/recruiter-sign-up",
		},
	];
	const navigate = useNavigate();

	const Sign = (url) => {
		navigate(url);
	};
	return (
		<section className="px-5 sm:py-5 py-3 text-center xl:text-[30px] text-primary">
			<h2 className="sm:text-[18px] text-[10px] p-4">
				<span className="font-semibold">Create Your Account</span>/ Already have
				an account? <span className="font-semibold">Sign in</span>
			</h2>
			<div className="flex flex-col items-center justify-center sm:gap-10 gap-5">
				{card.map((cardItem) => (
					<div key={cardItem.name} className={`${cardItem.bg} sm:p-10 p-5 `}>
						<SignUpCard card={cardItem} />
						<button
							className="bg-primary text-white py-3 px-5 sm:text-[16px] text-[12px]"
							onClick={() => Sign(cardItem.signUrl)}
						>
							{cardItem.button}
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default SignUp;
