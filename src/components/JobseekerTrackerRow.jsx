import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function JobSeekerTrackerRow({ data }) {
  return (
    <div className=" flex justify-between sm:justify-around items-center h-[45px] w-[140%]  md:w-[100%] lg:w-[100%] mb-4">
      {" "}
      <div className=" w-[25%] pl-4 ">{data.company}</div>
      <div className=" w-[20%] ">{data.jobTitle}</div>
      <div className=" w-[20%]  ">{data.status}</div>
      <div className=" w-[17%]  "><FontAwesomeIcon icon={faLink}/>{data.attachments}</div>
      <div className=" w-[17%]  ">{data.dateApplied}</div>
    </div>
  );
}
