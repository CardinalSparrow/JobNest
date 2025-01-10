import React from "react";
import { IoMdNotifications } from "react-icons/io";

const Notifications = () => {
	return (
		<section className="flex flex-col xl:text-[30px] text-[25px] text-primary my-5 items-center text-center sm:p-10 p-5">
			<IoMdNotifications className="bg-background2-default text-black sm:w-[80px] sm:h-[72px]" />
			<div className="sm:py-10 py-5">
				<h1 className=" lg:text-[48px] sm:text-[32px] text-[20px] font-semibold">
					Get New Job Notifications
				</h1>
				<p className="sm:text-[18px] text-xs">
					Lorem ipsum dolor sit amet, consectetur tremor adipiscing elit. Mauris
				</p>
			</div>
			<div className="flex w-full sm:gap-10 gap-5  justify-center">
				<input
					type="text"
					placeholder="Enter Your Email"
					className="p-4 bg-fields rounded-[100px] sm:w-[704px] sm:h-[85px] md:h-[60px] sm:text-[18px]  h-[32px] text-sm"
				/>
				<button className="bg-secondary text-white rounded-[100px] sm:w-[235px] sm:h-[85px] md:h-[60px] hover:bg-background1 hover:text-white sm:text-[22px] px-3 h-[32px] text-xs">
					SUBSCRIBE
				</button>
			</div>
		</section>
	);
};

export default Notifications;
