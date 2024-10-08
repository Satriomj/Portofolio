import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa"; 
import { SiBootstrap, SiTailwindcss, SiLaravel, SiCodeigniter } from "react-icons/si"; 

const skillsData = [
  { name: "React", icon: <FaReact className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaReact className="text-yellow-500 text-4xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "PHP", icon: <FaPhp className="text-blue-700 text-4xl" /> },
  { name: "Bootstrap 5", icon: <SiBootstrap className="text-info text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
  { name: "MySQL", icon: <FaDatabase className="text-orange-600 text-4xl" /> }, 
  { name: "Laravel", icon: <SiLaravel className="text-red-500 text-4xl" /> },
  { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-600 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="p-10 bg-gray-100 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill) => (
          <div key={skill.name} className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center glow-effect">
            <div className="mb-4">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
