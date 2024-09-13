import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon, FaGithub, FaNodeJs, FaPhp, FaJava, FaAward, FaUniversity } from "react-icons/fa";
import { SiFlutter, SiAngular, SiLaravel, SiMysql, SiMongodb, SiPython, SiCplusplus, SiRedux, SiTailwindcss, SiReactrouter, SiGoogle } from "react-icons/si";
import { RiReactjsLine, RiNetflixFill, RiGitRepositoryLine } from "react-icons/ri";

function Experience() {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>
      
      {/* Icon Section */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <FaHtml5 color="#e34F26" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <FaCss3 color="#1572B6" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <FaJs color="#F7DF1E" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <FaReact color="#61DAFB" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <FaNodeJs color="#339933" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <FaGithub color="#181717" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiFlutter color="#02569B" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiAngular color="#DD0031" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiLaravel color="#FF2D20" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <FaPhp color="#777BB4" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <RiReactjsLine color="#61DAFB" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiMysql color="#4479A1" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiMongodb color="#47A248" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiPython color="#3776AB" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiCplusplus color="#00599C" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <FaJava color="#007396" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiRedux color="#764ABC" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiReactrouter color="#CA4245" size={50} />
        </span>
        <span className="p-4 bg-zinc-950 flex items-center justify-center rounded-full shadow-xl">
          <SiTailwindcss color="#06B6D4" size={50} />
        </span>
      </div>

      {/* Experience Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-xl">
          <FaGoogle color="#4285F4" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Software Engineer</h2>
            <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
            <ul className="text-sm pt-2">
              <li>Worked as software developer</li>
              <li>Senior SDE developer</li>
            </ul>
          </span>
        </div>

        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-xl">
          <FaAmazon color="#FF9900" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Software Engineer</h2>
            <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
            <ul className="text-sm pt-2">
              <li>Worked as software developer</li>
              <li>Senior SDE developer</li>
            </ul>
          </span>
        </div>

        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-xl">
          <RiNetflixFill color="#E50914" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Software Engineer</h2>
            <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
            <ul className="text-sm pt-2">
              <li>Worked as software developer</li>
              <li>Senior SDE developer</li>
            </ul>
          </span>
        </div>

        {/* New Content for Internship */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-xl">
          <FaUniversity color="#1DA1F2" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Internship</h2>
            <p className="text-sm leading-tight font-thin">Finished internship at XYZ Company</p>
            <ul className="text-sm pt-2">
              <li>Worked on full-stack development</li>
              <li>Improved skills in React and database management</li>
            </ul>
          </span>
        </div>

        {/* New Content for Awards */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-xl">
          <FaAward color="#FFD700" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Awards and Rewards</h2>
            <ul className="text-sm pt-2">
              <li>Best Developer of the Year (2024)</li>
              <li>Top Contributor in XYZ Platform</li>
            </ul>
          </span>
        </div>

        {/* New Content for GitHub Contributions */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-xl">
          <FaGithub color="#181717" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">GitHub Contributions</h2>
            <p className="text-sm leading-tight font-thin">Open Source Contributor</p>
            <ul className="text-sm pt-2">
              <li>Contributed to various open-source projects</li>
              <li>Maintained personal repositories</li>
            </ul>
          </span>
        </div>

        {/* New Content for GSoC */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-xl">
          <SiGoogle color="#4285F4" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Google Summer of Code (GSoC)</h2>
            <ul className="text-sm pt-2">
              <li>Worked on open-source projects for Google</li>
              <li>Developed tools for large-scale systems</li>
            </ul>
          </span>
        </div>

        {/* New Content for Projects */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-xl">
          <RiGitRepositoryLine color="#F1502F" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Projects</h2>
            <ul className="text-sm pt-2">
              <li>Expertise in frontend and backend development</li>
              <li>Worked on login, validation, database handling</li>
              <li>Developed full-stack applications</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
