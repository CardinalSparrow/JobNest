import React, { Fragment } from "react";
import Hero from "../images/young-woman.png";
import ellipse from "../images/Ellipse 2.png";
import ideaIcon from "../images/Group 7.png";
import calendarIcon from "../images/Group 9.png";
import { Statistic } from "./ResuableComponents.jsx";

const HeroSection = () => {
	return (
		<section className="sm:grid grid-cols-2 h-auto sm:px-0 px-5 py-5 bg-white">
			<article className="flex flex-col xl:gap-20 sm:gap-10 gap-5 lg:max-w-[650px] lg:mt-24 sm:mt-10">
				<div className="px-2 text-primary xl:text-[18px] text-[12px]">
					<h2 className="w-fit  xl:py-4 rounded-xl xl:text-[60px] lg:text-[40px] sm:text-[27px] text-[22px] font-semibold ">
						Accelerate Your Career Find the Perfect Job For You
					</h2>
					<p>
						Discover opportunities that match your skills and ambitions. Connect
						with top talent to drive your business forward. Whether you're
						building your career or growing your team, we’re here to make the
						perfect match happen!
					</p>
				</div>
				<div className="mb-4">
					<div className="grid grid-cols-3 xl:h-32 lg:h-18 sm:h-14 border-2 border-primary rounded-xl p-1 items-center sm:text-sm text-xs">
						<input
							className="text-center text-primary py-2  xl:h-28"
							type="text"
							placeholder="Industry"
						/>
						<input
							className="text-center text-primary py-2 xl:h-28"
							type="text"
							placeholder="Location"
						/>
						<input
							className="text-center text-primary py-2 xl:h-28"
							type="text"
							placeholder="Keyword"
						/>
					</div>
					<button className="float-right mt-4 px-4 py-2 rounded-lg bg-secondary text-white sm:text-sm text-xs">
						Search
					</button>
				</div>
			</article>
			<div className=" ml-5 relative">
				<img src={Hero} alt="Young woman exploring career opportunities" />
				<img
					src={ideaIcon}
					className="absolute sm:-right-5 xl:top-60 sm:w-[44px] w-[24px] sm:top-36 top-24 -right-3"
					alt=""
				/>
				<img
					src={calendarIcon}
					className="absolute sm:-left-5 xl:top-20 sm:w-[44px] sm:top-16 w-[24px] top-8 -left-3"
					alt=""
				/>
				<img
					className="absolute xl:-bottom-64 lg:-bottom-36 -bottom-32 w-full "
					src={ellipse}
					alt="Background ellipse decoration"
				/>
				<div className="grid grid-cols-4 absolute xl:-bottom-28 sm:-bottom-16 -bottom-14 w-full xl:gap-20 gap-0 xl:px-16 lg:px-5 px-2">
					<Statistic
						value="30+"
						label="Happy Clients"
						textColor="text-primary"
					/>
					<Statistic value="17+" label="Companies" textColor="text-white" />
					<Statistic
						value="100+"
						label="Skilled Applicants"
						textColor="text-primary"
					/>
					<Statistic value="45+" label="Vacancies" textColor="text-white" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
