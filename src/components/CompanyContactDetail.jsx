import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faLocationPin,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CompanyContactDetail() {
	return (
		<div className="p-6 bg-background2-100">
			<div>
				<h2 className="text-primary text-xl font-[600]">Contact Us</h2>
				<address className="mb-4 sm:text-lg text-xs">
					<FontAwesomeIcon icon={faLocationPin} /> 12B Victoria Tech Hub, Lekki
					Phase 1, Lagos, Nigeria.
				</address>
				<p className=" sm:text-lg text-xs">
					<FontAwesomeIcon icon={faPhone} />
					+234-810-456-7890
				</p>
				<div className=" flex items-center sm:justify-end mt-4">
					<a href="#" className="mr-5">
						<FontAwesomeIcon icon={faLinkedin} size="xl" />
					</a>
					<a href="#" className="mr-5">
						<FontAwesomeIcon icon={faInstagram} size="xl" />
					</a>
					<a href="#" className="mr-5">
						<FontAwesomeIcon icon={faTwitter} size="xl" />
					</a>
					<a href="#" className="mr-5">
						<FontAwesomeIcon icon={faFacebook} size="xl" />
					</a>
				</div>
				<div className="flex justify-end items-center mt-3 -mb-5">
					<button className="font-[600]">Edit</button>
				</div>
			</div>
		</div>
	);
}
