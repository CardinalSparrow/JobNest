import React from "react";
import Hero from "../images/young-woman.png";
import ellipse from "../images/Ellipse 2.png";
import UBA from "../images/UBA-logo-4.png";
import woman from "../images/serious-woman.png";
import man from "../images/serious-man.png";
import HeroSection from "../components/HeroSection";
import ExploreJobsSection from "../components/ExploreJobsSection";
import RecruitersSection from "../components/RecruitersSection";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<ExploreJobsSection />
			<RecruitersSection />
			<HowItWorks />
		</div>
		// <section className="font-semibold">
		// 	<div className="sm:grid grid-cols-2 justify-between h-auto sm:px-0 px-5 py-5 bg-white ">
		// 		<div className=" flex flex-col xl:gap-20 gap-10 lg:max-w-[650px] lg:mt-20 sm:mt-10">
		// 			<div>
		// 				<h2 className=" w-fit px-2 xl:py-4 rounded-xl text-primary xl:text-[60px] lg:text-[40px] sm:text-[27px] text-[22px] font-pextrabold">
		// 					Accelerate Your Career Find the Perfect Job For You
		// 				</h2>

		// 				<h4 className="xl:text-[18px] text-[12px] text-primary ">
		// 					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
		// 					Magnieligendi molestias suscipit voluptatum, nobis omnis, maiores
		// 					doloribus Magnieligendi molestias suscipit voluptatum, nobis
		// 					omnis, maiores doloribus
		// 				</h4>
		// 			</div>
		// 			<div className="mb-4">
		// 				<div className="grid grid-cols-3 xl:h-24 lg:h-18 sm:h-14 border-2 border-primary rounded-xl p-1 items-center">
		// 					<input
		// 						className=" text-center  text-primary py-2"
		// 						type="text"
		// 						placeholder="Industry"
		// 					/>
		// 					<input
		// 						className="text-center text-primary py-2"
		// 						type="text"
		// 						placeholder="Location"
		// 					/>
		// 					<input
		// 						className=" text-center text-primary py-2"
		// 						type="text"
		// 						placeholder="Keyword"
		// 					/>
		// 				</div>
		// 				<button className="float-right mt-4 px-4 py-2 rounded-lg bg-secondary text-white">
		// 					Search
		// 				</button>
		// 			</div>
		// 		</div>
		// 		<div className="lg:ml-10 ml-5 relative">
		// 			<img className=" " src={Hero} alt="" />
		// 			<img
		// 				className="absolute xl:-bottom-64 lg:-bottom-36  -bottom-32 w-full"
		// 				src={ellipse}
		// 				alt=""
		// 			/>
		// 			<div className="grid grid-cols-4 absolute xl:-bottom-32 sm:-bottom-16 -bottom-20 w-full xl:gap-20 gap-0 xl:px-20 lg:px-5 font-bold text-center ">
		// 				<div className="text-primary">
		// 					<h2 className="xl:text-[40px] lg:text-[25px]">30+</h2>
		// 					<p className="sm:text-[16px] text-[12px]">Happy Clients</p>
		// 				</div>
		// 				<div className="text-white">
		// 					<h2 className="xl:text-[40px] lg:text-[25px]">17+</h2>
		// 					<p className="sm:text-[16px] text-[12px]">Companies</p>
		// 				</div>
		// 				<div className="text-primary">
		// 					<h2 className="xl:text-[40px] lg:text-[25px]">100+</h2>
		// 					<p className="sm:text-[16px] text-[12px]">Skilled Applicants</p>
		// 				</div>
		// 				<div className="text-white">
		// 					<h2 className="xl:text-[40px] lg:text-[25px]">45+</h2>
		// 					<p className="sm:text-[16px] text-[12px]">Vacancies</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className="flex flex-col p-5 w-full  justify-center xl:mt-72 mt-40 bg-primary text-white  xl:text-[30px]">
		// 		<div className="items-center text-center">
		// 			<h2 className="mb-5">Explore Job by Location</h2>
		// 			<div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-5 gap-3 ">
		// 				<h2 className="px-4 py-2 bg-secondary">Abuja</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Calabar</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Benin</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Asaba</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Ibadan</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Lagos</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Kano</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Kaduna</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Enugu</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Port...</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Bayelsa</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Jos</h2>
		// 			</div>
		// 			<h2 className="mt-3 float-right">View all</h2>
		// 		</div>
		// 		<div className="items-center text-center">
		// 			<h2 className="mb-5">Explore Job by Industry</h2>
		// 			<div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-5 gap-3 ">
		// 				<h2 className="px-4 py-2 bg-secondary">Agriculture</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Construction</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Education</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Energy</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Fashion</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Finance</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Healthcare</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Hospitality</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Media</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Technology</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Food and beverage</h2>
		// 				<h2 className="px-4 py-2 bg-secondary">Transportation</h2>
		// 			</div>
		// 			<h2 className="mt-3 float-right">View all</h2>
		// 		</div>
		// 	</div>
		// 	<div className="items-center text-center  xl:text-[30px] text-primary ">
		// 		<h2 className="my-5">Our Top Recruiters</h2>
		// 		<div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-5 gap-3 ">
		// 			<img src={UBA} alt="" />
		// 			<img src={UBA} alt="" />
		// 			<img src={UBA} alt="" />
		// 			<img src={UBA} alt="" />
		// 			<img src={UBA} alt="" />
		// 			<img src={UBA} alt="" />
		// 		</div>
		// 	</div>
		// 	<div className="items-center  xl:text-[30px] text-primary my-10">
		// 		<h2 className="my-10 text-center">How it Works?</h2>
		// 		<div className="grid sm:grid-cols-2 grid-cols-3 sm:gap-10 gap-3 ">
		// 			<div>
		// 				<img className=" w-[600px] " src={woman} alt="" />
		// 			</div>
		// 			<div className="flex flex-col justify-between mt-5 max-w-[500px]">
		// 				<div>
		// 					<h2>Search From Anywhere in the World</h2>
		// 					<p className="text-sm">
		// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
		// 						tempora quia veritatis, accusantium laudantium maxime nemo
		// 						quaerat aut quos asperiores!
		// 					</p>
		// 				</div>
		// 				<div>
		// 					<h2>Search From Anywhere in the World</h2>
		// 					<p className="text-sm">
		// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
		// 						tempora quia veritatis, accusantium laudantium maxime nemo
		// 						quaerat aut quos asperiores!
		// 					</p>
		// 				</div>
		// 				<div>
		// 					<h2>Search From Anywhere in the World</h2>
		// 					<p className="text-sm">
		// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
		// 						tempora quia veritatis, accusantium laudantium maxime nemo
		// 						quaerat aut quos asperiores!
		// 					</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
};

export default Home;
