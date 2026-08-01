import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.15,
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, rotate: -3, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const skills = [
    { 
      icon: <FaCode />, 
      title: "Frontend", 
      description: "React.js, JavaScript, HTML 5, Tailwind CSS, Bootstrap",
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      borderHover: "hover:border-cyan-400/40"
    },
    { 
      icon: <FaServer />, 
      title: "Backend", 
      description: "Node.js, Express, Laravel",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      borderHover: "hover:border-purple-400/40"
    },
    { 
      icon: <FaMobileAlt />, 
      title: "Responsive Design", 
      description: "Mobile-first approach",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      borderHover: "hover:border-blue-400/40"
    },
    { 
      icon: <FaDatabase />, 
      title: "Database", 
      description: "MySQL, MongoDB, PostgreSQL",
      gradient: "from-pink-500/20 to-purple-500/20",
      iconColor: "text-pink-400",
      borderHover: "hover:border-pink-400/40"
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{
      background: 'radial-gradient(ellipse at 80% 20%, #0f172a 0%, #020617 100%)',
    }}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: ['0%', '8%', '0%'],
            y: ['0%', '10%', '0%'],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: ['0%', '-8%', '0%'],
            y: ['0%', '-8%', '0%'],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-pink-500/10 rounded-full filter blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
        >
          {/* Image Column */}
          <motion.div 
            variants={imageVariants} 
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute -inset-6 rounded-2xl"
                style={{
                  background: 'conic-gradient(from 0deg, #22d3ee, #a855f7, #22d3ee, #a855f7, #22d3ee)',
                  opacity: 0.08,
                  filter: 'blur(30px)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Rotating Border */}
              <motion.div
                className="absolute -inset-3 rounded-2xl border-2 border-cyan-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute -inset-5 rounded-2xl border border-dashed border-purple-400/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-600/20 z-10" />
                <img
                  src="/assets/img/myprofile.jpg"
                  alt="Profile"
                  className="w-full h-auto rounded-2xl scale-105 transition-transform duration-700 hover:scale-110"
                />
                
                {/* Animated Border Overlay */}
                <motion.div
                  className="absolute inset-0 z-10 rounded-2xl"
                  style={{
                    border: '3px solid transparent',
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(168,85,247,0.2)) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                  animate={{
                    borderColor: ['rgba(34,211,238,0.3)', 'rgba(168,85,247,0.3)', 'rgba(34,211,238,0.3)'],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl shadow-cyan-500/30 z-20"
                initial={{ y: 30, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={containerVariants} 
            className="w-full lg:w-7/12"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm font-bold mb-5 border border-cyan-500/20 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                About Me
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></span>
              </span>
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black mb-5 leading-tight"
            >
              <span className="text-gray-300">Hello, I'm a</span>{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Fullstack Developer
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="relative mb-8 p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/5 shadow-xl hover:shadow-cyan-500/5 transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
              <p className="text-gray-400 text-base leading-relaxed relative z-10">
                Graduate of Informatics Engineering with interest in website development as Fullstack Developer. 
                I have internship experience at PT Darmajaya Digital Solusi and three years of professional experience 
                building modern web applications. With leadership experience and active contributions in various 
                organizations, I'm a friendly co-worker who's always eager to learn new technologies and grow professionally.
              </p>
            </motion.div>
            
            {/* Skills Grid - STAY DI TEMPAT, ga naik turun */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(34,211,238,0.3)',
                  }}
                  className={`p-5 rounded-xl bg-gradient-to-br ${skill.gradient} border border-white/5 ${skill.borderHover} transition-all duration-300 group cursor-default`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-3xl ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base mb-1">{skill.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">View My Projects</span>
              </motion.a>
              
              <motion.a
                href="#contact" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-xl bg-white/5 backdrop-blur-sm text-white font-medium border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
