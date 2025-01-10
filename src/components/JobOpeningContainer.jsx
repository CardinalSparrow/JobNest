import React from "react";
import JobOpening from "./JobOpening";
export default function JobOpeningContainer() {
  return (
    <div
      className={`flex flex-wrap w-full lg:w-4/5 mt-5 ml-auto mr-auto items-center justify-around `}
    >
      <JobOpening />
      <JobOpening />
      <JobOpening />
      <JobOpening />
      <JobOpening />
      <JobOpening />
    </div>
  );
}
