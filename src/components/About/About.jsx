import React from "react";
import { IoArrowForward } from "react-icons/io5";
import pic from '../../assets/about1.jpg'

const About = () => {
  return (
    <div id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="w-1/2 border-black  border-2 rounded-3xl" src={pic} alt="About image" />

          <ul>
            <div className="flex gap-3 py-4 px-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Full Stack Web Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I am a full-stack web developer with expertise in various frameworks, including Angular, Django, React.js, Node.js, Laravel, 
                and databases like MySQL, MongoDB, and JSON server. 
                I have worked with tools such as XAMPP to build and deploy full-fledged projects.
                 My portfolio includes diverse projects, including e-commerce websites and portfolios,
                  utilizing these frameworks and libraries to create robust, scalable applications.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4 px-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Machine Learning Enthusiast
                </h1>
                <p className="text-sm md:text-md leading-tight">
                In addition to web development, I am a machine learning enthusiast. 
                I have extensive experience working with libraries like NumPy, Pandas, Scikit-learn, Torch, and TensorFlow,
                 building and training machine learning models. My passion for AI drives me to constantly explore new techniques 
                 and apply them to solve complex problems using Python.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4 px-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Data Analyst
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I also have a solid background in data analysis, working with tools like Excel, NumPy, Pandas, Matplotlib, and Power BI. 
                Whether it's handling large datasets or visualizing data insights, I enjoy turning raw data into meaningful, actionable information.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4 px-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                App Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                In addition to web development and machine learning, I have ventured into app development, learning frameworks like Flutter, Dart, and React Native. 
                I have applied these skills to build applications,
                 including a Tech-Educational App using Flutter and Dart, 
                 showcasing my ability to create cross-platform mobile apps with smooth user experiences.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
