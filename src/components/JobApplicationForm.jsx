import React from "react";

export default function JobApplicationForm() {
  const handleClick = (e)=>{
  e.preventDefault()
  }
  return (
    <div className=" h-[100%] p-5">
      <form className=" h-[100%] flex flex-col justify-around">
        <div className=" flex justify-between  items-center">
          <label htmlFor="jobTitle" className=" w-[20%] text-sm">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            id="jobTitle"
            className="w-[75%] p-2"
          />
        </div>
        <div className=" flex justify-between items-center">
          <label htmlFor="fullName" className=" w-[20%] text-sm">
            Full Name
          </label>
          <input
            type="text"
            name="title"
            id="fullName"
            className="w-[75%] p-2"
          />
        </div>
        <div className=" flex justify-between items-center">
          <label htmlFor="email" className=" w-[20%] text-sm">
            Email
          </label>
          <input type="text" name="title" id="email" className="w-[75%] p-2" />
        </div>
        <div className=" flex justify-between items-center">
          <label htmlFor="tel" className=" w-[25%] text-sm">
            Mobile Number
          </label>
          <input type="text" name="title" id="tel" className="w-[75%] p-2" />
        </div>
        <div className="">
          <input type="file" name="coverLetter" id="coverLetter" />
          <p className="text-xs">
            Upload a cover letter no larger than 10MB for file types .pdf .doc
            .docx .rtf <span className="text-red-600">*</span>
          </p>
        </div>
        <div className="">
          <input type="file" name="cv" id="cv" />

          <p className="text-xs">
            Upload a CV no larger than 10MB for file types .pdf .doc .docx .rtf{" "}
            <span className="text-red-600">*</span>
          </p>
        </div>
        <div>
          <p className="text-xs">Add a portfolio link</p>
          <input type="text" className="p-1 mt-1 w-[100%]" />
        </div>
        <div className="flex justify-end items-center">
          <button type="submit" className="text-white font-[600] rounded-md bg-primary px-6 py-2 " onClick={(e)=>handleClick(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
