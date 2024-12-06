import React from "react";
import Hero from "../images/slider-img.png";
const Home = () => {
	return (
		<section className="h-full sm:px-20 px-5 py-20 bg-red-300">
			<div className="max-w-[40rem]">
				<h2 className="bg-green-300 w-fit px-2 py-4 rounded-xl text-red-800 text-2xl font-pextrabold">
					Welcome to Your Examination Portal!
				</h2>
				<h4 className="px-2 py-4">Lorem ipsum dolor sit amet.</h4>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
					eligendi molestias suscipit voluptatum, nobis omnis, maiores doloribus
					voluptatem ad recusandae quaerat facere exercitationem a voluptate
					fugit. Atque veniam nulla tenetur.
				</p>
			</div>
			<div>
				<img src={Hero} alt="" />
			</div>
		</section>
	);
};

export default Home;
