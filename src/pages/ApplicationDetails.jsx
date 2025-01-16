import React from "react";
import { useJobContext } from "../Context/JobOpeningContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
export default function ApplicationDetails() {
  const { currentApplication } = useJobContext();
  if (!currentApplication) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-6 w-1/1 h-auto p-5">
      <div>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCircle} size="3x"/>
              <h3 className="font-[600] text-xl ml-2">Company Name</h3>
            </div>
            <h2 className="font-[500] text-3xl">{currentApplication.jobRole}</h2>
            <p className="-mt-1 text-sm">Posted 3 weeks ago by {currentApplication.postedBy}</p>
          </div>
          <div className="w-[250px] h-[100px] flex flex-col justify-between">
            <div className=" flex justify-evenly items-center">
              <FontAwesomeIcon icon={faBookmark} size="xl"/>
              <FontAwesomeIcon icon={faShare} size="xl"/>
              <button className="bg-secondary text-white p-2 text-sm font-medium rounded-md">
                APPLY NOW!
              </button>
            </div>

            <div className="flex justify-between text-sm">
              <span>{currentApplication.jobType}</span>
              <span>{currentApplication.contractType}</span>{" "}
              <span>Applicants: {currentApplication.noOfApplicantsNeeded}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>{currentApplication.location}</span>
              <span>3 jobs available</span>
            </div>
          </div>
        </div>

        <div className="my-8 w-[85%]">
          <h2 className="font-[500] text-xl">Job Overview</h2>
          <p className="text-justify">{currentApplication.jobOverview}</p>
        </div>

        <div className="my-8">
          <h2 className="font-[500] text-xl">Responsibilities</h2>
          <ul>
            {currentApplication.responsibilities.map((res) => (
              <li className="list-disc my-2" key={currentApplication.id}>
                {res}
              </li>
            ))}
          </ul>
        </div>

        <div className="my-8">
          <h2 className="font-[500] text-xl">Skills/Experience Required</h2>
          <ul>
            {currentApplication.skills.map((skill) => (
              <li className="list-disc my-2" key={currentApplication.id}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-secondary text-white p-2 text-sm font-medium rounded-md">
                APPLY NOW!
              </button>
      </div>

      <div className="border"></div>
    </div>
  );
}
