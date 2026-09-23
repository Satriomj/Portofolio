import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// --- PROJECT CARD ---
const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.05 },
    },
  };

  const { title, image, description, tags = [], links = {} } = project;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      layout
      className="group relative flex flex-col h-full rounded-2xl border border-white/10 hover:border-cyan-400/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
    >
      {/* Nomor index editorial di pojok */}
      <div className="absolute top-4 left-4 z-20 text-[10px] font-mono tracking-widest text-white/60 mix-blend-difference">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400/60 z-20" />

        {/* Link buttons */}
        <div className="absolute bottom-3 right-3 flex gap-2 z-20">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full border border-white/10 hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300"
              title="View Code"
            >
              <FaGithub size={14} />
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full border border-white/10 hover:border-purple-400/60 hover:text-purple-400 transition-all duration-300"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 leading-snug">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-full border border-white/10 text-gray-400 uppercase"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-full border border-white/10 text-gray-500 uppercase">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Description */}
        <div
          className={`text-gray-400 text-sm leading-relaxed ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </div>

        {/* Read more */}
        <button
          onClick={toggleExpand}
          className="mt-4 text-cyan-400/80 hover:text-cyan-300 text-xs font-mono tracking-widest uppercase self-start flex items-center gap-2 transition-colors duration-300"
        >
          {isExpanded ? "Show less" : "Read more"}
          <FaArrowRight
            size={10}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {/* Garis aksen bawah saat hover */}
      <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// --- CATEGORY FILTER ---
const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-12 sm:mb-14">
      {categories.map((category, i) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {/* Nomor index mono */}
            <span
              className={`text-[10px] font-mono tracking-widest transition-colors ${
                isActive
                  ? "text-cyan-400"
                  : "text-gray-600 group-hover:text-cyan-400/70"
              }`}
            >
              0{i + 1}
            </span>
            <span>{category}</span>

            {/* Underline gradient */}
            <span
              className={`absolute left-4 right-4 -bottom-0.5 h-px origin-left transition-transform duration-300 ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              } bg-gradient-to-r from-cyan-400/80 via-cyan-400/40 to-transparent`}
            />

            {/* Dot indicator */}
            {isActive && (
              <motion.span
                layoutId="filter-dot"
                className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

// --- MAIN SECTION ---
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  // Data proyek — tetap sama
  const projectsData = [
    {
      title: "My Portfolio",
      image: "/assets/img/myporto.jpg",
      description: "Implementing the user interface using HTML, CSS, JS.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      links: {
        github: "https://github.com/Satriomj/Portofolio",
        live: "https://satriomjs.vercel.app/",
      },
    },
    {
      title: "SIAKAD",
      image: "/assets/img/project2.png",
      description:
        "Siakad website or academic information system is a website designed to help the flow of learning in the school. For example, managing student grades, attendance, and schedules. This web system is built with HTML, CSS, and JavaScript, then uses the Bootstrap framework for the frontend and Laravel for the backend.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/siakad" },
    },
    {
      title: "SISKOSTA",
      image: "/assets/img/project3.png",
      description:
        "Siskosta is a system for accepting boarding children where the website was created to help the process between boarding house owners and prospective boarding boarders. Its features include payment, extension, and FAQ. This web system is built with HTML, CSS, and JavaScript, then uses the Bootstrap framework for the frontend and Laravel for the backend.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/siskosta" },
    },
    {
      title: "Meta Kecamatan",
      image: "/assets/img/project4.png",
      description:
        "The Meta Subdistrict Information System was built only in the form of a frontend display, without a backend, as this project is an internship project at PT Darmajaya Digital Solusi. The website is created with HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      links: { github: "https://github.com/yourusername/meta-kecamatan" },
    },
    {
      title: "Manajemen Nota",
      image: "/assets/img/project5.png",
      description:
        "The Note Management System was developed to help PT Darmajaya Digital Solusi in recording orders or goods out of the Company. This website is made with HTML, CSS, and JavaScript. Then the backend is made using native PHP.",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/manajemen-nota" },
    },
    {
      title: "Company Profile",
      image: "/assets/img/project7.jpg",
      description:
        "Company profile is a project to create a landing page for the DKSolutions company which was developed using only regular HTML and CSS.",
      tags: ["HTML", "CSS"],
      category: "Frontend",
      links: {
        github: "https://github.com/yourusername/company-profile",
        live: "https://dksolutions.com",
      },
    },
    {
      title: "Project Portfolio",
      image: "/assets/img/projectport.jpg",
      description: "Implementing the user interface using HTML, CSS, JS.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      links: { github: "https://github.com/yourusername/project-portfolio" },
    },
    {
      title: "Sistem Kelola Sertifikat Kapal",
      image: "/assets/img/skapal.jpg",
      description:
        "Ship certificate management information system developed using native html, css and php",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/sertifikat-kapal" },
    },
    {
      title: "Getinsika",
      image: "/assets/img/getinsika.jpg",
      description:
        "This Getinsika system functions as the main information center for disseminating various academic and non-academic announcements, such as seminars, campus events, scholarship information, competitions, as well as internship and career opportunities developed using native HTML, CSS, and PHP.",
      tags: ["HTML", "CSS", "PHP"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/getinsika" },
    },
    {
      title: "Sistem Presensi Qrcode",
      image: "/assets/img/ppresensi.jpg",
      description:
        "This QR code attendance system functions as a system used to take attendance using QR codes and is developed using HTML, CSS, Bootstrap framework and Laravel framework.",
      tags: ["Laravel", "Bootstrap", "QR Code"],
      category: "Web Development",
      links: { github: "https://github.com/yourusername/presensi-qrcode" },
    },
  ];

  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #0f172a 0%, #020617 70%)",
      }}
    >
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] lg:w-[800px] h-[400px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute -bottom-40 right-0 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-purple-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12 sm:mb-16"
        >
          {/* Label mono */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-cyan-300/80 mb-5"
          >
            <span className="w-6 sm:w-8 h-px bg-cyan-400/60" />
            SELECTED WORKS
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-white tracking-tight leading-tight max-w-3xl"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Every line of code tells a story. Explore my work where creativity
            meets functionality.
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-gradient-to-r from-cyan-400/60 to-transparent mt-6"
          />
        </motion.div>

        {/* Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA bawah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-14 sm:mt-16"
        >
          <a
            href="https://github.com/Satriomj"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-full text-white font-semibold overflow-hidden"
          >
            {/* Border gradient */}
            <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-cyan-400/60 via-blue-400/40 to-purple-500/60">
              <span className="block w-full h-full rounded-full bg-gray-950/80 backdrop-blur" />
            </span>
            {/* Fill on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FaGithub className="relative z-10 text-lg group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10 text-sm sm:text-base">
              Explore All Repositories
            </span>
            <FaArrowRight
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              size={14}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
