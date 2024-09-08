import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

function Experience() {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2x1 md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#e34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#e34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#e34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#e34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#e34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#e34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#e34F26" size={50} />
          </span>
        </div>
<div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
          <FaGoogle color="#4285F4" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Software Engineer</h2>
            <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
            <ul className="text-sm p-2">
              <li>Worked as software developer</li>
              <li>Senior SDE developer</li>
            </ul>
          </span>
        </div>

        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
          <FaAmazon color="#4285F4" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Software Engineer</h2>
            <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
            <ul className="text-sm p-2">
              <li>Worked as software developer</li>
              <li>Senior SDE developer</li>
            </ul>
          </span>
        </div>

        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
          <RiNetflixFill color="#4285F4" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Software Engineer</h2>
            <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
            <ul className="text-sm p-2">
              <li>Worked as software developer</li>
              <li>Senior SDE developer</li>
            </ul>
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
