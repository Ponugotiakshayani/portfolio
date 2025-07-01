"use client";

import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Graduate Research Assistant",
    org: "Arizona State University",
    location: "Arizona, USA",
    date: "Jan 2024 – Dec 2024",
    description:
      "Developed AI system for scientific paper summary with GPT-3 and T5, increasing content efficiency by 40%. Fine-tuned transformer models on text datasets, boosting summarization accuracy and coherence by 30%. Applied advanced NLP techniques with spaCy and HuggingFace Transformers to improve model quality.",
    type: "work",
  },
  {
    role: "System Engineer",
    org: "Tata Consultancy Services",
    location: "Telangana, India",
    date: "Jul 2022 – June 2023",
    description:
      "Designed and implemented RESTful APIs for the Organization module within a distributed microservices architecture. Reduced developer effort by 80% with optimized search and indexing. Engineered secure user authentication with JWT, deployed on AWS EC2. Built OTP-based password reset flow, reducing support queries by 40%. Developed customer feedback API, improving client retention by 60%.",
    type: "work",
  },
  {
    role: "Web Developer Intern",
    org: "LetsGrowMore",
    location: "Telangana, India",
    date: "Oct 2021 – Apr 2022",
    description:
      "Created responsive apps with React.js and Angular, reducing page load time by 40%. Built dynamic UI components with Hooks and RxJS. Designed mobile-first interfaces with HTML, CSS, Bootstrap, improving engagement by 25%.",
    type: "work",
  },
];

export default function Experience() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-16">My Experience</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-300"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative w-full mb-16 flex items-start ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="w-1/2 px-4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-500 mb-1">{exp.date}</p>
                <h3 className="text-lg font-semibold text-black-700">
                  {exp.role} <span className="text-black">- {exp.org}</span>
                </h3>
                <p className="text-sm italic text-gray-600">{exp.location}</p>
                <p className="mt-2 text-gray-700 text-base whitespace-pre-line">{exp.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <FaBriefcase />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
