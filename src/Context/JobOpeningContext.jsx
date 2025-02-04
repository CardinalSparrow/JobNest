import React, { createContext, useContext, useEffect, useState } from "react";
const JobContext = createContext();
export const useJobContext = () => useContext(JobContext);
export const JobProvider = ({ children }) => {
	const [jobOpenings, setJobOpenings] = useState([
		{
			id: 1,
			jobRole: "Frontend Developer",
			location: "New York, USA",
			jobType: "Remote",
			contractType: "Full Time",
			jobNiche: "Web Development",
			noOfApplicantsNeeded: 3,
			postedBy: "Tech Solutions Inc.",
			jobOverview:
				"We are seeking a passionate Frontend Developer to create user-friendly web applications. You will collaborate with cross-functional teams to design and implement responsive UI components.",
			responsibilities: [
				"Develop and maintain web applications using HTML, CSS, and JavaScript.",
				"Collaborate with UI/UX designers to implement engaging designs.",
				"Ensure website functionality and performance on various devices.",
				"Optimize code for maximum speed and scalability.",
				"Stay updated on emerging front-end technologies.",
			],
			skills: [
				"Proficiency in HTML, CSS, and JavaScript.",
				"Experience with React or Angular.",
				"Understanding of responsive design principles.",
				"Familiarity with version control tools like Git.",
				"Problem-solving and communication skills.",
			],
			experienceRequired: "2+ years of experience in frontend development.",
		},
		{
			id: 2,
			jobRole: "Graphic Designer",
			location: "Lagos, Nigeria",
			jobType: "Hybrid",
			contractType: "Part Time",
			jobNiche: "Design",
			noOfApplicantsNeeded: 2,
			postedBy: "Creative Agency Ltd.",
			jobOverview:
				"Join our dynamic team as a Graphic Designer, where you'll craft visual content that communicates ideas effectively and inspires audiences.",
			responsibilities: [
				"Create visually appealing designs for digital and print media.",
				"Develop branding and marketing materials.",
				"Collaborate with teams to ensure design alignment with project goals.",
				"Revise designs based on feedback.",
				"Stay updated on design trends and tools.",
			],
			skills: [
				"Proficiency in Adobe Creative Suite.",
				"Strong eye for aesthetics and attention to detail.",
				"Ability to work on multiple projects simultaneously.",
				"Knowledge of typography and color theory.",
				"Time management and communication skills.",
			],
			experienceRequired: "1+ year of experience in graphic design.",
		},
		{
			id: 3,
			jobRole: "Data Scientist",
			location: "Berlin, Germany",
			jobType: "On-site",
			contractType: "Contract",
			jobNiche: "Data Science",
			noOfApplicantsNeeded: 1,
			postedBy: "Analytics Group GmbH",
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
			jobRole: "Content Writer",
			location: "London, UK",
			jobType: "Remote",
			contractType: "Freelance",
			jobNiche: "Writing",
			noOfApplicantsNeeded: 5,
			postedBy: "Storytellers Co.",
			jobOverview:
				"As a Content Writer, you will produce engaging and informative content tailored to various audiences and platforms.",
			responsibilities: [
				"Write clear, compelling articles and blog posts.",
				"Conduct in-depth research on industry-related topics.",
				"Edit and proofread content for grammatical accuracy.",
				"Collaborate with the marketing team for content strategy.",
				"Optimize content for SEO and web standards.",
			],
			skills: [
				"Excellent writing and editing skills.",
				"Familiarity with SEO principles.",
				"Ability to adapt writing style to different audiences.",
				"Strong research abilities.",
				"Attention to detail and creativity.",
			],
			experienceRequired: "2+ years of content writing experience.",
		},
		// Add similar details for the remaining job openings...
	]);
	const [savedJobs, setSavedJobs] = useState([
		{
			id: 1,
			jobRole: "Frontend Developer",
			location: "New York, USA",
			jobType: "Remote",
			contractType: "Full Time",
			jobNiche: "Web Development",
			noOfApplicantsNeeded: 3,
			postedBy: "Tech Solutions Inc.",
			jobOverview:
				"We are seeking a passionate Frontend Developer to create user-friendly web applications. You will collaborate with cross-functional teams to design and implement responsive UI components.",
			responsibilities: [
				"Develop and maintain web applications using HTML, CSS, and JavaScript.",
				"Collaborate with UI/UX designers to implement engaging designs.",
				"Ensure website functionality and performance on various devices.",
				"Optimize code for maximum speed and scalability.",
				"Stay updated on emerging front-end technologies.",
			],
			skills: [
				"Proficiency in HTML, CSS, and JavaScript.",
				"Experience with React or Angular.",
				"Understanding of responsive design principles.",
				"Familiarity with version control tools like Git.",
				"Problem-solving and communication skills.",
			],
			experienceRequired: "2+ years of experience in frontend development.",
		},
		{
			id: 2,
			jobRole: "Graphic Designer",
			location: "Lagos, Nigeria",
			jobType: "Hybrid",
			contractType: "Part Time",
			jobNiche: "Design",
			noOfApplicantsNeeded: 2,
			postedBy: "Creative Agency Ltd.",
			jobOverview:
				"Join our dynamic team as a Graphic Designer, where you'll craft visual content that communicates ideas effectively and inspires audiences.",
			responsibilities: [
				"Create visually appealing designs for digital and print media.",
				"Develop branding and marketing materials.",
				"Collaborate with teams to ensure design alignment with project goals.",
				"Revise designs based on feedback.",
				"Stay updated on design trends and tools.",
			],
			skills: [
				"Proficiency in Adobe Creative Suite.",
				"Strong eye for aesthetics and attention to detail.",
				"Ability to work on multiple projects simultaneously.",
				"Knowledge of typography and color theory.",
				"Time management and communication skills.",
			],
			experienceRequired: "1+ year of experience in graphic design.",
		},
		{
			id: 3,
			jobRole: "Data Scientist",
			location: "Berlin, Germany",
			jobType: "On-site",
			contractType: "Contract",
			jobNiche: "Data Science",
			noOfApplicantsNeeded: 1,
			postedBy: "Analytics Group GmbH",
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
	]);
	const saveJob = (newJob) => {
		if (!savedJobs.some((job) => job.id === newJob.id)) {
			setSavedJobs((prev) => [...prev, newJob]);
		} else {
			console.log("This job is already saved.");
			setSavedJobs((prev) => prev.filter((job) => job.id !== newJob.id));
		}
	};

	const applyNowClickHandler = () => {};
	useEffect(() => {
		console.log(savedJobs);
	}, [savedJobs]);
	return (
		<JobContext.Provider
			value={{ jobOpenings, setJobOpenings, savedJobs, saveJob }}
		>
			{children}
		</JobContext.Provider>
	);
};
