import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaJs, FaGitAlt, FaFigma,
  FaClipboardCheck, FaBug, FaFileAlt, FaSearch
} from "react-icons/fa";
import {
  SiBootstrap, SiTailwindcss, SiLaravel, SiCodeigniter, SiMysql, SiPostgresql, SiMongodb,
  SiPostman, SiJira
} from "react-icons/si";

// --- DATA SKILL ---
const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, level: 80, color: "#61DAFB" },
      { name: "JavaScript", icon: <FaJs />, level: 80, color: "#F7DF1E" },
      { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 95, color: "#1572B6" },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 95, color: "#7952B3" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80, color: "#06B6D4" },
      { name: "Figma", icon: <FaFigma />, level: 70, color: "#F24E1E" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#339933" },
      { name: "PHP", icon: <FaPhp />, level: 85, color: "#777BB4" },
      { name: "Laravel", icon: <SiLaravel />, level: 85, color: "#FF2D20" },
      { name: "CodeIgniter", icon: <SiCodeigniter />, level: 80, color: "#EF4223" },
      { name: "Git", icon: <FaGitAlt />, level: 85, color: "#F05032" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 90, color: "#4479A1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, color: "#4169E1" },
      { name: "MongoDB", icon: <SiMongodb />, level: 70, color: "#47A248" },
    ],
  },
  {
    name: "QA & Testing",
    skills: [
      { name: "Manual Testing", icon: <FaClipboardCheck />, level: 90, color: "#22D3EE" },
      { name: "API Testing", icon: <SiPostman />, level: 85, color: "#FF6C37" },
      { name: "Bug Reporting", icon: <FaBug />, level: 90, color: "#F87171" },
      { name: "Test Case Design", icon: <FaFileAlt />, level: 88, color: "#A78BFA" },
      { name: "Functional Testing", icon: <FaSearch />, level: 90, color: "#34D399" },
      { name: "Jira", icon: <SiJira />, level: 85, color: "#0052CC" },
    ],
  },
];

// --- SKILL CARD ---
const SkillCard = ({ skill, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.04 },
    },
  };

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="group relative flex flex-col items-center p-4 rounded-xl border border-white/5 hover:border-cyan-400/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
    >
      {/* Circle progress */}
      <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle
            className="text-white/5 stroke-current"
            strokeWidth="4"
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
          />
          <motion.circle
            className="stroke-current"
            style={{ color: skill.color, strokeDasharray: circumference }}
            strokeWidth="4"
            strokeLinecap="round"
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            variants={{
              hidden: { strokeDashoffset: circumference },
              visible: {
                strokeDashoffset: strokeDashoffset,
                transition: {
                  duration: 1.4,
                  delay: 0.2 + index * 0.05,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate={controls}
          />
        </svg>

        {/* Icon */}
        <div
          className="absolute text-2xl transition-transform duration-300 group-hover:scale-110"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>

        {/* Level % */}
        <div className="absolute -bottom-1 -right-1 bg-gray-950/90 backdrop-blur border border-white/10 text-white text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded-full">
          {skill.level}%
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xs sm:text-sm font-semibold text-white text-center leading-tight">
        {skill.name}
      </h3>
    </motion.div>
  );
};

// --- CATEGORY SECTION ---
const CategorySection = ({ category, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: index * 0.1 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="mb-12 sm:mb-14 last:mb-0"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <motion.span
          variants={titleVariants}
          className="text-[10px] font-mono tracking-widest text-cyan-400/70"
        >
          0{index + 1}
        </motion.span>
        <motion.h3
          variants={titleVariants}
          className="text-lg sm:text-xl md:text-2xl font-bold text-white"
        >
          {category.name}
        </motion.h3>
        <motion.div
          variants={titleVariants}
          className="flex-grow h-px bg-gradient-to-r from-cyan-400/40 via-white/5 to-transparent"
        />
        <motion.span
          variants={titleVariants}
          className="text-[10px] font-mono tracking-widest text-gray-500"
        >
          {category.skills.length} SKILLS
        </motion.span>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
        {category.skills.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

// --- MAIN SKILLS SECTION ---
const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
      id="skills"
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 20% 50%, #0f172a 0%, #020617 70%)",
      }}
    >
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[350px] sm:w-[450px] lg:w-[500px] h-[350px] sm:h-[450px] lg:h-[500px] bg-purple-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
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
          animate={controls}
          variants={headerVariants}
          className="mb-12 sm:mb-16"
        >
          {/* Label mono */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-cyan-300/80 mb-5"
          >
            <span className="w-6 sm:w-8 h-px bg-cyan-400/60" />
            TECH STACK
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-white tracking-tight leading-tight max-w-3xl"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            From frontend and backend development to manual testing and quality
            assurance — here are the main technologies and tools I use daily.
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-gradient-to-r from-cyan-400/60 to-transparent mt-6"
          />
        </motion.div>

        {/* Categories */}
        <div>
          {categories.map((category, index) => (
            <CategorySection
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 sm:mt-16 flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-gray-500 uppercase"
        >
          <span className="w-6 h-px bg-gray-600" />
          Always learning — always evolving
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
