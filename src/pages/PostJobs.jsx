import React from "react";
import PostJobForm from "../components/PostJobForm";

export default function PostJobs() {
  return (
    <div className="md:-mx-14 my-8">
      <div className="bg-primary text-white text-xl px-4 md:px-24 py-7 mb-7">
        Post a job
      </div>
      <div>
        <PostJobForm />
      </div>
    </div>
  );
}
