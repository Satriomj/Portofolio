import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaDownload, FaArrowRight, FaCode, FaRocket, FaUserAstronaut } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Typed from "typed.js";

const Home = () => {
  // Efek typing untuk teks profesi
  useEffect(() => {
    const options = {
      strings: [
        "Fullstack Web Developer",
        "Software Support & Tester",
        "Creative Problem Solver",
        "Tech Enthusiast",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      cursorChar: '|',
    };
    
    const typed = new Typed("#typed-text", options);
    
    return () => {
      typed.destroy();
    };
  }, []);

  // Mouse tracking untuk efek parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(springY, [-200, 200], [10, -10]);
  const rotateY = useTransform(springX, [-200, 200], [-10, 10]);

  // Variasi animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, rotate: -5, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com/satriomjs", color: "from-pink-400 to-purple-500", hoverColor: "from-pink-300 to-purple-400", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/satriomj", color: "from-blue-400 to-cyan-400", hoverColor: "from-blue-300 to-cyan-300", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/Satriomj", color: "from-gray-600 to-gray-800", hoverColor: "from-gray-500 to-gray-700", label: "GitHub" }
  ];

  // Glowing particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    color: Math.random() > 0.5 ? '#22d3ee' : '#a855f7',
  }));

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
      style={{
        background: 'radial-gradient(ellipse at 0% 0%, #0f172a 0%, #020617 100%)',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}44`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: ['0%', '10%', '0%'],
            y: ['0%', '15%', '0%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: ['0%', '-10%', '0%'],
            y: ['0%', '-10%', '0%'],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-pink-500/20 rounded-full filter blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Animated Border Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 w-[200%] h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        />
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 5 }}
          className="absolute bottom-1/3 w-[200%] h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        />
      </div>

      <div className="container mx-auto z-10 relative">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Image Column - with 3D hover effect */}
          <motion.div 
            className="w-full lg:w-5/12 flex justify-center lg:order-2 perspective-1000"
            variants={imageVariants}
            style={{
              perspective: '1000px',
            }}
          >
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative"
            >
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute -inset-8 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #22d3ee, #a855f7, #22d3ee, #a855f7, #22d3ee)',
                  opacity: 0.15,
                  filter: 'blur(20px)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Rotating Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-cyan-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                  borderImage: 'linear-gradient(45deg, #22d3ee, #a855f7) 1',
                }}
              />

              {/* Second Rotating Ring */}
              <motion.div
                className="absolute -inset-6 rounded-full border border-dashed border-purple-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-88 md:h-88 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl shadow-cyan-500/20">
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-600/30 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                
                {/* Image with zoom effect */}
                <motion.img 
                  src="/assets/img/profilku.jpg" 
                  alt="Satriomj" 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Animated Border Overlay */}
                <motion.div
                  className="absolute inset-0 z-10 rounded-full"
                  style={{
                    border: '3px solid transparent',
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.3), rgba(168,85,247,0.3)) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                  animate={{
                    borderColor: ['rgba(34,211,238,0.5)', 'rgba(168,85,247,0.5)', 'rgba(34,211,238,0.5)'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              {/* Floating Badges with enhanced design */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/30 z-20"
                initial={{ y: 30, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  <span className="w-2 h-2 bg-white rounded-full absolute animate-ping opacity-75"></span>
                  Available for work
                </span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-500/30 z-20"
                initial={{ y: 30, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <span className="flex items-center gap-2">
                  <FaRocket className="text-white animate-pulse" />
                  3+ Years Experience
                </span>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute top-20 -right-8 text-cyan-400 text-2xl opacity-50 z-20"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaCode />
              </motion.div>
              <motion.div
                className="absolute bottom-20 -left-8 text-purple-400 text-2xl opacity-50 z-20"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FaUserAstronaut />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Column - Enhanced */}
          <motion.div 
            className="w-full lg:w-7/12 lg:order-1"
            variants={containerVariants}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm font-bold mb-5 border border-cyan-500/30 backdrop-blur-sm shadow-lg shadow-cyan-500/10"
            >
              ✦ Welcome to my portfolio ✦
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black mb-5 leading-tight"
            >
              <span className="text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                Hi, I'm
              </span>{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Satriomj
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-300 flex flex-wrap items-center gap-3"
            >
              And I'm a{" "}
              <span className="relative">
                <span id="typed-text" className="text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text"></span>
                <span className="inline-block w-3 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 animate-blink rounded-sm ml-1"></span>
              </span>
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="relative mb-8 p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl hover:shadow-cyan-500/5 transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
              <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                <span className="text-4xl text-cyan-400 font-serif mr-1">"</span>
                Jangan pernah menganggap belajar sebagai tugas, tetapi anggaplah sebagai kesempatan berharga untuk mempelajari sesuatu.
                <span className="text-4xl text-purple-400 font-serif ml-1">"</span>
                <br />
                <span className="italic text-gray-500 mt-3 block text-right text-sm">
                  — Albert Einstein
                </span>
              </p>
            </motion.div>
            
            {/* Social Media Links - Enhanced */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-5 mb-10"
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ y: -5 }}
                >
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`block p-4 rounded-2xl bg-gradient-to-br ${social.color} text-white text-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      initial={{ x: '-200%', rotate: 30 }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8 }}
                      style={{ transform: 'skewX(-20deg)' }}
                    />
                    {social.icon}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons - Enhanced */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-5"
            >
              <motion.a
                href="/assets/file/CV-Satrio Maruli Jaya Sianturi.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-3 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download CV
                </span>
                <motion.span
                  className="absolute inset-0 border-2 border-white/20 rounded-2xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm text-white font-bold border border-white/20 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-cyan-500/10"
              >
                View Projects 
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 group-hover:text-cyan-400" />
              </motion.a>
            </motion.div>

            {/* Stats Bar - Enhanced with icons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-10 mt-10 pt-8 border-t border-white/5"
            >
              {[
                { label: 'Projects', value: '20+', icon: '🚀' },
                { label: 'Clients', value: '15+', icon: '👥' },
                { label: 'Satisfaction', value: '100%', icon: '⭐' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-default"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm font-medium mt-1">
                    <span>{stat.icon}</span>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest font-medium text-gray-500">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-700/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        ::selection {
          background: rgba(34, 211, 238, 0.3);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Home;
