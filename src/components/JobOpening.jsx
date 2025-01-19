import {
  faLocationPinLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as darkBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useJobContext } from "../Context/JobOpeningContext";
import { Link } from "react-router-dom";

export default function JobOpening({ jobOpening, bg }) {
  const { saveJob, savedJobs, applyNowClickHandler } = useJobContext();
  const isBookmarked = savedJobs.some(
    (savedJob) => savedJob.id === jobOpening.id
  );
  const handleJobSaving = (job) => {
    saveJob(job);
  };
  return (
    <div className={`w-[300px] min-w-[300px] h-[150px] mb-6 flex flex-col justify-between p-[5px]`} style={{ backgroundColor: bg }}>
      <div className="flex justify-between">
        <div
          className={`flex justify-center items-center bg-background2-100 w-[55px] h-[45px]`}
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
        <div className={"flex flex-col justify-between w-[70%]"}>
          <div className="text-primary font-[600]">{jobOpening.jobRole}</div>
          <div className={`flex justify-between text-grey text-sm`}>
            <span>
              <FontAwesomeIcon icon={faLocationPinLock} color="#000" /> Lagos
            </span>
            <span>{jobOpening.jobType}</span>
            <span>{jobOpening.contractType}</span>
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleJobSaving(jobOpening)}
        >
          <FontAwesomeIcon
            icon={!isBookmarked ? faBookmark : darkBookmark}
            size="xl"
          />
        </div>
      </div>
      <div className={`text-grey text-sm flex justify-between`}>
        <div>{jobOpening.jobNiche}</div>
        <div>{jobOpening.noOfApplicantsNeeded} Applicants</div>
      </div>
      <div className={`text-grey text-sm flex`}>
        {" "}
        <div>Posted by {jobOpening.postedBy}</div>
      </div>
      <div className={`flex justify-end`}>
        <Link to={"/application-details"}>
          <button className="bg-secondary text-white p-1 text-sm font-medium rounded-md" onClick={()=>applyNowClickHandler(jobOpening)}>
            Apply Now!
          </button>
        </Link>
      </div>
    </div>
  );
}
