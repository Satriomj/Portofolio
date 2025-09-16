import React, { useEffect } from "react"; 
import { FaInstagram, FaLinkedin, FaGithub, FaDownload, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Home = () => {
  // Efek typing untuk teks profesi
  useEffect(() => {
    const options = {
      strings: [
        "Fullstack Web Developer",
        "Software Support & Tester",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    };
    
    const typed = new Typed("#typed-text", options);
    
    return () => {
      typed.destroy();
    };
  }, []);


  // Variasi animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
        // Perbaikan: Menggunakan nilai easing yang valid
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1 + (i * 0.1),
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com/satriomjs", color: "from-pink-500 to-purple-500", hoverColor: "from-pink-600 to-purple-600", custom: 0 },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/satriomj", color: "from-blue-500 to-cyan-500", hoverColor: "from-blue-600 to-cyan-600", custom: 1 },
    { icon: <FaGithub />, url: "https://github.com/Satriomj", color: "from-gray-700 to-gray-900", hoverColor: "from-gray-800 to-black", custom: 2 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white py-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
            className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl"
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-5/12 flex justify-center lg:order-2"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Rotating Circle Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl shadow-cyan-500/20">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                
                <motion.img 
                  src="/assets/img/profilku.jpg" 
                  alt="Satriomj" 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  Available for work
                </span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  3+ Years Experience
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="w-full lg:w-7/12 lg:order-1"
            variants={containerVariants}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm font-medium mb-4 border border-cyan-500/20"
            >
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Satriomj</span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300 flex flex-wrap items-center gap-2"
            >
              And I'm a <span id="typed-text" className="text-cyan-400"></span>
              <span className="inline-block w-2 h-6 bg-cyan-400 animate-blink"></span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed"
            >
              "Jangan pernah menganggap belajar sebagai tugas, tetapi anggaplah sebagai kesempatan berharga untuk mempelajari sesuatu."
              <br />
              <span className="italic text-gray-500 mt-2 block">- Albert Einstein</span>
            </motion.p>
            
            {/* Social Media Links */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={social.custom}
                  variants={socialVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-gradient-to-r ${social.color} text-white text-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/assets/file/CV-Satrio Maruli Jaya Sianturi.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload /> Download CV
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gray-800 text-white font-medium border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                View Projects <FaArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
