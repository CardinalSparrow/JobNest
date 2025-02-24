import React, { useState } from "react";
import JobseekerTracker from "../components/JobseekerTracker";
import RecruiterTracker from "../components/RecruiterTracker";
import { useTrackerContext } from "../Context/ApplicationTrackerContext";

export default function TrackApplications() {
    const {isJobseeker, handleDropDownChange}= useTrackerContext()
  return (
    <div >
      <div>
        <select name="" id="" onChange={(e)=>handleDropDownChange(e)}>
          <option value="default" defaultValue disabled>Select Tracker</option>
          <option value="posted">View jobs posted</option>
          <option value="applied">View jobs applied</option>
        </select>
      </div>
      <div >
        {isJobseeker && <JobseekerTracker/>}
        {!isJobseeker && <RecruiterTracker/>}
      </div>
    </div>
  );
}
