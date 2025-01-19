import React from "react";
import JobOpening from "./JobOpening";
import { useJobContext } from "../Context/JobOpeningContext";


export default function JobOpeningContainer() {
  const { jobOpenings } = useJobContext();
  
  return (
    <div
      className={`flex flex-wrap w-full lg:w-4/5 mt-5 ml-auto mr-auto items-center justify-around `}
    >
      {jobOpenings.map((jobOpening) => (
        <JobOpening jobOpening={jobOpening} key={jobOpening.id} bg={"white"}/>
      ))}
    </div>
  );
}
