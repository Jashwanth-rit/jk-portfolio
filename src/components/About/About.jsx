import React from "react";
import { IoArrowForward } from "react-icons/io5";
import pic from '../../assets/about1.jpg';

const About = () => {
  return (
    <div id="About" className="text-white bg-black bg-opacity-30 shadow-xl rounded-lg mx-0 md:mx-20 p-6 md:p-12">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">About Me</h2>
      
      <div className="md:flex md:gap-10 items-center">
        {/* Image Section */}
        <img 
          className="hidden md:block w-1/3 md:w-1/4 border-black border-2 rounded-3xl" 
          src={pic} 
          alt="About image" 
        />

        {/* Content Section */}
        <div className="flex flex-col gap-8 w-full">
          {/* Web Developer Section */}
          <div className="flex gap-3 items-start">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-normal mb-2">Full Stack Web Developer</h3>
              <p className="text-sm md:text-md leading-tight">
                I am a full-stack web developer with expertise in Angular, Django, React.js, Node.js, Laravel, and databases like MySQL and MongoDB. My portfolio includes diverse projects like e-commerce websites, showcasing robust, scalable applications.
              </p>
            </div>
          </div>
          
          {/* Machine Learning Section */}
          <div className="flex gap-3 items-start">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-normal mb-2">Machine Learning Enthusiast</h3>
              <p className="text-sm md:text-md leading-tight">
                In addition to web development, I am a machine learning enthusiast experienced in libraries like NumPy, Pandas, and TensorFlow, applying AI techniques to solve complex problems using Python.
              </p>
            </div>
          </div>
          
          {/* Data Analyst Section */}
          <div className="flex gap-3 items-start">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-normal mb-2">Data Analyst</h3>
              <p className="text-sm md:text-md leading-tight">
                I have a solid background in data analysis, working with tools like Excel, NumPy, and Power BI to turn raw data into actionable insights.
              </p>
            </div>
          </div>

          {/* App Developer Section */}
          <div className="flex gap-3 items-start">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-normal mb-2">App Developer</h3>
              <p className="text-sm md:text-md leading-tight">
                I have also ventured into app development using Flutter, Dart, and React Native, showcasing cross-platform mobile apps like a Tech-Educational App.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
