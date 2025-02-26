import React, { useState } from "react";
import JobseekerTracker from "../components/JobseekerTracker";
import RecruiterTracker from "../components/RecruiterTracker";
import { useTrackerContext } from "../Context/ApplicationTrackerContext";

export default function TrackApplications() {
  const { isJobseeker, handleDropDownChange } = useTrackerContext();
  return (
    <div>
      {!isJobseeker && (
        <div className="my-7">
          <h1 className="text-center font-pextrabold text-2xl text-primary">Jobs Posted</h1>
          <div className="w-[90%] md:w-[50%] mx-4">
            <h2 className="font-pbold text-xl text-primary">Job Overview</h2>
            <p>
              We are seeking a passionate Frontend Developer to create
              user-friendly web applications. You will collaborate with
              cross-functional teams to design and implement responsive UI
              components.
            </p>
          </div>
        </div>
      )}
      <div>
        <select
          name=""
          id=""
          onChange={(e) => handleDropDownChange(e)}
          className="sm:text-xl"
        >
          <option value="default" defaultValue disabled>
            Select Tracker
          </option>
          <option value="posted">View jobs posted</option>
          <option value="applied">View jobs applied</option>
        </select>
      </div>
      <div>
        {isJobseeker && <JobseekerTracker />}
        {!isJobseeker && <RecruiterTracker />}
      </div>
    </div>
  );
}
