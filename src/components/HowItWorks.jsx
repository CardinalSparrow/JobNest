import React from "react";
import manWoman from "../images/Group 2.png";
import youngman1 from "../images/ai-generated-young-smiling-african-american-man-portrait-on-transparent-background-ai-png.png";
import woman1 from "../images/andre-adjahoe-meiXx6wtTRM-unsplash.png";
import youngman2 from "../images/fortune-vieyra-xdmtQVVKibU-unsplash.png";
import woman2 from "../images/victoria-heath-16aAmc4f7fA-unsplash.png";

const HowItWorks = () => {
	return (
		<section className="xl:text-[30px] text-[25px] text-primary my-10">
			<h2 className="my-10 text-center font-bold">How it Works?</h2>
			<div className="grid sm:grid-cols-2 grid-cols-3 sm:gap-10 gap-3">
				<div>
					<img className="w-[600px]" src={manWoman} alt="Steps illustration" />
				</div>
				<div className="flex flex-col justify-between mt-5 max-w-[500px]">
					<div>
						<h2 className="font-bold">Search From Anywhere in the World</h2>
						<p className="text-[18px]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							tempora quia veritatis, accusantium laudantium
						</p>
					</div>
					<div>
						<h2 className="font-bold">
							Browse and Filter Your Options From a Curated List of Jobs
						</h2>
						<p className="text-[18px]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							tempora quia veritatis, accusantium laudantium
						</p>
					</div>
					<div>
						<h2 className="font-bold">
							Review the Job Details and Submit Your Application Effortlessly
						</h2>
						<p className="text-[18px]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							tempora quia veritatis, accusantium laudantium
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col text-white my-12 bg-primary rounded-[150px] w-full text-center p-12 items-center relative">
				<img
					className="absolute top-16 left-20 w-[96px]"
					src={youngman1}
					alt=""
				/>
				<img
					className="absolute bottom-5 right-32 w-[96px]"
					src={youngman2}
					alt=""
				/>
				<img
					className="absolute top-16 right-20 w-[96px]"
					src={woman1}
					alt=""
				/>
				<img
					className="absolute bottom-5 left-32 w-[96px]"
					src={woman2}
					alt=""
				/>
				<div className=" m-10 items-center max-w-[750px]">
					<h1 className="text-[55px] ">
						Start your Job Search Today and Secure your Future
					</h1>
					<p className="text-[18px] p-2">
						Lorem ipsum dolor sit amet, consectetur tremor adipiscing elit.
						Mauris in mauris semper,
					</p>
				</div>
				<div className="flex w-[400px] justify-between text-[22px]">
					<button className="bg-secondary rounded-[20px]  w-[178px] h-[54px]">
						Apply for Jobs
					</button>
					<button className="bg-white text-primary rounded-[20px]  w-[178px] h-[54px]">
						Post Jobs
					</button>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
