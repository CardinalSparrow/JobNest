import React, { useState } from "react";

export default function PostJobForm() {
  const [wordCount, setWordCount] = useState(0);
  return (
    <form className="md:w-[55%] mx-auto p-6 text-sm">
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="banner">
          Job Banner Image <span className="text-[10px]">(optional)</span>
        </label>
        <div className="w-[65%]">
          <input type="file" name="banner" id="banner" className="text-sm" />
          <p className="text-[10px]">Maximum file size: 2MB.</p>
        </div>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="title">
          Job Title<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border border-black md:w-[65%] p-2 rounded-[4px] text-sm"
        />
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="industry">
          Industry<span className="text-red-700">*</span>
        </label>
        <select
          required
          name="industry"
          id="industry"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
        </select>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="type">
          Job Type<span className="text-red-700">*</span>
        </label>
        <select
          required
          name="type"
          id="type"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="one">Contract</option>
          <option value="two">Freelance</option>
          <option value="three">Full-Time</option>
          <option value="four">Hybrid</option>
          <option value="one">Internship</option>
          <option value="two">Part-Time</option>
          <option value="three">Remote</option>
          <option value="four">Volunteer</option>
        </select>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="Location">
          Location<span className="text-red-700">*</span>
        </label>
        <select
          required
          name="Location"
          id="Location"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
        </select>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="qualification">
          Qualification<span className="text-red-700">*</span>
        </label>
        <select
          required
          name="qualification"
          id="qualification"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="one">High School Diploma / SSCE / GED</option>
          <option value="two">Diploma / Associate Degree</option>
          <option value="three">Bsc.</option>
          <option value="four">Master's Degree</option>
        </select>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="experience">
          Job Experience<span className="text-red-700">*</span>
        </label>
        <select
          required
          name="experience"
          id="experience"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="one">No Experience Required</option>
          <option value="two">Less than 1 year</option>
          <option value="three">1-2 years</option>
          <option value="four">3-5 years</option>
          <option value="three">6-10 years</option>
          <option value="four">11+ years</option>
        </select>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="Level" className="">Job Level</label>
        <select
          name="Level"
          id="Level"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="one">Internship</option>
          <option value="two">Entry Level</option>
          <option value="three">Junior Level</option>
          <option value="four">Mid Level</option>
          <option value="four">Senior Level</option>
        </select>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="Skills">
          Job Skills<span className="text-red-700">*</span>
        </label>
        <select
          required
          name="Skills"
          id="Skills"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="one">Communication & Interpersonal Skills</option>
          <option value="two">Customer Service</option>
          <option value="three">Marketing & Sales</option>
          <option value="four">Analytical & Research Skills</option>
          <option value="three">Creativity & Design</option>
          <option value="four">Finance & Accounting</option>
        </select>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="opening">Available Opening</label>
        <select
          name="opening"
          id="opening"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="one"> 1 Opening</option>
          <option value="two"> 2 Openings</option>
          <option value="three"> 3-5 Openings</option>
          <option value="four">21+ Openings</option>
        </select>
      </div>
      <div className="border-b border-black flex justify-between items-center mb-1 py-2">
        <label htmlFor="deadline">
          Deadline<span className="text-red-700">*</span>
        </label>
        <input type="date" name="deadline" id="deadline" required />
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between  md:items-start mb-1 py-2">
        <label htmlFor="summary">
          Job Summary<span className="text-red-700">*</span>
        </label>
        <div className="md:w-[65%]">
          <textarea
            required
            name="summary"
            id="summary"
            className="w-[100%] h-[100px] border border-black rounded-[5px]"
          ></textarea>
          <p className="text-[10px] text-right">{`${wordCount} / 300 words.`} </p>
        </div>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between  md:items-start mb-1 py-2">
        <label htmlFor="req">
          Job Description / Requirements<span className="text-red-700">*</span>
        </label>
        <div className="md:w-[65%]">
          <textarea
            required
            name="req"
            id="req"
            className="w-[100%] h-[100px] border border-black rounded-[5px]"
          ></textarea>
          <p className="text-[10px] text-right">{`${wordCount} / 300 words.`} </p>
        </div>
      </div>
      <div className="border-b border-black flex flex-col md:flex-row lg:flex-row justify-between md:items-center mb-1 py-2">
        <label htmlFor="coverL">Apply with cover letter?</label>
        <select
          name="cover"
          id="coverL"
          className="md:w-[65%] border border-black p-2 rounded-[4px] text-sm"
        >
          <option value="select" disabled selected>
            Select...
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="my-5">
        <button className="bg-primary border border-primary text-white mr-7 px-5 py-2 rounded-md">
          Save Draft
        </button>
        <button className="border border-primary mr-7 px-5 py-2 rounded-md">
          Preview
        </button>
      </div>
    </form>
  );
}
