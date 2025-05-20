import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import { MoveUpRight } from "lucide-react";
import Deloitte from "../assets/deloitte.png";
import Camergo from "../assets/camergo.png";
import Subastian from "../assets/subastian.png";
import Mochnix from "../assets/mochnix.png";

const tabItems = [
  { id: "all", label: "All" },
  { id: "uiux", label: "UI/UX" },
  { id: "branding", label: "Branding" },
  { id: "app", label: "App" },
];

const projects = [
  {
    id: 1,
    title: "Deloitte",
    description: "Project was about precision and information",
    category: "branding",
    image: Deloitte,
  },
  {
    id: 2,
    title: "New Age",
    description: "Project was about precision and information",
    category: "uiux",
    image: Camergo,
  },
  {
    id: 3,
    title: "Subastian",
    description: "Project was about precision and information",
    category: "app",
    image: Subastian,
  },
  {
    id: 4,
    title: "Mechonix",
    description: "Project was about precision and information",
    category: "branding",
    image: Mochnix,
  },
];

const Works = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects.slice(0, 8)
      : projects
          .filter((project) => project.category === activeTab)
          .slice(0, 4);

  return (
    <section className="h-auto flex flex-col items-center px-[75px] py-24 space-y-20 bg-[#0a0316] text-white relative overflow-hidden">
      {/* Header section */}
      <div className="w-full flex flex-col items-center text-center">
        <h1 className="w-[460px] text-[45px] font-bold bg-gradient-to-r from-violet-600 to-white bg-clip-text text-transparent">
          My Recent Works
        </h1>
        <p className="w-[650px] text-[16px] font-medium text-gray-300 mt-3">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>

      {/* Background elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-600/50 blur-[120px]"></div>

      {/* Tabs and Projects */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Centered Tabs */}
        <div className="mb-12 flex justify-center w-full">
          <Tabs
            aria-label="Portfolio tabs"
            variant="solid"
            radius="full"
            classNames={{
              base: "w-full max-w-md",
              tabList: "bg-black p-2",
              cursor:
                "bg-gradient-to-r from-violet-600 via-violet-700 to-violet-950",
              tab: "text-white px-6 py-5 hover:bg-transparent",
              tabContent:
                "group-data-[selected=true]:text-white text-white font-medium",
            }}
            selectedKey={activeTab}
            onSelectionChange={(key) => setActiveTab(key as string)}
          >
            {tabItems.map((item) => (
              <Tab key={item.id} title={item.label} />
            ))}
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full h-[500px] group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-950 hover:border-violet-600"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500"
              />

              {/* Gradient overlay that appears on hover */}
              <div className="absolute cursor-pointer px-5 w-full h-[120px] group-hover:opacity-100 opacity-0 group-hover:bottom-5 bottom-0 transition-all duration-200 ease-linear">
                <div className="w-full h-full rounded-2xl bg-gradient-to-r from-violet-600 via-violet-700 to-violet-950 opacity-100 transition-opacity duration-300 flex flex-col justify-end pb-3 p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start justify-center">
                      <h3 className="text-white text-[30px] font-extrabold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-100 text-[16px] font-medium mb-3">
                        {project.description}
                      </p>
                    </div>

                    <span className="text-white text-xl font-bold transition-transform duration-300 rotate-[-500deg] group-hover:rotate-0">
                      <MoveUpRight
                        className={`w-[30px] h-[30px] transition-transform duration-300 transform text-white rotate-90 group-hover:rotate-0
                        `}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
