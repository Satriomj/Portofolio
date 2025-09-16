import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    { icon: <FaCode />, title: "Frontend", description: "React.js, JavaScript, HTML 5, Tailwind CSS, Bootsrap" },
    { icon: <FaServer />, title: "Backend", description: "Node.js, Express, Laravel" },
    { icon: <FaMobileAlt />, title: "Responsive", description: "Mobile-first approach" },
    { icon: <FaDatabase />, title: "Database", description: "MySQL, MongoDB, PostgreSQL" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image Column */}
          <motion.div 
            variants={imageVariants} 
            className="w-full md:w-5/12 relative"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-50 blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-8 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full opacity-50 blur-xl"
              />
              
              <div className="relative overflow-hidden rounded-2xl border-4 border-gray-800 shadow-2xl shadow-cyan-500/10">
                <img
                  src="/assets/img/myprofile.jpg"
                  alt="Profile"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
              </div>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4"
              />
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-full filter blur-3xl opacity-30"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={containerVariants} 
            className="w-full md:w-7/12"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm font-medium mb-4 border border-cyan-500/20"
            >
              About Me
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Hello, I'm a <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Fullstack Developer</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Graduate of Informatics Engineering with interest in website development as Fullstack Developer. 
              I have internship experience at PT Darmajaya Digital Solusi and three years of professional experience 
              building modern web applications. With leadership experience and active contributions in various 
              organizations, I'm a friendly co-worker who's always eager to learn new technologies and grow professionally.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="mr-4 text-2xl text-cyan-400">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{skill.title}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                View My Project
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-gray-800 text-white font-medium border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;