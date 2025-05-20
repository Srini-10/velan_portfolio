import React from "react";
import { CalendarDays, MessagesSquare } from "lucide-react";
import Deloitte from "../assets/deloitte.png";
import Camergo from "../assets/camergo.png";
import Subastian from "../assets/subastian.png";

const projects = [
  {
    id: 1,
    title: "The Role of Technology In Modern...",
    date: "20/05/2025",
    image: Deloitte,
  },
  {
    id: 2,
    title: "The Role of Technology In Modern...",
    date: "20/05/2025",
    image: Camergo,
  },
  {
    id: 3,
    title: "Digital Marketo To Their New Off...",
    date: "20/05/2025",
    image: Subastian,
  },
];

const Blogs = () => {
  const filteredProjects = projects.slice(0, 3);

  return (
    <div className="bg-[#0a0316] w-screen h-auto flex flex-col justify-start items-center text-center px-20 py-24 relative">
      <h1 className="w-[460px] text-[45px] font-bold bg-gradient-to-r from-violet-600 to-white bg-clip-text text-transparent">
        Recent Blogs
      </h1>
      <p className="w-[650px] text-[16px] font-medium text-gray-300 mt-3">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>

      <div className="w-full mx-auto max-w-[1440px] flex justify-between items-start mt-14">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer w-[400px] h-[350px] group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-violet-600"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute cursor-pointer px-5 w-full h-[110px] bottom-5 transition-all duration-300 ease-linear">
              <div className="relative overflow-hidden w-full h-full rounded-2xl bg-violet-950 opacity-100 transition-all duration-300 ease-linear flex flex-col justify-center items-start py-0 p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-violet-700 to-violet-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>
                <div className="flex flex-col items-start justify-center relative z-10">
                  <div className="flex justify-start items-center space-x-5 mb-3 transition-colors duration-300">
                    <p className="flex items-center gap-x-2 text-violet-600 group-hover:text-white text-[13px] font-semibold transition-colors duration-300 ease-linear">
                      <CalendarDays className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors duration-300 ease-linear" />
                      {project.date}
                    </p>
                    <p className="flex items-center gap-x-2 text-violet-600 group-hover:text-white text-[13px] font-semibold transition-colors duration-300 ease-linear">
                      <MessagesSquare className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors duration-300 ease-linear" />
                      Comment
                    </p>
                  </div>
                  <h3 className="text-white text-start text-[20px] leading-7 font-extrabold mb-1 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
