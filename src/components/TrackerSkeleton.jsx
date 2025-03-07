import React, { useEffect, useState } from "react";
import RecruiterTrackerRow from "./RecruiterTrackerRow";
import { useTrackerContext } from "../Context/ApplicationTrackerContext";
import JobSeekerTrackerRow from "./JobSeekerTrackerRow";

export default function TrackerSkeleton({
  jobs,
  setRecruiterJobs,
  setAppliedJobs,
}) {
  const { isJobseeker } = useTrackerContext();
  const [filterJobs, setFilteredJobs] = useState(jobs);
  const [filteredApplications, setFilteredApplications] = useState(jobs);
  const bgColor = isJobseeker ? "#44009A" : "#22577A";
  const rowBg = isJobseeker ? "#C864E1" : "#929292";
  const textColor = isJobseeker ? "#FFFFFF" : "#000000";
  const showAll = () => {
    setFilteredJobs(jobs);
  };
  const showShortlisted = () => {
    setFilteredJobs(jobs.filter((job) => job.shortlisted === true));
  };
  const showRejected = () => {
    setFilteredJobs(jobs.filter((job) => job.shortlisted !== true));
  };
  const handleStatusChange = (id, newStatus) => {
    setFilteredJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, shortlisted: newStatus } : job
      )
    );
    setRecruiterJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, shortlisted: newStatus } : job
      )
    );
  };
  const showAllApp = () => {
    setFilteredApplications(jobs);
  };
  const showAccepted = () => {
    setFilteredApplications(jobs.filter((job) => job.status !== "Rejected"));
  };
  const showNotAccepted = () => {
    setFilteredApplications(jobs.filter((job) => job.status === "Rejected"));
  };
  return (
    <div
      className=" h-auto overflow-x-auto text-sm  mx-auto my-6 w-[95vw] md:w-[65vw] lg:w-[60vw] py-5 px-2 md:px-4 lg:px-5 rounded-2xl"
      style={{ background: bgColor, color: textColor }}
    >
      <div className="border-b w-[140%] md:w-[100%] lg:w-[100%] border-gray-300  flex flex-col justify-end mb-3">
        <div className="flex w-[40%] sm:w-[25%] justify-between items-end text-white">
          <div
            className="cursor-pointer hover:border-b hover:border-white transition-all delay-100"
            onClick={isJobseeker ? showAllApp : showAll}
          >
            All
          </div>
          <div
            className="cursor-pointer hover:border-b hover:border-white transition-all delay-100"
            onClick={isJobseeker ? showAccepted : showShortlisted}
          >
            {isJobseeker ? "Accepted" : "Shortlisted"}
          </div>
          <div
            className="cursor-pointer hover:border-b hover:border-white transition-all delay-100"
            onClick={isJobseeker ? showNotAccepted : showRejected}
          >
            Rejected
          </div>
        </div>
      </div>
      <div
        className="flex justify-between sm:justify-around items-center mb-4 h-[45px] w-[140%]  md:w-[100%] lg:w-[100%] text-white"
        style={{ background: rowBg }}
      >
        {" "}
        <div className=" w-[25%] text-left pl-2 ">
          {isJobseeker ? "Company" : "Applicants"}
        </div>
        <div className=" w-[20%]">
          {isJobseeker ? "Job Title" : "Attachments"}
        </div>
        <div className=" w-[20%]">
          {isJobseeker ? "Status" : "Date applied"}
        </div>
        <div className=" w-[17%]">
          {isJobseeker ? "Attachments" : "Shortlist"}
        </div>
        <div className=" w-[17%]">
          {isJobseeker ? "Date Applied" : "Reject"}
        </div>
      </div>
      {!isJobseeker &&
        filterJobs.map((data) => (
          <RecruiterTrackerRow
            key={data.id}
            data={data}
            onStatusChange={handleStatusChange}
          />
        ))}
      {isJobseeker &&
        filteredApplications.map((data) => (
          <JobSeekerTrackerRow data={data} key={data.id} />
        ))}
      <div></div>
    </div>
  );
}
