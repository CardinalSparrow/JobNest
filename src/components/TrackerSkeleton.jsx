import React from "react";
import RecruiterTrackerRow from "./RecruiterTrackerRow";
import { useTrackerContext } from "../Context/ApplicationTrackerContext";
import JobSeekerTrackerRow from "./JobSeekerTrackerRow";

export default function TrackerSkeleton({ data }) {
  const { isJobseeker } = useTrackerContext();
  const bgColor = isJobseeker ? "#44009A" : "#22577A"
  const rowBg = isJobseeker ? "#C864E1":"#929292"
  const textColor = isJobseeker ?"#FFFFFF" : "#000000"
  return (
    <div className=" h-auto w-[90%] sm:w-[65vw] p-5 mx-auto my-6 grid gap-3 rounded-3xl" style={{background: bgColor, color: textColor}}>
      <div className="border-b border-gray-300 flex flex-col justify-end">
        <div className="flex w-[25%] justify-between items-end text-white">
          <div className="">All</div>
          <div>{isJobseeker ? "Accepted" : "Shortlisted"}</div>
          <div>Rejected</div>
        </div>
      </div>
      <div className="flex justify-around items-center h-[45px] text-white" style={{background:rowBg}}>
        {" "}
        <div className=" w-[25%] text-left pl-2">
          {isJobseeker ? "COMPANY" : "APPLICANTS"}
        </div>
        <div className=" w-[20%]">
          {isJobseeker ? "JOB TITLE" : "ATTACHMENTS"}
        </div>
        <div className=" w-[20%]">
          {isJobseeker ? "STATUS" : "DATE APPLIED"}
        </div>
        <div className=" w-[17%]">
          {isJobseeker ? "ATTACHMENTS" : "SHORTLIST"}
        </div>
        <div className=" w-[17%]">
          {isJobseeker ? "DATE APPLIED" : "REJECT"}
        </div>
      </div>
      {!isJobseeker && data.map((data) => <RecruiterTrackerRow data={data} />)}
      {isJobseeker && data.map((data) => <JobSeekerTrackerRow data={data} />)}
      <div></div>
    </div>
  );
}
