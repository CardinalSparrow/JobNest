import React, { useState } from "react";
import { useJobContext } from "../Context/JobOpeningContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import JobOpening from "../components/JobOpening";
import Popup from "../components/Portal";
import JobApplicationForm from "../components/JobApplicationForm";
const newJobs = [
  {
    id: "55n",
    jobRole: "Frontend Developer",
    location: "New York, USA",
    jobType: "Remote",
    contractType: "Full Time",
    jobNiche: "Web Development",
    noOfApplicantsNeeded: 3,
    postedBy: "Tech Solutions Inc.",
    jobOverview:
      "We are seeking a passionate Frontend Developer to create user-friendly web applications. In this role, you will collaborate with cross-functional teams to design and implement responsive UI components, optimize performance, and ensure seamless user experiences across various devices. This is an exciting opportunity to work in a fast-paced environment and contribute to innovative digital solutions.",
    responsibilities: [
      "Develop and maintain web applications using HTML, CSS, and JavaScript.",
      "Collaborate with UI/UX designers to implement engaging designs.",
      "Ensure website functionality and performance on various devices.",
      "Optimize code for maximum speed and scalability.",
      "Stay updated on emerging front-end technologies.",
    ],
    skills: [
      "Proficiency in HTML, CSS, and JavaScript.",
      "Experience with React or Angular.",
      "Understanding of responsive design principles.",
      "Familiarity with version control tools like Git.",
      "Problem-solving and communication skills.",
    ],
    experienceRequired: "2+ years of experience in frontend development.",
  },
  {
    id: "55n",
    jobRole: "Graphic Designer",
    location: "Lagos, Nigeria",
    jobType: "Hybrid",
    contractType: "Part Time",
    jobNiche: "Design",
    noOfApplicantsNeeded: 2,
    postedBy: "Creative Agency Ltd.",
    jobOverview:
      "Join our dynamic team as a Graphic Designer, where you'll create visually compelling designs that communicate ideas effectively. Your role will involve developing branding materials, collaborating with teams on various projects, and producing digital and print designs that resonate with target audiences. This position is ideal for individuals passionate about combining creativity with functionality.",
    responsibilities: [
      "Create visually appealing designs for digital and print media.",
      "Develop branding and marketing materials.",
      "Collaborate with teams to ensure design alignment with project goals.",
      "Revise designs based on feedback.",
      "Stay updated on design trends and tools.",
    ],
    skills: [
      "Proficiency in Adobe Creative Suite.",
      "Strong eye for aesthetics and attention to detail.",
      "Ability to work on multiple projects simultaneously.",
      "Knowledge of typography and color theory.",
      "Time management and communication skills.",
    ],
    experienceRequired: "1+ year of experience in graphic design.",
  },
  {
    id: "55g",
    jobRole: "Data Scientist",
    location: "Berlin, Germany",
    jobType: "On-site",
    contractType: "Contract",
    jobNiche: "Data Science",
    noOfApplicantsNeeded: 1,
    postedBy: "Analytics Group GmbH",
    jobOverview:
      "We are looking for a Data Scientist to analyze complex datasets and derive meaningful insights that drive strategic decision-making.",
    responsibilities: [
      "Analyze large datasets to identify trends and patterns.",
      "Develop predictive models using machine learning techniques.",
      "Visualize data insights and communicate findings to stakeholders.",
      "Collaborate with teams to define data requirements.",
      "Ensure data accuracy and integrity.",
    ],
    skills: [
      "Proficiency in Python or R.",
      "Experience with machine learning frameworks like TensorFlow.",
      "Strong analytical and problem-solving skills.",
      "Knowledge of SQL and data visualization tools.",
      "Familiarity with statistical methods.",
    ],
    experienceRequired:
      "3+ years of experience in data analysis or related roles.",
  },
  {
    id: "55z",
    jobRole: "Content Writer",
    location: "London, UK",
    jobType: "Remote",
    contractType: "Freelance",
    jobNiche: "Writing",
    noOfApplicantsNeeded: 5,
    postedBy: "Storytellers Co.",
    jobOverview:
      "As a Content Writer, you will produce engaging and informative content tailored to various audiences and platforms.",
    responsibilities: [
      "Write clear, compelling articles and blog posts.",
      "Conduct in-depth research on industry-related topics.",
      "Edit and proofread content for grammatical accuracy.",
      "Collaborate with the marketing team for content strategy.",
      "Optimize content for SEO and web standards.",
    ],
    skills: [
      "Excellent writing and editing skills.",
      "Familiarity with SEO principles.",
      "Ability to adapt writing style to different audiences.",
      "Strong research abilities.",
      "Attention to detail and creativity.",
    ],
    experienceRequired: "2+ years of content writing experience.",
  },
];
export default function ApplicationDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentApplication } = useJobContext();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  if (!currentApplication) {
    return <div>Loading...</div>;
  }
  return (
    <div className="lg:grid lg:grid-cols-[2fr_1fr]  gap-6 w-1/1 h-auto p-5 w-[100%]">
      <div>
        <div className="lg:flex justify-between">
          <div className="">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCircle} size="3x" />
              <h3 className="font-[600] text-xl ml-2">
                {currentApplication.postedBy}
              </h3>
            </div>
            <h2 className="font-[500] text-3xl">
              {currentApplication.jobRole}
            </h2>
            <p className="text-sm">
              Posted 3 weeks ago by {currentApplication.postedBy}
            </p>
          </div>
          <div className="w-[250px] h-[100px] flex flex-col justify-between">
            <div className=" flex justify-evenly items-center">
              <FontAwesomeIcon icon={faBookmark} size="xl" />
              <FontAwesomeIcon icon={faShare} size="xl" />
              <button
                className="bg-secondary text-white p-2 text-sm font-medium rounded-md"
                onClick={handleClick}
              >
                APPLY NOW!
              </button>
            </div>

            <div className="flex justify-between text-sm">
              <span>{currentApplication.jobType}</span>
              <span>{currentApplication.contractType}</span>{" "}
              <span>Applicants: {currentApplication.noOfApplicantsNeeded}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>{currentApplication.location}</span>
              <span>3 jobs available</span>
            </div>
          </div>
        </div>

        <div className="my-8 lg:w-[85%] sm:w-[100%]">
          <h2 className="font-[500] text-xl text-primary">Job Overview</h2>
          <p className="text-justify">{currentApplication.jobOverview}</p>
        </div>

        <div className="my-8">
          <h2 className="font-[500] text-xl text-primary">Responsibilities</h2>
          <ul className="pl-6 m-0">
            {currentApplication.responsibilities.map((res) => (
              <li className="list-disc my-2" key={currentApplication.id}>
                {res}
              </li>
            ))}
          </ul>
        </div>

        <div className="my-8">
          <h2 className="font-[500] text-xl text-primary">
            Skills/Experience Required
          </h2>
          <ul className="pl-6">
            {currentApplication.skills.map((skill) => (
              <li className="list-disc my-2" key={currentApplication.id}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div>
        <div className="bg-primary lg:h-2/5 mx-5 rounded-lg p-4 text-white flex flex-col justify-around">
          <div>Industry</div>
          <div>Company size</div>
          <div>Email/Mobile Number</div>
          <div>Location</div>
          <div>www.jobweb.org</div>
          <div className="w-1/2 flex justify-between items-center">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <div className="flex justify-around items-center overflow-hidden w-[400px] overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mx-auto my-10">
          {newJobs.map((newJob) => (
            <div className="mx-3 mt-6 flex items-center justify-center">
              <JobOpening jobOpening={newJob} bg={"#C4E2F6"} />
            </div>
          ))}
        </div>
      </div>
      <button
          className="bg-secondary text-white p-2 text-sm font-medium rounded-md w-[20%] min-w-28"
          onClick={handleClick}
        >
          APPLY NOW!
        </button>
      <Popup isOpen={isOpen} onClose={handleClick}>
        <JobApplicationForm />
      </Popup>
    </div>
  );
}
