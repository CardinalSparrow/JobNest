import {
	faLocationPinLock,
	faBookmark,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function JobOpening() {
	return (
		<div className="w-[300px] h-[150px] mb-6 flex flex-col justify-between p-[5px] bg-white">
			<div className="flex justify-between">
				<div
					className={`flex justify-center items-center bg-background2-100 w-[68px] h-[45px]`}
				>
					<FontAwesomeIcon icon={faEnvelope} size="2x" />
				</div>
				<div className={"flex flex-col justify-between w-[70%]"}>
					<div className="text-primary font-[600]">Senior Developer</div>
					<div className={`flex justify-between text-grey text-sm`}>
						<span>
							<FontAwesomeIcon icon={faLocationPinLock} color="#000" /> Lagos
						</span>
						<span>Remote</span>
						<span>Full time</span>
					</div>
				</div>
				<div>
					<FontAwesomeIcon icon={faBookmark} size="sm" />
				</div>
			</div>
			<div className={`text-grey text-sm flex justify-between`}>
				<div>Software Engineering</div>
				<div>20 Applicants</div>
			</div>
			<div className={`text-grey text-sm flex`}>
				{" "}
				<div>Posted by Me</div>
			</div>
			<div className={`flex justify-end`}>
				<button className="bg-secondary text-white p-1 text-sm font-medium rounded-md">
					Apply Now!
				</button>
			</div>
		</div>
	);
}
