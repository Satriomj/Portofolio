import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// --- PROJECT CARD (Glassmorphism dengan Read More yang berfungsi) ---
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
      className="relative group bg-gray-800/60 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-2xl"
    >
      {/* Glowing Effect di belakang kartu saat dihover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>

      {/* Bagian Gambar */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-60"></div>
        
        {/* Tombol aksi (Github & Live) - Muncul pas di-hover */}
        <div className="absolute bottom-4 right-4 flex gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
          {links.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-cyan-500 transition-all duration-300"
              title="View Code"
            >
              <FaGithub size={18} />
            </a>
          )}
          {links.live && (
            <a 
              href={links.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-purple-500 transition-all duration-300"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>
      </div>
      
      {/* Konten Card */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
          <div className="text-cyan-400/80 bg-white/5 p-2 rounded-lg">
            <FaCode />
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-[10px] tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-semibold uppercase"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-[10px] tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-semibold uppercase">
              +{tags.length - 3}
            </span>
          )}
        </div>
        
        {/* --- PERBAIKAN BAGIAN READ MORE --- */}
        {/* Saat isExpanded true, kita hapus line-clamp-3 agar teks full muncul */}
        <div className={`text-gray-400 text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
          {description}
        </div>
        
        {/* Tombol Read More dengan animasi */}
        <button 
          onClick={toggleExpand} 
          className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-medium self-start flex items-center gap-1 transition-colors duration-300 hover:gap-2"
        >
          {isExpanded ? "Show Less" : "Read More"}
          <FaArrowRight size={12} className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
        </button>
      </div>
    </motion.div>
  );
};

// --- CATEGORY FILTER ---
const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-3 mb-12 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl max-w-3xl mx-auto"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category)}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
            activeCategory === category
              ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
              : "text-gray-400 hover:text-white hover:bg-white/10"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

// --- MAIN SECTION ---
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Data proyek (Data kamu tetap sama)
  const projectsData = [
    {
      title: "My Portfolio",
      image: "/assets/img/myporto.jpg",
      description: "Implementing the user interface using HTML, CSS, JS.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      links: { github: "https://github.com/Satriomj/Portofolio", live: "https://satriomjs.vercel.app/" }
    },
    {
      title: "SIAKAD",
      image: "/assets/img/project2.png",
      description: "Siakad website or academic information system is a website designed to help the flow of learning in the school. For example, managing student grades, attendance, and schedules. This web system is built with HTML, CSS, and JavaScript, then uses the Bootstrap framework for the frontend and Laravel for the backend.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/siakad" }
    },
    {
      title: "SISKOSTA",
      image: "/assets/img/project3.png",
      description: "Siskosta is a system for accepting boarding children where the website was created to help the process between boarding house owners and prospective boarding boarders. Its features include payment, extension, and FAQ. This web system is built with HTML, CSS, and JavaScript, then uses the Bootstrap framework for the frontend and Laravel for the backend.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/siskosta" }
    },
    {
      title: "Meta Kecamatan",
      image: "/assets/img/project4.png",
      description: "The Meta Subdistrict Information System was built only in the form of a frontend display, without a backend, as this project is an internship project at PT Darmajaya Digital Solusi. The website is created with HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      links: { github: "https://github.com/yourusername/meta-kecamatan" }
    },
    {
      title: "Manajemen Nota",
      image: "/assets/img/project5.png",
      description: "The Note Management System was developed to help PT Darmajaya Digital Solusi in recording orders or goods out of the Company. This website is made with HTML, CSS, and JavaScript. Then the backend is made using native PHP.",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/manajemen-nota" }
    },
    {
      title: "Company Profile",
      image: "/assets/img/project7.jpg",
      description: "Company profile is a project to create a landing page for the DKSolutions company which was developed using only regular HTML and CSS.",
      tags: ["HTML", "CSS"],
      category: "Frontend",
      links: { github: "https://github.com/yourusername/company-profile", live: "https://dksolutions.com" }
    },
    {
      title: "Project Portfolio",
      image: "/assets/img/projectport.jpg",
      description: "Implementing the user interface using HTML, CSS, JS.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      links: { github: "https://github.com/yourusername/project-portfolio" }
    },
    {
      title: "Sistem Kelola Sertifikat Kapal",
      image: "/assets/img/skapal.jpg",
      description: "Ship certificate management information system developed using native html, css and php",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/sertifikat-kapal" }
    },
    {
      title: "Getinsika",
      image: "/assets/img/getinsika.jpg",
      description: "This Getinsika system functions as the main information center for disseminating various academic and non-academic announcements, such as seminars, campus events, scholarship information, competitions, as well as internship and career opportunities developed using native HTML, CSS, and PHP.",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/getinsika" }
    },
    {
      title: "Sistem Presensi Qrcode",
      image: "/assets/img/ppresensi.jpg",
      description: "This QR code attendance system functions as a system used to take attendance using QR codes and is developed using HTML, CSS, Bootstrap framework and Laravel framework.",
      tags: ["Laravel", "Bootstrap", "QR Code"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/presensi-qrcode" }
    }
  ];

  const categories = ["All", ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-gray-900 overflow-hidden">
      
      {/* Background Ambient Light (Bikin makin mahal) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={containerVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-semibold mb-4 border border-cyan-500/30 backdrop-blur-sm"
          >
            🚀 Portfolio
          </motion.span>
          
          <motion.h2 
            variants={containerVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight"
          >
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p 
            variants={containerVariants}
            className="max-w-2xl mx-auto text-gray-400 text-lg"
          >
            Every line of code tells a story. Explore my work where creativity meets functionality.
          </motion.p>
        </motion.div>

        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
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
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a 
            href="https://github.com/Satriomj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <FaGithub className="text-xl group-hover:rotate-12 transition-transform" /> 
            <span>Explore All Repositories</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
