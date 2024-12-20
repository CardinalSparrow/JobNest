import React from "react";
import Hero from "../images/young-woman.png";
import ellipse from "../images/Ellipse 2.png";
import { Statistic } from "./ResuableComponents.jsx";

const HeroSection = () => {
	return (
		<section className="sm:grid grid-cols-2 h-auto sm:px-0 px-5 py-5 bg-white">
			<article className="flex flex-col xl:gap-20 gap-10 lg:max-w-[650px] lg:mt-20 sm:mt-10">
				<div>
					<h2 className="w-fit px-2 xl:py-4 rounded-xl text-primary xl:text-[60px] lg:text-[40px] sm:text-[27px] text-[22px] font-pextrabold">
						Accelerate Your Career Find the Perfect Job For You
					</h2>
					<p className="xl:text-[18px] text-[12px] text-primary">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Magnieligendi molestias suscipit voluptatum, nobis omnis, maiores
						doloribus.
					</p>
				</div>
				<div className="mb-4">
					<div className="grid grid-cols-3 xl:h-24 lg:h-18 sm:h-14 border-2 border-primary rounded-xl p-1 items-center">
						<input
							className="text-center text-primary py-2"
							type="text"
							placeholder="Industry"
						/>
						<input
							className="text-center text-primary py-2"
							type="text"
							placeholder="Location"
						/>
						<input
							className="text-center text-primary py-2"
							type="text"
							placeholder="Keyword"
						/>
					</div>
					<button className="float-right mt-4 px-4 py-2 rounded-lg bg-secondary text-white">
						Search
					</button>
				</div>
			</article>
			<div className="lg:ml-10 ml-5 relative">
				<img src={Hero} alt="Young woman exploring career opportunities" />
				<img
					className="absolute xl:-bottom-64 lg:-bottom-36 -bottom-32 w-full"
					src={ellipse}
					alt="Background ellipse decoration"
				/>
				<div className="grid grid-cols-4 absolute xl:-bottom-32 sm:-bottom-16 -bottom-20 w-full xl:gap-20 gap-0 xl:px-20 lg:px-5">
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
