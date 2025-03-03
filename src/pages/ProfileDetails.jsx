import { faLocation, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ProfileDetails() {
	return (
		<div className="flex sm:mb-7 mb-2 text-sm">
			{/* <div className=""> */}
			<div className="sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] bg-black">
				<img src="src\images\illuminate.png" alt="" />
				{/* </div> */}
			</div>
			<div className="w-[70%] px-4 sm:flex justify-between">
				<div>
					<h2 className="font-[600]">Illuminate Studio</h2>
					<p>
						<FontAwesomeIcon icon={faLocationPin} /> Lagos, Nigeria
					</p>
					<p>
						<span className="sm:text-lg text-xs font-[600]">Industry:</span> IT
						/ TechCorp
					</p>
					<p>
						<span className="sm:text-lg text-xs font-[600]">Size:</span> 23
					</p>
					<p>
						<span className="sm:text-lg text-xs font-[600]">Email:</span>{" "}
						illuminate@gmail.com
					</p>
					<p>
						<span className="sm:text-lg text-xs font-[600]">Website:</span>{" "}
						www.illuminate.co
					</p>
					<p>
						<span className="sm:text-lg text-xs font-[600]">
							Available Jobs:
						</span>{" "}
						3
					</p>
				</div>
				<div className="my-4">
					<button className="bg-black px-7 py-2 text-white font-[600] rounded-[20px]">
						Edit Profile
					</button>
				</div>
			</div>
		</div>
	);
}
