import React from "react";
import JobOpening from "./JobOpening";
const datas = [
	{
		id: 1,
		jobRole: "Data Scientist",
		location: "Berlin, Germany",
		jobType: "On-site",
		contractType: "Contract",
		jobNiche: "Data Science",
		noOfApplicantsNeeded: 7,
		postedBy: "IT / TechCorp",
		jobOverview:
			"We are looking for a Data Scientist to analyze complex datasets and derive meaningful insights that drive strategic decision-making.",
		responsibilities: [
			"Analyze large datasets to identify trends and patterns.",
			"Develop predictive models using machine learning techniques.",
			"Visualize data insights and communicate findings to stakeholders.",
			"Collaborate with teams to define data requirements.",
			"Ensure data accuracy and integrity.",
		],
		skills: [
			"Proficiency in Python or R.",
			"Experience with machine learning frameworks like TensorFlow.",
			"Strong analytical and problem-solving skills.",
			"Knowledge of SQL and data visualization tools.",
			"Familiarity with statistical methods.",
		],
		experienceRequired:
			"3+ years of experience in data analysis or related roles.",
	},
	{
		id: 2,
		jobRole: "Data Scientist",
		location: "Berlin, Germany",
		jobType: "On-site",
		contractType: "Contract",
		jobNiche: "Data Science",
		noOfApplicantsNeeded: 4,
		postedBy: "IT / TechCorp",
		jobOverview:
			"We are looking for a Data Scientist to analyze complex datasets and derive meaningful insights that drive strategic decision-making.",
		responsibilities: [
			"Analyze large datasets to identify trends and patterns.",
			"Develop predictive models using machine learning techniques.",
			"Visualize data insights and communicate findings to stakeholders.",
			"Collaborate with teams to define data requirements.",
			"Ensure data accuracy and integrity.",
		],
		skills: [
			"Proficiency in Python or R.",
			"Experience with machine learning frameworks like TensorFlow.",
			"Strong analytical and problem-solving skills.",
			"Knowledge of SQL and data visualization tools.",
			"Familiarity with statistical methods.",
		],
		experienceRequired:
			"3+ years of experience in data analysis or related roles.",
	},
	{
		id: 3,
		jobRole: "Data Scientist",
		location: "Berlin, Germany",
		jobType: "On-site",
		contractType: "Contract",
		jobNiche: "Data Science",
		noOfApplicantsNeeded: 3,
		postedBy: "IT / TechCorp",
		jobOverview:
			"We are looking for a Data Scientist to analyze complex datasets and derive meaningful insights that drive strategic decision-making.",
		responsibilities: [
			"Analyze large datasets to identify trends and patterns.",
			"Develop predictive models using machine learning techniques.",
			"Visualize data insights and communicate findings to stakeholders.",
			"Collaborate with teams to define data requirements.",
			"Ensure data accuracy and integrity.",
		],
		skills: [
			"Proficiency in Python or R.",
			"Experience with machine learning frameworks like TensorFlow.",
			"Strong analytical and problem-solving skills.",
			"Knowledge of SQL and data visualization tools.",
			"Familiarity with statistical methods.",
		],
		experienceRequired:
			"3+ years of experience in data analysis or related roles.",
	},
	{
		id: 4,
		jobRole: "Data Scientist",
		location: "Berlin, Germany",
		jobType: "On-site",
		contractType: "Contract",
		jobNiche: "Data Science",
		noOfApplicantsNeeded: 3,
		postedBy: "IT / TechCorp",
		jobOverview:
			"We are looking for a Data Scientist to analyze complex datasets and derive meaningful insights that drive strategic decision-making.",
		responsibilities: [
			"Analyze large datasets to identify trends and patterns.",
			"Develop predictive models using machine learning techniques.",
			"Visualize data insights and communicate findings to stakeholders.",
			"Collaborate with teams to define data requirements.",
			"Ensure data accuracy and integrity.",
		],
		skills: [
			"Proficiency in Python or R.",
			"Experience with machine learning frameworks like TensorFlow.",
			"Strong analytical and problem-solving skills.",
			"Knowledge of SQL and data visualization tools.",
			"Familiarity with statistical methods.",
		],
		experienceRequired:
			"3+ years of experience in data analysis or related roles.",
	},
];
export default function CompanyOpenJobs() {
	return (
		<div className=" bg-background2-100 py-6 px-6 flex flex-col items-center ">
			<div className="flex items-center">
				<h2 className="text-primary text-xl font-[600]">Current Openings</h2>
				<span className="text-sm ml-3 text-primary"> 3 Jobs Available</span>
			</div>
			<div className="sm:grid grid-cols-2 gap-6 mt-4">
				{datas.map((data) => (
					<JobOpening jobOpening={data} bg={"white"} />
				))}
			</div>
			<div className="flex justify-end">
				<button className="font-[600]">Add More</button>
			</div>
		</div>
	);
}
