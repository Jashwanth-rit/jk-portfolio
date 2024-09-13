import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectsCard
          title="E-commerce Website (Angular)"
          main={[
            "Product listings with filtering options",
            "User and seller logins",
            "Shopping cart functionality",
            "Search functionality with instant results",
            "Responsive UI for seamless experience"
          ]}
        />
        <ProjectsCard
          title="Tech-Educational App (Flutter)"
          main={[
            "Educational content delivery",
            "Interactive learning features",
            "Responsive design across devices",
            "Built with Flutter and Dart"
          ]}
        />
        <ProjectsCard
          title="E-commerce Website (MERN Stack)"
          main={[
            "Product catalog with real-time updates",
            "User authentication with JWT",
            "Shopping cart and payment integration",
            "Built using MongoDB, Express, React, Node.js"
          ]}
        />
        <ProjectsCard
          title="Frontend Projects (Tic-Tac-Toe, Stone Paper Scissors)"
          main={[
            "Interactive games built using HTML, CSS, and JavaScript",
            "User-friendly UI with responsive design",
            "Focus on essential frontend skills"
          ]}
        />
        <ProjectsCard
          title="E-commerce Website (MySQL, React.js, Laravel)"
          main={[
            "MySQL database integration",
            "React.js for dynamic frontend",
            "Laravel for backend and API management",
            "Secure transactions and user management"
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;


