import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaJs, FaGitAlt, FaFigma
} from "react-icons/fa"; 
import { 
  SiBootstrap, SiTailwindcss, SiLaravel, SiCodeigniter, SiMysql, SiPostgresql, SiMongodb
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
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#339933" },
      { name: "PHP", icon: <FaPhp />, level: 85, color: "#777BB4" },
      { name: "Laravel", icon: <SiLaravel />, level: 85, color: "#FF2D20" },
      { name: "CodeIgniter", icon: <SiCodeigniter />, level: 80, color: "#EF4223" },
      { name: "Git", icon: <FaGitAlt />, level: 85, color: "#F05032" },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 90, color: "#4479A1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, color: "#4169E1" },
      { name: "MongoDB", icon: <SiMongodb />, level: 70, color: "#47A248" },
    ]
  }
];

// --- SKILL CARD (Lebar, Tidak Panjang & Tidak Terbang) ---
const SkillCard = ({ skill, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.05
      }
    }
  };

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      // ANIMASI TERBANG DIHAPUS (y: -8 dihapus)
      className="relative group bg-gray-800/40 backdrop-blur-lg border border-white/10 hover:border-cyan-500/50 rounded-2xl p-5 text-center transition-all duration-300 shadow-xl flex flex-col items-center justify-center"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>

      {/* Circular Progress SVG */}
      <div className="relative w-24 h-24 mx-auto mb-2 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-gray-700 stroke-current"
            strokeWidth="7"
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
          />
          <motion.circle
            className="text-cyan-400 stroke-current drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            strokeWidth="7"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            variants={{
              hidden: { strokeDashoffset: circumference },
              visible: { 
                strokeDashoffset: strokeDashoffset,
                transition: { 
                  duration: 1.5, 
                  delay: 0.3 + index * 0.05,
                  ease: "easeInOut"
                }
              }
            }}
            initial="hidden"
            animate={controls}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        
        {/* Ikon Warna Asli */}
        <div 
          className="absolute text-3xl transition-transform duration-300 group-hover:scale-110"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
        
        {/* Badge Persentase */}
        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
          {skill.level}%
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-0.5">{skill.name}</h3>
      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Proficiency</p>
    </motion.div>
  );
};

// --- CATEGORY SECTION ---
const CategorySection = ({ category, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: index * 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="mb-16 last:mb-0"
    >
      <div className="flex items-center mb-8">
        <motion.div variants={titleVariants} className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/25 mr-4">
          {index + 1}
        </motion.div>
        <motion.h3 
          variants={titleVariants}
          className="text-2xl font-bold text-white"
        >
          {category.name}
        </motion.h3>
        <motion.div 
          variants={titleVariants}
          className="flex-grow h-[1px] bg-gradient-to-r from-white/20 to-transparent ml-4"
        ></motion.div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-gray-900 overflow-hidden">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="text-center mb-20"
        >
          <motion.span 
            variants={headerVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-semibold mb-4 border border-cyan-500/30 backdrop-blur-sm"
          >
            💪 My Expertise
          </motion.span>
          
          <motion.h2 
            variants={headerVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight"
          >
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <motion.p 
            variants={headerVariants}
            className="max-w-2xl mx-auto text-gray-400 text-lg"
          >
            I've worked with a variety of technologies in the web development world.
            From frontend to backend, here are the main technologies I use daily.
          </motion.p>
        </motion.div>

        <div>
          {categories.map((category, index) => (
            <CategorySection 
              key={category.name} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <p className="text-gray-300 text-sm">
              🚀 Beyond these core skills, I'm always learning and exploring new technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
