import React from "react";

const Footer = () => {
	return (
		<footer className="grid lg:grid-cols-4 items-center md:grid-cols-2 grid-cols-2 bg-white text-primary sm:w-full sm:mx-20 md:mx-10 mx-5 my-5 sm:gap-20 md:gap-10 gap-3 text-[12px]">
			<div className="sm:text-[20px] ">
				<h1 className="sm:text-[50px] text-[18px]  font-semibold">JobNest</h1>
				<h3 className="font-semibold ">Contact Us</h3>
				<p>Jobnestng@gmail.com </p>
				<p>(+234 456 777 934) </p>
			</div>
			<div className="sm:text-[20px]">
				<h3 className="font-semibold ">Job Seekers</h3>
				<h3>Find Jobs</h3>
				<p>Saved Jobs </p>
				<p>My Applications</p>
				<p>Messages</p>
			</div>
			<div className="sm:text-[20px]">
				<h3 className="font-semibold ">Recruiters</h3>
				<h3>Post a Job</h3>
				<p>Manage Jobs </p>
				<p>Find Candidates</p>
			</div>
			<div className="sm:text-[20px]">
				<h3 className="font-semibold ">About Us</h3>
				<h3>About Us</h3>
				<p>FAQs </p>
				<p>Contact Us</p>
			</div>
		</footer>
	);
};

export default Footer;
