import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function JobSeekerTrackerRow({ data }) {
  return (
    <div className=" flex justify-around items-center h-[45px] ">
      {" "}
      <div className=" w-[25%] text-left pl-4 ">{data.company}</div>
      <div className=" w-[20%] ">{data.jobTitle}</div>
      <div className=" w-[20%]  ">{data.status}</div>
      <div className=" w-[17%] "><FontAwesomeIcon icon={faLink}/>{data.attachments}</div>
      <div className=" w-[17%]  ">{data.dateApplied}</div>
    </div>
  );
}
