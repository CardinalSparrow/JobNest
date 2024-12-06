import React from "react";
import AboutImg from "../images/experience-img.jpg";

const About = () => {
	return (
		<div className="h-full sm:px-20 px-5 py-20 ">
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maxime
					iste est incidunt modi itaque numquam voluptas, soluta provident ut
					repellat nam deleniti recusandae. Expedita doloremque reprehenderit
					nam officiis amet!
				</p>
				<div>
					<img src={AboutImg} alt="" />
				</div>
				<div>
					<h2>Lorem ipsum dolor sit amet.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
						maxime iste est incidunt modi itaque numquam voluptas, soluta
						provident ut repellat nam deleniti recusandae. Expedita doloremque
						reprehenderit nam officiis amet!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
