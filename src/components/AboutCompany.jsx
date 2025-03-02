import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function AboutCompany() {
	return (
		<div className=" bg-background2-100 sm:p-10 p-5 sm:text-lg text-xs">
			<div>
				<h2 className="text-primary sm:text-xl text-lg font-[600]">About Us</h2>
				<p>
					Illuminate Studio is a cutting-edge technology solutions company based
					in Lagos, Nigeria. We specialize in developing innovative digital
					products that drive business transformation and enhance user
					experiences.
				</p>
				<p>
					{" "}
					Our team of skilled professionals is dedicated to crafting intelligent
					software solutions, scalable platforms, and seamless applications
					tailored to meet the evolving needs of businesses in various
					industries.
				</p>
				<p>
					At Illuminate Studio, we believe in fostering a culture of creativity,
					collaboration, and continuous learning. Our commitment to excellence
					ensures that we stay ahead of industry trends, delivering
					high-performance solutions that empower businesses to thrive in a
					digital-first world.
				</p>
			</div>
			<div className="sm:mt-7 mt-4 gap-2 flex flex-col">
				<h2 className="text-primary sm:text-xl text-lg font-[600]">
					Why Join Us?
				</h2>
				<p>
					<FontAwesomeIcon icon={faCheck} /> Innovative Environment – Work with
					a team of forward-thinking tech experts.
				</p>
				<p>
					<FontAwesomeIcon icon={faCheck} /> Growth & Development – Expand your
					skills through hands-on experience and mentorship.
				</p>
				<p>
					<FontAwesomeIcon icon={faCheck} /> Impactful Work – Contribute to
					cutting-edge projects that make a difference.
				</p>
				<p>
					{" "}
					<FontAwesomeIcon icon={faCheck} /> Collaborative Culture – Be part of
					a dynamic team that values ideas and innovation.
				</p>
				<p>
					{" "}
					<FontAwesomeIcon icon={faCheck} /> Explore career opportunities with
					us and become part of our mission to shape the future of technology!
				</p>
			</div>
			<div className="flex justify-end  mt-4">
				<button className="font-[600]">Edit</button>
			</div>
		</div>
	);
}
