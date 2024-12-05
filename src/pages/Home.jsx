import React from "react";
import Hero from "../images/slider-img.png";
const Home = () => {
	return (
		<div>
			<div>
				<div>
					<h2>Welcome to Your Examination Portal!</h2>
					<h4>Lorem ipsum dolor sit amet.</h4>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
						eligendi molestias suscipit voluptatum, nobis omnis, maiores
						doloribus voluptatem ad recusandae quaerat facere exercitationem a
						voluptate fugit. Atque veniam nulla tenetur.
					</p>
				</div>
			</div>
			<div>
				<img src={Hero} alt="" />
			</div>
		</div>
	);
};

export default Home;
