import React from "react";
import styles from "./savedJobs.module.css";
import JobOpeningContainer from "../components/JobOpeningContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SavedJobsContainer from "../components/SavedJobsContainer";
import JobOpening from "../components/JobOpening";
export default function SavedJobs() {
	return (
		<div className={`${styles.savedJobsContainer} -mx-20 pb-4`}>
			<div className="mx-10">
				<h1 className="text-2xl font-[600] text-center mb-4">
					Your Ongoing Activity
				</h1>
				<div className="bg-white border text-center border-primary p-3 rounded-xl w-1/3 mx-auto mb-6 mt-4">
					<p>
						10 New Jobs Match Your Profile{" "}
						<FontAwesomeIcon icon={faArrowRight} size={"xl"} />
					</p>
				</div>
				<div className="bg-white border border-primary p-4 rounded-xl flex justify-between items-center w-2/3 mx-auto mb-6 mt-4">
					<div>
						<span className="font-[600]">Cisco NG</span> Scheduled an interview
						with you at 2:30pm WAT
					</div>
					<button className="bg-secondary text-white py-1 px-4 border-none rounded-md text-sm font-bold">
						Accept
					</button>
				</div>

				<div className="bg-white border p-4 rounded-xl border-primary flex justify-between items-center w-2/3 mx-auto mb-6 mt-4">
					<div>
						<span className="font-[600]">Cisco NG</span> Scheduled an interview
						with you at 2:30pm WAT
					</div>
					<button className="bg-secondary text-white py-1 px-4 border-none rounded-md text-sm font-bold">
						Accept
					</button>
				</div>
				<div className="my-20">
					<h1 className="text-2xl font-[600] mb-4 text-center">
						Your Saved Jobs
					</h1>
					<SavedJobsContainer />
				</div>
			</div>
		</div>
	);
}
