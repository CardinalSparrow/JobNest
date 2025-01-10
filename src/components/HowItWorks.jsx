import React from "react";
import manWoman from "../images/Group 2.png";
import youngman1 from "../images/ai-generated-young-smiling-african-american-man-portrait-on-transparent-background-ai-png.png";
import woman1 from "../images/andre-adjahoe-meiXx6wtTRM-unsplash.png";
import youngman2 from "../images/fortune-vieyra-xdmtQVVKibU-unsplash.png";
import woman2 from "../images/victoria-heath-16aAmc4f7fA-unsplash.png";

import bullet1 from "../images/bullet1.png";
import bullet2 from "../images/bullet2.png";
import bullet3 from "../images/bullet3.png";

const HowItWorks = ({ steps, callToActionText }) => {
	const bulletImages = [bullet1, bullet2, bullet3];

	steps = [
		{
			title: "Search From Anywhere in the World",
			description:
				"Easily access our job portal to explore opportunities from across the globe.",
		},
		{
			title: "Browse and Filter Your Options From a Curated List of Jobs",
			description:
				"Use our advanced filters to curate job listings tailored to your preferences.",
		},
		{
			title: "Review the Job Details and Submit Your Application Effortlessly",
			description:
				"Streamline your application process and secure your next job hassle-free.",
		},
	];
	callToActionText = {
		heading: "Start your Job Search Today and Secure your Future",
		subtext: "Take the first step towards a rewarding career with us.",
	};
	return (
		<section className="flex flex-col xl:text-[30px] sm:text-[24px] text-[14px] text-primary lg:my-10 sm:my-6 sm:mx-3 mx-5 my-3">
			<h2 className="my-10 text-center font-bold">How it Works?</h2>
			<div className="grid lg:grid-cols-2  sm:gap-5 gap-3">
				<div>
					<img
						className="
					xl:h-auto	lg:h-[530px] w-full"
						src={manWoman}
						alt="Steps illustration"
					/>
				</div>
				<div className="flex flex-col justify-between my-5 sm:max-w-[580px] max-w-[350px]">
					{steps.map((step, index) => (
						<div key={index} className="flex justify-between mb-5">
							{/* Bullet Image */}
							<img
								src={bulletImages[index % bulletImages.length]} // Use the corresponding bullet image
								alt={`Step ${index + 1} icon`}
								className=" mr-4 sm:h-fit h-[72px]"
							/>
							<div>
								<h2 className="font-bold">{step.title}</h2>
								<p className="sm:text-[20px] text-[12px]">{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col text-white lg:my-12  bg-primary xl:rounded-[150px] lg:rounded-[120px] sm:rounded-[80px] rounded-[40px] w-full text-center lg:p-12 p-4 items-center relative">
				{/* Floating Images */}
				<img
					className="absolute xl:top-16 lg:top-12 sm:top-10 top-3 xl:left-20 lg:left-12 sm:left-12 left-3 sm:w-[60px] w-[24px]"
					src={youngman1}
					alt="Young smiling man"
				/>
				<img
					className="absolute sm:bottom-5 bottom-2 xl:right-32 sm:right-24 right-5 sm:w-[60px] w-[24px]"
					src={youngman2}
					alt="Another young smiling man"
				/>
				<img
					className="absolute xl:top-16 lg:top-12 sm:top-10 top-3 xl:right-24 lg:right-12 sm:right-12 right-3  sm:w-[60px] w-[24px]"
					src={woman1}
					alt="Smiling woman"
				/>
				<img
					className="absolute sm:bottom-5 bottom-2 xl:left-32  sm:left-24 left-5 sm:w-[60px] w-[24px]"
					src={woman2}
					alt="Another smiling woman"
				/>
				{/* Call to Action */}
				<div className="sm:m-10 m-4 items-center xl:max-w-[750px] lg:max-w-[500px] sm:max-w-[400px]  ">
					<h1 className="xl:text-[55px] lg:text-[40px] sm:text-[30px] text-[16px] font-bold">
						{callToActionText.heading}
					</h1>
					<p className="xl:text-[18px] lg:text-[16px] text-[12px] p-2">
						{callToActionText.subtext}
					</p>
				</div>
				<div className="flex lg:w-[400px] sm:w-[260px] w-[170px] justify-between xl:text-[22px] lg:text-[18px] sm:text-[14px] text-[12px]">
					<button className="bg-secondary rounded-[20px] xl:w-[178px] lg:w-[160px] sm:w-[120px] w-[80px] lg:h-[54px] sm:h-[40px]  h-[24px] hover:bg-white hover:text-secondary">
						Apply for Jobs
					</button>
					<button className="bg-white text-primary rounded-[20px] xl:w-[178px] lg:w-[160px] sm:w-[120px] w-[80px] lg:h-[54px] sm:h-[40px] h-[24px] hover:bg-background1 hover:text-white">
						Post Jobs
					</button>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
