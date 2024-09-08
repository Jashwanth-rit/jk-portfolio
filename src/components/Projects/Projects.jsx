import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectsCard
          title="E-commarce-website (Angular)"
          main=" This is an e-commerce website built using Angular, featuring product listings,
           user and seller logins, a shopping cart, and search functionality. 
           Designed with a responsive UI for a seamless shopping experience."

        />
        <ProjectsCard
          title="Tech-Educational App (Flutter)"
          main="This Tech-Educational App was developed using Flutter and Dart. The app provides users with educational content, allowing for an interactive learning experience. It is designed to be responsive across multiple devices, leveraging Flutter’s powerful UI components to ensure smooth navigation and functionality."
        />
        <ProjectsCard
          title="E-commerce Website (MERN Stack)"
          main="This e-commerce platform was built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It features a product catalog, user authentication, a shopping cart, and payment integration. The backend handles API requests with Express and Node.js, while the frontend is built with React.js, offering a seamless and dynamic shopping experience."
        />
          <ProjectsCard
          title="Frontend Projects (Tic-Tac-Toe, Stone Paper Scissors)"
          main="These frontend projects, including Tic-Tac-Toe and Stone-Paper-Scissors, were built using HTML, CSS, and JavaScript. These games are designed to be simple yet interactive, focusing on user interaction and gameplay logic, showcasing essential frontend development skills."
        />
          <ProjectsCard
          title="E-commerce Website (MySQL, React.js, Laravel)"
          main="This e-commerce website uses MySQL as the database, React.js for the frontend, and Laravel for the backend. The platform supports multiple user types, secure transactions, and robust product management features. React.js ensures a highly interactive frontend, while Laravel efficiently manages backend operations and API requests."
        />
      </div>
    </div>
  );
};

export default Projects;
