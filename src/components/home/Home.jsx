import React from "react";
import pic from '../../assets/profile-pic.png';
import TextChanges from "../TextChanges/TextChanges";

const Home = () => {
  return (
    <div className="">
      <div className="text-white flex w-full justify-between items-center p-10 md:p-20">
        <div className="md:w-4/4 md:pt-10">
          <h1 className="text-4xl md:text-8xl font-bold flex leading-normal tracking-tighter mb-6">
            <TextChanges />
          </h1>
          <p className="text-sm md:text-2xl mb-8">
            Currently pursuing a degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Ramaiah Institute of Technology. 
            I have a deep passion for technology, especially in the exciting and rapidly growing fields of AI and ML.
          </p>
          <a href="#Footer">
            <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact Me!
            </button>
          </a>
        </div>
        <div className="relative ">
          <img src={pic} alt="Profile" className="w-full md:w-auto shadow-lg relative z-10" />
          <div className="absolute inset-0 bg-white opacity-80 blur-md rounded-full z-0"></div>
        </div>
      </div>
    </div>
  );
};

{/* <div className="relative flex items-center justify-center">
<div className="absolute w-40 h-40 md:w-60 md:h-60 bg-white rounded-full blur-lg opacity-50"></div>
<img src={pic} alt="Profile" className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full relative z-10" />
</div> */}

export default Home;
