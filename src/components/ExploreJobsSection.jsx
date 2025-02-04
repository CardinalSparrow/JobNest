import React from "react";
import { ExploreItem } from "./ResuableComponents.jsx";

const ExploreJobsSection = () => {
	const locations = [
		"Abuja",
		"Calabar",
		"Benin",
		"Asaba",
		"Ibadan",
		"Lagos",
		// "Kano",
		// "Kaduna",
		// "Enugu",
		// "Port Harcourt",
		// "Bayelsa",
		// "Jos",
	];
	const industries = [
		"Agriculture",
		"Construction",
		"Education",
		"Energy",
		"Fashion",
		"Finance",
		// "Healthcare",
		// "Hospitality",
		// "Media",
		// "Technology",
		// "Food and beverage",
		// "Transportation",
	];

	return (
		<section className="flex flex-col rounded-xl p-5 justify-center xl:mt-72 mt-40 bg-primary text-white xl:text-[30px] sm:text-[14px] text-[12px] sm:mx-0 mx-5">
			<div className="text-center ">
				<h2 className="mb-8">Explore Job by Location</h2>
				<div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-5 gap-3 ">
					{locations.map((location) => (
						<ExploreItem key={location} name={location} />
					))}
				</div>
				<h2 className="mt-3 float-right">View all</h2>
			</div>
			<div className="text-center">
				<h2 className="mb-8">Explore Job by Industry</h2>
				<div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-5 gap-3">
					{industries.map((industry) => (
						<ExploreItem key={industry} name={industry} />
					))}
				</div>
				<h2 className="mt-3 float-right">View all</h2>
			</div>
		</section>
	);
};

export default ExploreJobsSection;
