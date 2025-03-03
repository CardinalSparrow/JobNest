import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import AboutCompany from "../components/AboutCompany";
import CompanyOpenJobs from "../components/CompanyOpenJobs";
import CompanyContactDetail from "../components/CompanyContactDetail";

export default function RecruiterProfile() {
	const [renderedComponent, setRenderedComponent] = useState("A");
	function renderComponent() {
		switch (renderedComponent) {
			case "A":
				return <AboutCompany />;
			case "B":
				return <CompanyOpenJobs />;
			case "C":
				return <CompanyContactDetail />;

			default:
				<AboutCompany />;
		}
	}
	const btnClass = (component) =>
		` sm:mr-7 mr-5 p-2 transition text-primary transition-all duration-500 hover:border-b-2 hover:border-primary hover:font-[600] ${
			renderedComponent === component
				? "border-b-2 border-primary font-[600]"
				: "border-b-0"
		}`;
	return (
		<div className=" lg:w-[80vw] w-[90vw] mx-auto">
			<ProfileDetails />
			<div className="border-b border-l-gray-500 sm:my-10 pb-2 sm:text-lg text-xs">
				<button
					className={btnClass("A")}
					onClick={() => setRenderedComponent("A")}
				>
					Company Details
				</button>
				<button
					className={btnClass("B")}
					onClick={() => setRenderedComponent("B")}
				>
					Jobs Available
				</button>
				<button
					className={btnClass("")}
					onClick={() => setRenderedComponent("C")}
				>
					Contact Us
				</button>
			</div>
			<div key={renderedComponent}>{renderComponent()}</div>
		</div>
	);
}
