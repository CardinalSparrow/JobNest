import React from "react";
import Hero from "../images/young-african-american-business-woman-with-afro-hair-using-computer-laptop-from-job-with-surprise-face-pointing-finger-himself.png";
import SearchBar from "../components/SearchBar";
const Home = () => {
	return (
		<section className="grid grid-cols-2 justify-between h-full sm:px-0 px-5 py-5 bg-white mx-20">
			<div className=" flex flex-col xl:gap-20 gap-10 max-w-[650px] mt-20">
				<div>
					<h2 className=" w-fit px-2 xl:py-4 rounded-xl text-primary xl:text-[60px] text-[40px] font-pextrabold">
						Accelerate Your Career Find the Perfect Job For You
					</h2>

					<h4 className="xl:text-[18px] text-[12px] text-primary ">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Magnieligendi molestias suscipit voluptatum, nobis omnis, maiores
						doloribus Magnieligendi molestias suscipit voluptatum, nobis omnis,
						maiores doloribus
					</h4>
				</div>
				<SearchBar bg={"#38A3A5"}/>
			</div>
			<div className="ml-10">
				<img className=" " src={Hero} alt="" />
			</div>
		</section>
	);
};

export default Home;
