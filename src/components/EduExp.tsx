import { GraduationCap, Medal } from "lucide-react";
import React from "react";

const EduExp = () => {
  const education = [
    {
      period: "2022-Present",
      institution: "Harverd University",
      degree: "PROGRAMMING COURSE",
    },
    {
      period: "2020-2023",
      institution: "University of Denmark",
      degree: "BLOCKDOTS",
    },
    {
      period: "2016-2020",
      institution: "Parsons, The New School",
      degree: "CMS COURSE",
    },
    {
      period: "2012-2015",
      institution: "University of California",
      degree: "WEB DESIGN COURSE",
    },
  ];

  const experience = [
    {
      period: "2021-2022",
      company: "Blockdots, London",
      position: "Blockdots",
    },
    {
      period: "2020-2021",
      company: "House of Life, Leeds",
      position: "Parsons, The New School",
    },
    {
      period: "2018-2020",
      company: "IDEO",
      position: "IDEO",
    },
    {
      period: "2010-2011",
      company: "University of California",
      position: "University of California",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black dark:bg-gray-900">
      <div className="flex justify-center items-start gap-32">
        {/* Experience Column */}
        <div>
          <h3 className="text-[45px] flex justify-start items-center gap-x-3 font-bold mb-8 text-transparent bg-gradient-to-r from-violet-600 via-violet-400 to-white bg-clip-text">
            <Medal className="text-violet-600 w-14 h-14" /> My Experience
          </h3>
          <div className="space-y-8 relative">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative rounded-2xl py-6 px-10 bg-[#110524] group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-violet-700 to-violet-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>

                <div className="relative z-10">
                  <div className="text-[20px] font-extrabold text-violet-600 group-hover:text-white transition-all duration-500 ease-linear">
                    {exp.period}
                  </div>
                  <h4 className="text-[30px] font-bold mt-1 text-white dark:text-white">
                    {exp.position}
                  </h4>
                  <p className="text-white dark:text-gray-400">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="text-[45px] flex justify-start items-center gap-x-3 font-bold mb-8 text-transparent bg-gradient-to-r from-violet-600 via-violet-400 to-white bg-clip-text">
            <GraduationCap className="text-violet-600 w-14 h-14" /> My Education
          </h3>

          <div className="space-y-8 relative">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative rounded-2xl py-6 px-10 bg-[#110524] group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-violet-700 to-violet-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>

                <div className="relative z-10">
                  <div className="text-[20px] font-extrabold text-violet-600 group-hover:text-white transition-all duration-500 ease-linear">
                    {edu.period}
                  </div>
                  <h4 className="text-[30px] font-bold mt-1 text-white dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-white dark:text-gray-400">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduExp;
