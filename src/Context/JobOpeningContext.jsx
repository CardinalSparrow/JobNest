import React, { createContext, useContext, useEffect, useState } from "react";
const JobContext = createContext();
export const useJobContext = () => useContext(JobContext);
export const JobProvider = ({ children }) => {
  const [jobOpenings, setJobOpenings] = useState([
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
    {
      id: 5,
      jobRole: "Marketing Manager",
      location: "Toronto, Canada",
      jobType: "Hybrid",
      contractType: "Full Time",
      jobNiche: "Marketing",
      noOfApplicantsNeeded: 1,
      postedBy: "MarketPro Inc.",
      jobOverview:
        "We are hiring a Marketing Manager to lead impactful campaigns that drive brand visibility and audience engagement. In this role, you will develop and execute comprehensive marketing strategies, oversee projects from conception to completion, and collaborate with various teams to ensure alignment with business goals. Analyzing campaign performance and staying ahead of industry trends will be critical to your success. Ideal candidates possess excellent leadership, creativity, and communication skills, with a proven track record of delivering successful marketing initiatives.",
      responsibilities: [
        "Develop and implement marketing strategies.",
        "Oversee marketing campaigns from concept to execution.",
        "Analyze campaign performance and ROI.",
        "Collaborate with cross-functional teams to align strategies.",
        "Stay updated on industry trends.",
      ],
      skills: [
        "Strong leadership and communication skills.",
        "Expertise in digital marketing platforms.",
        "Ability to analyze and interpret data.",
        "Experience with branding and positioning.",
        "Proficiency in project management.",
      ],
      experienceRequired: "4+ years of experience in marketing roles.",
    },
    {
      id: 6,
      jobRole: "Cybersecurity Analyst",
      location: "San Francisco, USA",
      jobType: "On-site",
      contractType: "Full Time",
      jobNiche: "Cybersecurity",
      noOfApplicantsNeeded: 4,
      postedBy: "SecureTech Corp.",
      jobOverview:
        "SecureTech Corp. is looking for a proactive Cybersecurity Analyst to safeguard our systems from threats and vulnerabilities. You will be tasked with monitoring networks, identifying risks, and implementing robust security measures. Responsibilities include responding to security incidents, performing regular audits, and creating strategies to enhance our defenses. The ideal candidate will have strong analytical skills, a keen eye for detail, and hands-on experience with threat detection and prevention tools. Join us to tackle complex cybersecurity challenges in a dynamic and innovative environment.",
      responsibilities: [
        "Monitor systems for potential vulnerabilities.",
        "Develop strategies to prevent cyber attacks.",
        "Respond to security breaches and manage incident reporting.",
        "Collaborate with IT teams to implement security measures.",
        "Conduct regular audits to ensure system security.",
      ],
      skills: [
        "In-depth knowledge of network security protocols.",
        "Experience with security tools like SIEM.",
        "Strong analytical and troubleshooting skills.",
        "Understanding of risk assessment methodologies.",
        "Excellent documentation and communication skills.",
      ],
      experienceRequired: "3+ years in cybersecurity or related fields.",
    },
    {
      id: 7,
      jobRole: "UI/UX Designer",
      location: "Sydney, Australia",
      jobType: "Remote",
      contractType: "Contract",
      jobNiche: "Design",
      noOfApplicantsNeeded: 2,
      postedBy: "DesignWorks AU",
      jobOverview:
        "We are seeking a creative UI/UX Designer to craft intuitive and visually engaging user interfaces for a global audience. Your role will involve designing wireframes, prototypes, and user flows while conducting user research and usability testing to refine the user experience. You will collaborate with developers, product managers, and other stakeholders to ensure designs align with business goals and brand guidelines. A strong portfolio demonstrating user-focused design and expertise in industry-standard tools is essential for success in this role.",
      responsibilities: [
        "Design wireframes, prototypes, and user flows.",
        "Collaborate with developers to implement designs.",
        "Conduct user research and usability testing.",
        "Ensure designs align with brand guidelines.",
        "Stay updated on design trends and best practices.",
      ],
      skills: [
        "Proficiency in Figma or Adobe XD.",
        "Strong understanding of user-centered design principles.",
        "Ability to translate complex ideas into intuitive interfaces.",
        "Excellent collaboration and communication skills.",
        "Attention to detail and creativity.",
      ],
      experienceRequired: "2+ years of experience in UI/UX design.",
    },
    {
      id: 8,
      jobRole: "Backend Developer",
      location: "Bangalore, India",
      jobType: "On-site",
      contractType: "Full Time",
      jobNiche: "Software Development",
      noOfApplicantsNeeded: 3,
      postedBy: "CodeMaster Pvt. Ltd.",
      jobOverview:
        "Join CodeMaster Pvt. Ltd. as a Backend Developer and be at the heart of scalable server-side application development. Your role will involve creating robust APIs, optimizing application performance, and collaborating with front-end teams for seamless integration. You will manage database systems, ensure code quality, and develop solutions that meet user needs while adhering to industry best practices. Ideal candidates should have experience with server-side programming languages, database management systems, and a passion for solving complex technical challenges.",
      responsibilities: [
        "Develop server-side logic and APIs.",
        "Ensure high performance and responsiveness of applications.",
        "Collaborate with front-end developers for integration.",
        "Optimize applications for maximum speed.",
        "Maintain code quality and organization.",
      ],
      skills: [
        "Proficiency in Node.js, Python, or Java.",
        "Experience with RESTful APIs and microservices.",
        "Strong database management skills (SQL/NoSQL).",
        "Familiarity with version control tools like Git.",
        "Problem-solving and debugging skills.",
      ],
      experienceRequired: "3+ years of experience in backend development.",
    },
    {
      id: 9,
      jobRole: "Project Manager",
      location: "Dubai, UAE",
      jobType: "Hybrid",
      contractType: "Part Time",
      jobNiche: "Management",
      noOfApplicantsNeeded: 1,
      postedBy: "Innovative Projects LLC",
      jobOverview:
        "Innovative Projects LLC is hiring a skilled Project Manager to oversee diverse projects from inception to completion. As the Project Manager, you will manage budgets, timelines, and resources, ensuring projects are completed on time and within scope. Your responsibilities include mitigating risks, preparing detailed project reports, and maintaining effective communication with stakeholders. The ideal candidate will excel in leadership, possess excellent problem-solving skills, and have a proven track record in delivering quality outcomes for high-impact projects.",
      responsibilities: [
        "Plan and execute projects from start to finish.",
        "Manage project budgets, resources, and timelines.",
        "Communicate with stakeholders to align expectations.",
        "Identify and mitigate project risks.",
        "Prepare and present project reports.",
      ],
      skills: [
        "Strong leadership and organizational skills.",
        "Proficiency in project management tools.",
        "Ability to manage multiple tasks simultaneously.",
        "Excellent communication and negotiation skills.",
        "Knowledge of project lifecycle methodologies.",
      ],
      experienceRequired: "4+ years in project management roles.",
    },
    {
      id: 10,
      jobRole: "Social Media Specialist",
      location: "Cape Town, South Africa",
      jobType: "Remote",
      contractType: "Freelance",
      jobNiche: "Social Media Marketing",
      noOfApplicantsNeeded: 2,
      postedBy: "SocialSphere SA",
      jobOverview:
        "SocialSphere SA is looking for an innovative Social Media Specialist to enhance our online presence. You will develop and execute social media strategies, create engaging content, and analyze performance metrics to drive audience engagement. Collaborate with cross-functional teams to ensure consistent branding and messaging. Stay updated on trends to implement creative ideas that set our brand apart. This role requires a passion for social media, strong content creation skills, and the ability to use analytics tools effectively.",
      responsibilities: [
        "Develop and execute social media strategies.",
        "Create and schedule engaging content.",
        "Analyze social media performance and metrics.",
        "Collaborate with teams to ensure brand consistency.",
        "Stay updated on social media trends.",
      ],
      skills: [
        "Proficiency in social media tools like Hootsuite.",
        "Excellent communication and creative writing skills.",
        "Understanding of analytics and reporting tools.",
        "Ability to multitask and meet deadlines.",
        "Knowledge of paid social media campaigns.",
      ],
      experienceRequired: "2+ years of experience in social media management.",
    },
    {
      id: 11,
      jobRole: "DevOps Engineer",
      location: "Singapore",
      jobType: "Hybrid",
      contractType: "Full Time",
      jobNiche: "Cloud Computing",
      noOfApplicantsNeeded: 3,
      postedBy: "CloudOps Technologies",
      jobOverview:
        "CloudOps Technologies seeks a talented DevOps Engineer to optimize our cloud infrastructure and automate critical processes. You will manage cloud platforms, implement CI/CD pipelines, monitor system performance, and ensure reliability across services. Your expertise will be critical in resolving system challenges, ensuring security, and maintaining compliance. Ideal candidates have experience with cloud technologies, container orchestration tools, and scripting languages. This is an exciting opportunity to work in a dynamic environment that embraces innovation and continuous improvement.",
      responsibilities: [
        "Manage and optimize cloud infrastructure.",
        "Implement automation tools and CI/CD pipelines.",
        "Collaborate with software development teams to improve system reliability.",
        "Monitor system performance and troubleshoot issues.",
        "Ensure security and compliance across the infrastructure.",
      ],
      skills: [
        "Experience with cloud platforms (AWS, Azure, GCP).",
        "Strong knowledge of CI/CD tools and automation.",
        "Familiarity with containerization and orchestration tools (Docker, Kubernetes).",
        "Proficiency in scripting languages like Python, Bash, or Go.",
        "Excellent problem-solving and teamwork skills.",
      ],
      experienceRequired: "3+ years of experience in DevOps or related fields.",
    },
    {
      id: 12,
      jobRole: "AI Researcher",
      location: "Tokyo, Japan",
      jobType: "On-site",
      contractType: "Contract",
      jobNiche: "Artificial Intelligence",
      noOfApplicantsNeeded: 2,
      postedBy: "AI Labs Japan",
      jobOverview:
        "Join AI Labs Japan as an AI Researcher and contribute to groundbreaking advancements in artificial intelligence. In this role, you will conduct in-depth research, develop innovative AI models, and collaborate with engineering teams to integrate these solutions into products. Stay informed on the latest AI techniques, publish your findings, and contribute to enhancing the company’s technological edge. The ideal candidate will possess strong problem-solving skills, advanced knowledge of machine learning algorithms, and a passion for advancing AI technologies.",
      responsibilities: [
        "Conduct research in AI and machine learning algorithms.",
        "Develop new AI models and evaluate their performance.",
        "Collaborate with engineering teams to integrate AI solutions into products.",
        "Stay up-to-date with the latest AI research and techniques.",
        "Publish research findings in academic journals and conferences.",
      ],
      skills: [
        "Expertise in machine learning and AI techniques.",
        "Strong programming skills in Python, TensorFlow, and PyTorch.",
        "Experience with data analysis and working with large datasets.",
        "Familiarity with deep learning models and neural networks.",
        "Strong communication skills for presenting research findings.",
      ],
      experienceRequired:
        "2+ years of experience in AI research or related fields.",
    },
  ]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [currentApplication, setCurrentApplication] = useState(null);
  useEffect(() => {
    console.log(currentApplication);
  }, [currentApplication]);
  const saveJob = (newJob) => {
    if (!savedJobs.some((job) => job.id === newJob.id)) {
      setSavedJobs((prev) => [...prev, newJob]);
    } else {
      console.log("This job is already saved.");
      setSavedJobs((prev) => prev.filter((job) => job.id !== newJob.id));
    }
  };
  const applyNowClickHandler = (jobOpening) => {
    setCurrentApplication(jobOpening);
  };
  return (
    <JobContext.Provider
      value={{
        jobOpenings,
        setJobOpenings,
        savedJobs,
        saveJob,
        applyNowClickHandler,
        currentApplication,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
