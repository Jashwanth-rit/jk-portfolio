import React from "react";
import pic from '../../assets/profile1.png'
import TextChanges from "../TextChanges/TextChanges";


const Home = () => {
  return (
   <div className="">
     <div className="text-white flex  w-full justify-between
     items-center p-10 md:p-20">
      <div className="md:w-4/4 md:pt-10">
      <h1 className="text-4xl md:text-8xl font-bold flex leading-normal tracking-tighter">
        <TextChanges />
      </h1>
      <p className="text-sm md:text-2xl ">
      currently pursuing a degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Ramaiah Institute of Technology. 
      I have a deep passion for technology, especially in the exciting and rapidly growing fields of AI and ML.
      </p>
     
       <a href="#Footer"> <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
      duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me!</button>
       </a>
      </div>
      <div className=""><img src={pic} alt="this is web pic"  className="w-5/5 md:p-30 p-10"/></div>
      
    </div>
   </div>
  );
};

export default Home;
