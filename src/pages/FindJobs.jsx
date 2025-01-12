import React from "react";
import SearchJobsContainer from "../components/SearchJobsContainer";
import styles from "./findJobs.module.css";
import JobOpeningContainer from "../components/JobOpeningContainer";
export default function FindJobs() {
	return (
		<div className={`${styles.mainCont}`}>
			<SearchJobsContainer />
			<div className="text-center mt-5 text-[#1f1f1f]">
				<p className="font-[600] text-2xl">Jobs suggested for you</p>
				<p className="text-grey m-2">
					Lorem ipsum dolor sit amet, consectetur tremor adipiscing elit. Mauris
					in mauris semper,
				</p>
			</div>
			<JobOpeningContainer />
		</div>
	);
}
