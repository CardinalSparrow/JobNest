import React from "react";
import TrackerSkeleton from "./TrackerSkeleton";
const recruiterJobs = [
  {
    name: "Tola Peter",
    attachments: "2 files",
    dateApplied: "15/11/2024",
    shortlisted: true,
    rejected: false,
  },
  {
    name: "Ike Chukwu",
    attachments: "3 files",
    dateApplied: "19/11/2024",
    shortlisted: false,
    rejected: true,
  },
  {
    name: "Paul Simon",
    attachments: "2 files",
    dateApplied: "02/11/2024",
    shortlisted: true,
    rejected: false,
  },
  {
    name: "Ali Musa",
    attachments: "2 files",
    dateApplied: "02/11/2024",
    shortlisted: false,
    rejected: false,
  },
  {
    name: "Feyi Ramat",
    attachments: "2 files",
    dateApplied: "02/11/2024",
    shortlisted: false,
    rejected: true,
  },
  {
    name: "Korede Tunde",
    attachments: "2 files",
    dateApplied: "02/11/2024",
    shortlisted: true,
    rejected: false,
  },
];
export default function RecruiterTracker() {
  return (
    <div>
      <TrackerSkeleton data={recruiterJobs}/>
    </div>
  );
}
