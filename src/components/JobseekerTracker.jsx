import React from 'react'
import TrackerSkeleton from './TrackerSkeleton';
const jobsApplied = [
  {
    company: "TechCorp",
    jobTitle: "Senior Designer",
    status: "Interview Scheduled",
    attachments: "2 files",
    dateApplied: "15/11/2024",
  },
  {
    company: "DesignCo",
    jobTitle: "UX Designer",
    status: "Rejected",
    attachments: "3 files",
    dateApplied: "10/11/2024",
  },
  {
    company: "Adventure",
    jobTitle: "Marketing Manager",
    status: "Review in Progress",
    attachments: "2 files",
    dateApplied: "02/11/2024",
  },
  {
    company: "Illuminate",
    jobTitle: "Senior Designer",
    status: "Interview Scheduled",
    attachments: "3 files",
    dateApplied: "15/11/2024",
  },
  {
    company: "Google",
    jobTitle: "Graphics Designer",
    status: "Rejected",
    attachments: "2 files",
    dateApplied: "15/11/2024",
  },
  {
    company: "TechCorp",
    jobTitle: "Software Engineer",
    status: "Interview Scheduled",
    attachments: "2 files",
    dateApplied: "15/11/2024",
  },
];
export default function JobseekerTracker() {
  return (
    <div>
      <TrackerSkeleton data={jobsApplied}/>
    </div>
  )
}
