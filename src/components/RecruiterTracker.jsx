import React, { useState } from "react";
import TrackerSkeleton from "./TrackerSkeleton";
export default function RecruiterTracker() {
  const [recruiterJobs, setRecruiterJobs] = useState([
    {
      id: "mm001",
      name: "Tola Peter",
      attachments: "2 files",
      dateApplied: "15/11/2024",
      shortlisted: true,
    },
    {
      id: "mm002",
      name: "Ike Chukwu",
      attachments: "3 files",
      dateApplied: "19/11/2024",
      shortlisted: false,
    },
    {
      id: "mm003",
      name: "Paul Simon",
      attachments: "2 files",
      dateApplied: "02/11/2024",
      shortlisted: true,
    },
    {
      id: "mm004",
      name: "Ali Musa",
      attachments: "2 files",
      dateApplied: "02/11/2024",
      shortlisted: false,
    },
    {
      id: "mm005",
      name: "Feyi Ramat",
      attachments: "2 files",
      dateApplied: "02/11/2024",
      shortlisted: false,
    },
    {
      id: "mm006",
      name: "Korede Tunde",
      attachments: "2 files",
      dateApplied: "02/11/2024",
      shortlisted: true,
    },
    {
      id: "mm007",
      name: "Abigail John",
      attachments: "2 files",
      dateApplied: "04/11/2024",
      shortlisted: true,
    },
  ]);
  return (
    <div>
      <TrackerSkeleton jobs={recruiterJobs} setRecruiterJobs={setRecruiterJobs}/>
    </div>
  );
}
