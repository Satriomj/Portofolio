import React, { useState } from "react";
import '../styles.css';
const ProjectCard = ({ title, image, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 transition-shadow duration-300 hover:shadow-[0_4px_20px_0_rgba(135,206,250,0.8)]">
      <img src={image} alt={title} className="w-full h-auto mb-3 rounded-lg" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`text-justify leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
        {description}
      </p>
      <button onClick={toggleExpand} className="text-blue-500 mt-2">
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="My Portfolio"
            image="/assets/img/project1.png"
            description="Implementing the user interface using HTML, CSS, JS."
          />
          <ProjectCard 
            title="SIAKAD"
            image="/assets/img/project2.png"
            description="Siakad website or academic information system is a website designed to help the flow of learning in the school. For example, managing student grades, attendance, and schedules. This web system is built with HTML, CSS, and JavaScript, then uses the Bootstrap framework for the frontend and Laravel for the backend."
          />
          <ProjectCard 
            title="SISKOSTA"
            image="/assets/img/project3.png"
            description="Siskosta is a system for accepting boarding children where the website was created to help the process between boarding house owners and prospective boarding boarders. Its features include payment, extension, and FAQ. This web system is built with HTML, CSS, and JavaScript, then uses the Bootstrap framework for the frontend and Laravel for the backend."
          />
          <ProjectCard 
            title="Meta Kecamatan"
            image="/assets/img/project4.png"
            description="The Meta Subdistrict Information System was built only in the form of a frontend display, without a backend, as this project is an internship project at PT Darmajaya Digital Solusi. The website is created with HTML, CSS, and JavaScript."
          />
          <ProjectCard 
            title="Manajemen Nota"
            image="/assets/img/project5.png"
            description="The Note Management System was developed to help PT Darmajaya Digital Solusi in recording orders or goods out of the Company. This website is made with HTML, CSS, and JavaScript. Then the backend is made using native PHP."
          />
          <ProjectCard 
            title="Company Profile"
            image="/assets/img/project7.jpg"
            description="Company profile is a project to create a landing page for the DKSolutions company which was developed using only regular HTML and CSS."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
