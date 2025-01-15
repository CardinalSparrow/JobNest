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
    },
    {
      id: 5,
      jobRole: "Marketing Manager",
      location: "Toronto, Canada",
      jobType: "Hybrid",
      contractType: "Full Time",
      jobNiche: "Marketing",
      noOfApplicantsNeeded: 1,
      postedBy: "MarketPro Inc.",
    },
    {
      id: 6,
      jobRole: "Cybersecurity Analyst",
      location: "San Francisco, USA",
      jobType: "On-site",
      contractType: "Full Time",
      jobNiche: "Cybersecurity",
      noOfApplicantsNeeded: 4,
      postedBy: "SecureTech Corp.",
    },
    {
      id: 7,
      jobRole: "UI/UX Designer",
      location: "Sydney, Australia",
      jobType: "Remote",
      contractType: "Contract",
      jobNiche: "Design",
      noOfApplicantsNeeded: 2,
      postedBy: "DesignWorks AU",
    },
    {
      id: 8,
      jobRole: "Backend Developer",
      location: "Bangalore, India",
      jobType: "On-site",
      contractType: "Full Time",
      jobNiche: "Software Development",
      noOfApplicantsNeeded: 3,
      postedBy: "CodeMaster Pvt. Ltd.",
    },
    {
      id: 9,
      jobRole: "Project Manager",
      location: "Dubai, UAE",
      jobType: "Hybrid",
      contractType: "Part Time",
      jobNiche: "Management",
      noOfApplicantsNeeded: 1,
      postedBy: "Innovative Projects LLC",
    },
    {
      id: 10,
      jobRole: "Social Media Specialist",
      location: "Cape Town, South Africa",
      jobType: "Remote",
      contractType: "Freelance",
      jobNiche: "Social Media Marketing",
      noOfApplicantsNeeded: 2,
      postedBy: "SocialSphere SA",
    },
    {
      id: 11,
      jobRole: "DevOps Engineer",
      location: "Singapore",
      jobType: "Hybrid",
      contractType: "Full Time",
      jobNiche: "Cloud Computing",
      noOfApplicantsNeeded: 3,
      postedBy: "CloudOps Technologies",
    },
    {
      id: 12,
      jobRole: "AI Researcher",
      location: "Tokyo, Japan",
      jobType: "On-site",
      contractType: "Contract",
      jobNiche: "Artificial Intelligence",
      noOfApplicantsNeeded: 2,
      postedBy: "AI Labs Japan",
    },
  ]);
  const [savedJobs, setSavedJobs] = useState([]);
  const saveJob = (newJob) => {
    if (!savedJobs.some((job) => job.id === newJob.id)) {
      setSavedJobs((prev) => [...prev, newJob]);
    } else {
      console.log("This job is already saved.");
      setSavedJobs((prev) => prev.filter((job) => job.id !== newJob.id));
}
    
  };
  useEffect(()=>{console.log(savedJobs)}, [savedJobs])
  return (
    <JobContext.Provider
      value={{ jobOpenings, setJobOpenings, savedJobs, saveJob }}
    >
      {children}
    </JobContext.Provider>
  );
};
