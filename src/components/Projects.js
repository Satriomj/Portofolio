import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Komponen ProjectCard yang diperbarui
const ProjectCard = ({ title, image, description, tags = [], links = {} }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        {/* Project links */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end space-x-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {links.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900/80 text-white p-2 rounded-full hover:bg-cyan-600 transition-colors duration-300"
              title="View Code"
            >
              <FaGithub />
            </a>
          )}
          {links.live && (
            <a 
              href={links.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900/80 text-white p-2 rounded-full hover:bg-purple-600 transition-colors duration-300"
              title="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="text-cyan-400">
            <FaCode />
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className={`text-gray-400 text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
          {description}
        </p>
        
        <button 
          onClick={toggleExpand} 
          className="text-cyan-400 hover:text-cyan-300 mt-3 text-sm font-medium self-start transition-colors duration-300"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </motion.div>
  );
};

// Komponen filter kategori
const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Data proyek dengan tag dan link
  const projectsData = [
    {
      title: "My Portfolio",
      image: "/assets/img/myporto.jpg",
      description: "Implementing the user interface using HTML, CSS, JS.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      links: {
        github: "https://github.com/Satriomj/Portofolio",
        live: "https://satriomjs.vercel.app/"
      }
    },
    {
      title: "SIAKAD",
      image: "/assets/img/project2.png",
      description: "Siakad website or academic information system is a website designed to help the flow of learning in the school. For example, managing student grades, attendance, and schedules. This web system is built with HTML, CSS, and JavaScript, then uses the Bootstrap framework for the frontend and Laravel for the backend.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      category: "Web Development",
      links: {
        github: "https://github.com/yourusername/siakad"
      }
    },
    {
      title: "SISKOSTA",
      image: "/assets/img/project3.png",
      description: "Siskosta is a system for accepting boarding children where the website was created to help the process between boarding house owners and prospective boarding boarders. Its features include payment, extension, and FAQ. This web system is built with HTML, CSS, and JavaScript, then uses the Bootstrap framework for the frontend and Laravel for the backend.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      category: "Web Development",
      links: {
        github: "https://github.com/yourusername/siskosta"
      }
    },
    {
      title: "Meta Kecamatan",
      image: "/assets/img/project4.png",
      description: "The Meta Subdistrict Information System was built only in the form of a frontend display, without a backend, as this project is an internship project at PT Darmajaya Digital Solusi. The website is created with HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      links: {
        github: "https://github.com/yourusername/meta-kecamatan"
      }
    },
    {
      title: "Manajemen Nota",
      image: "/assets/img/project5.png",
      description: "The Note Management System was developed to help PT Darmajaya Digital Solusi in recording orders or goods out of the Company. This website is made with HTML, CSS, and JavaScript. Then the backend is made using native PHP.",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: {
        github: "https://github.com/yourusername/manajemen-nota"
      }
    },
    {
      title: "Company Profile",
      image: "/assets/img/project7.jpg",
      description: "Company profile is a project to create a landing page for the DKSolutions company which was developed using only regular HTML and CSS.",
      tags: ["HTML", "CSS"],
      category: "Frontend",
      links: {
        github: "https://github.com/yourusername/company-profile",
        live: "https://dksolutions.com"
      }
    },
    {
      title: "Project Portfolio",
      image: "/assets/img/projectport.jpg",
      description: "Implementing the user interface using HTML, CSS, JS.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      links: {
        github: "https://github.com/yourusername/project-portfolio"
      }
    },
    {
      title: "Sistem Kelola Sertifikat Kapal",
      image: "/assets/img/skapal.jpg",
      description: "Ship certificate management information system developed using native html, css and php",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: {
        github: "https://github.com/yourusername/sertifikat-kapal"
      }
    },
    {
      title: "Getinsika",
      image: "/assets/img/getinsika.jpg",
      description: "This Getinsika system functions as the main information center for disseminating various academic and non-academic announcements, such as seminars, campus events, scholarship information, competitions, as well as internship and career opportunities developed using native HTML, CSS, and PHP.",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: {
        github: "https://github.com/yourusername/getinsika"
      }
    },
    {
      title: "Sistem Presensi Qrcode",
      image: "/assets/img/ppresensi.jpg",
      description: "This QR code attendance system functions as a system used to take attendance using QR codes and is developed using HTML, CSS, Bootstrap framework and Laravel framework.",
      tags: ["Laravel", "Bootstrap", "QR Code"],
      category: "Web Development",
      links: {
        github: "https://github.com/yourusername/presensi-qrcode"
      }
    }
  ];

  // Ekstrak kategori unik dari data proyek
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  // Filter proyek berdasarkan kategori aktif
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.span 
            variants={titleVariants}
            className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm font-medium mb-3 border border-cyan-500/20"
          >
            My Work
          </motion.span>
          
          <motion.h2 
            variants={titleVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Recent <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p 
            variants={titleVariants}
            className="max-w-2xl mx-auto text-gray-400 mb-8"
          >
            Here are some of the projects I've worked on. Each project has helped me grow as a developer and solve real-world problems.
          </motion.p>
          
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </motion.div>
        
        <motion.div 
          variants={titleVariants}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/Satriomj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <FaGithub /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;