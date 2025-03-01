import React from "react";
import { useJobContext } from "../Context/JobOpeningContext";
import JobOpening from "./JobOpening";
import { Link } from "react-router-dom";
import FindJobs from "../pages/FindJobs";
export default function SavedJobsContainer() {
	const { savedJobs } = useJobContext();
	if (savedJobs.length < 1) {
		return (
			<div className="p-6 text-center">
				<p>Oops! You are yet to save any job. </p>
				<p>
					Click{" "}
					<Link to={"/find"}>
						<span className="font-bold">Here</span>
					</Link>{" "}
					to explore available opportunities and save jobs that interest you!
				</p>
			</div>
		);
	}
	return (
		<div
			className={`flex sm:flex-row flex-col w-full mt-5 ml-auto mr-auto items-center justify-around `}
		>
			{savedJobs.map((jobOpening) => (
				<JobOpening jobOpening={jobOpening} key={jobOpening.id} bg={"white"}/>
			))}
		</div>
	);
}
