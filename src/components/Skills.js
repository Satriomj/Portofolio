import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaPhp,
  FaJs,
  FaGitAlt,
  FaFigma
} from "react-icons/fa"; 

import { 
  SiBootstrap, 
  SiTailwindcss, 
  SiLaravel, 
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiMongodb
} from "react-icons/si"; 


// Kategori skill
const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, level: 80 },
      { name: "JavaScript", icon: <FaJs />, level: 80 },
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 95 },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 95 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
      { name: "Figma", icon: <FaFigma />, level: 70 },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80 },
      { name: "PHP", icon: <FaPhp />, level: 85 },
      { name: "Laravel", icon: <SiLaravel />, level: 85 },
      { name: "CodeIgniter", icon: <SiCodeigniter />, level: 80 },
      { name: "Git", icon: <FaGitAlt />, level: 85 },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 90 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb />, level: 70 },
    ]
  }
];

// Komponen Skill Card
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${skill.level}%`,
      transition: { 
        duration: 1,
        delay: 0.5 + index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-gray-800 rounded-xl p-5 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30"
    >
      <div className="flex items-center mb-3">
        <div className="text-3xl mr-3 text-cyan-400">
          {skill.icon}
        </div>
        <h3 className="text-lg font-medium text-white">{skill.name}</h3>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
        <motion.div 
          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
          variants={progressVariants}
        ></motion.div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-400">
        <span>Proficiency</span>
        <span>{skill.level}%</span>
      </div>
    </motion.div>
  );
};

// Komponen Category Section
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
        delayChildren: index * 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="mb-12"
    >
      <motion.h3 
        variants={titleVariants}
        className="text-xl font-semibold mb-6 text-white flex items-center"
      >
        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-3">
          {index + 1}
        </span>
        {category.name}
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.skills.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

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
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.span 
            variants={headerVariants}
            className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm font-medium mb-3 border border-cyan-500/20"
          >
            My Expertise
          </motion.span>
          
          <motion.h2 
            variants={headerVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <motion.p 
            variants={headerVariants}
            className="max-w-2xl mx-auto text-gray-400"
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
          variants={headerVariants}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-xl bg-gray-800 border border-gray-700">
            <p className="text-gray-300 mb-3">
              Beyond these core skills, I'm always learning and exploring new technologies.
            </p>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;