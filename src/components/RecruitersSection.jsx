import React from "react";
import { RecruiterLogo } from "../components/ResuableComponents";
import UBA from "../images/UBA-logo-4.png";
import Dangote from "../images/Dangote_Group_Logo.svg.png";
import Mtn from "../images/mtn.png";
import Dominos from "../images/dominos-logo4.png";
import Unilever from "../images/Unilever.svg.png";
import InDrive from "../images/inDrive-log.png";
import Shoprite from "../images/shoprite.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const logos = [
	{ src: UBA, name: "UBA" },
	{ src: Dangote, name: "Dangote" },
	{ src: Unilever, name: "Unilever" },
	{ src: Mtn, name: "Mtn" },
	{ src: InDrive, name: "InDrive" },
	{ src: Dominos, name: "Dominos" },
	{ src: Shoprite, name: "Shoprite" },
];
const RecruitersSection = () => {
	return (
		<section className="px-5 sm:py-5 py-3 text-center xl:text-[30px] text-primary">
			<h2 className="sm:my-8 my-4 font-bold">Our Top Recruiters</h2>
			{/* <div className="grid sm:grid-cols-7 grid-cols-3  gap-3 place-items-center">
				{logos.map((logo, i) => (
					<div key={i}>
						<RecruiterLogo logo={logo} />
					</div>
				))}
			</div> */}
			<Swiper
				spaceBetween={3}
				slidesPerView={5}
				freeMode={true}
				speed={1000}
				loop={true}
				autoplay={{ delay: 0 }}
				pagination={{ clickable: true }}
				modules={[Pagination, Autoplay]}
			>
				{logos.map((logo) => (
					<SwiperSlide key={logo.name}>
						<RecruiterLogo logo={logo} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default RecruitersSection;
