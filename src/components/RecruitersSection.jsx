import React from "react";
import { RecruiterLogo } from "../components/ResuableComponents";
import UBA from "../images/UBA-logo-4.png";
import Dangote from "../images/Dangote_Group_Logo.svg.png";
import Mtn from "../images/mtn.png";
import Dominos from "../images/dominos-logo4.png";
import Unilever from "../images/Unilever.svg.png";
import InDrive from "../images/inDrive-log.png";
import Shoprite from "../images/shoprite.png";

const logos = [UBA, Dangote, Unilever, Mtn, InDrive, Dominos, Shoprite];
const RecruitersSection = () => {
	return (
		<section className="p-5 text-center xl:text-[30px] text-primary">
			<h2 className="my-5 font-bold">Our Top Recruiters</h2>
			<div className="grid sm:grid-cols-7 grid-cols-3  gap-3 place-items-center">
				{logos.map((logo, i) => (
					<RecruiterLogo key={i} logo={logo} className="" />
				))}
			</div>
		</section>
	);
};

export default RecruitersSection;
