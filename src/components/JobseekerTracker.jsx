import React, { useState } from 'react'
import TrackerSkeleton from './TrackerSkeleton';
export default function JobseekerTracker() {
  const [appliedJobs, setAppliedJobs] = useState([
    {
      id:"mx120",
      company: "TechCorp",
      jobTitle: "Senior Designer",
      status: "Interview Scheduled",
      attachments: "2 files",
      dateApplied: "15/11/24",
    },
    {
      id:"mx121",
      company: "DesignCo",
      jobTitle: "UX Designer",
      status: "Rejected",
      attachments: "3 files",
      dateApplied: "10/11/24",
    },
    {
      id:"mx122",
      company: "Adventure",
      jobTitle: "Marketing Manager",
      status: "Review in Progress",
      attachments: "2 files",
      dateApplied: "02/11/24",
    },
    {
      id:"mx123",
      company: "Illuminate",
      jobTitle: "Senior Designer",
      status: "Interview Scheduled",
      attachments: "3 files",
      dateApplied: "15/11/24",
    },
    {
      id:"mx124",
      company: "Google",
      jobTitle: "Graphics Designer",
      status: "Rejected",
      attachments: "2 files",
      dateApplied: "15/11/24",
    },
    {
      id:"mx125",
      company: "TechCorp",
      jobTitle: "Software Engineer",
      status: "Interview Scheduled",
      attachments: "2 files",
      dateApplied: "15/11/24",
    },
  ])
  return (
    <div>
      <TrackerSkeleton jobs={appliedJobs} setAppliedJobs={setAppliedJobs}/>
    </div>
  )
}
