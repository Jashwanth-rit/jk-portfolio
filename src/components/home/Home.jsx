import React from "react";
import pic from "../../assets/profile1.png";
import TextChanges from "../TextChanges/TextChanges";
import resume from "../../assets/Jk_resume.pdf";

const Home = () => {
  return (
    <div className="">
      <div className="text-white flex w-full justify-between items-center p-10 md:p-20">
        <div className="md:w-4/4 md:pt-10">
          <h1 className="text-4xl md:text-8xl font-bold flex leading-normal tracking-tighter mb-6">
            <TextChanges />
          </h1>
          <p className="text-sm md:text-2xl mb-8">
            Currently pursuing a degree in Computer Science and Engineering with
            a specialization in Artificial Intelligence and Machine Learning at
            Ramaiah Institute of Technology. I have a deep passion for
            technology, especially in the exciting and rapidly growing fields of
            AI and ML.
          </p>
          <div className="mt-5">
            <a href="#Footer">
              <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] mr-4">
                Contact Me!
              </button>
            </a>
          
            <a href={resume} download="Jk_resume.pdf">
              <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="relative ">
          <img
            src={pic}
            alt="Profile"
            className="w-full md:w-auto shadow-lg relative z-10"
          />
          <div className="absolute inset-0 bg-white opacity-80 blur-md rounded-full z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
