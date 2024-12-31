import React from "react";
import HeroSection from "../components/HeroSection";
import ExploreJobsSection from "../components/ExploreJobsSection";
import RecruitersSection from "../components/RecruitersSection";
import HowItWorks from "../components/HowItWorks";
import Notifications from "../components/Notifications";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<ExploreJobsSection />
			<RecruitersSection />
			<HowItWorks />
			<hr className="w-full absolute left-0 h-0.5" />
			<Notifications />
		</div>
	);
};

export default Home;
