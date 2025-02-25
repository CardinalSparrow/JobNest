import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function RecruiterTrackerRow({ data , onStatusChange}) {
  return (
    <div className="flex justify-around items-center h-[45px] bg-grey2 ">
      {" "}
      <div className=" w-[25%] pl-4">{data.name}</div>
      <div className=" w-[20%]">
        <FontAwesomeIcon icon={faLink} /> {data.attachments}
      </div>
      <div className=" w-[20%]">{data.dateApplied}</div>
      <div className=" w-[17%]">
        <input
          type="radio"
          name={`status-${data.id}`}
          id=""
          checked= {data.shortlisted === true}
          onChange={() => onStatusChange(data.id, true)}
        />
      </div>
      <div className=" w-[17%]">
        <input
          type="radio"
          name={`status-${data.id}`}
          id=""
          checked={data.shortlisted === false}
          onChange={() => onStatusChange(data.id, false)}
        />
      </div>
    </div>
  );
}
