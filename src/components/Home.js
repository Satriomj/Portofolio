import React, { useEffect } from "react";
import {
  FaInstagram, FaLinkedin, FaGithub, FaDownload, FaArrowRight,
  FaCode, FaRocket, FaUserAstronaut,
} from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Typed from "typed.js";

const Home = () => {
  // Typing effect
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
      cursorChar: "|",
    };
    const typed = new Typed("#typed-text", options);
    return () => typed.destroy();
  }, []);

  // Mouse parallax (hanya desktop)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(springY, [-200, 200], [6, -6]);
  const rotateY = useTransform(springX, [-200, 200], [-6, 6]);

  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.94, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com/satriomjs", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/satriomj", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/Satriomj", label: "GitHub" },
  ];

  const stats = [
    { label: "Projects", value: "20+" },
    { label: "Clients", value: "15+" },
    { label: "Satisfaction", value: "100%" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16 md:py-24 px-5 sm:px-6 md:px-8"
      style={{
        background: "radial-gradient(ellipse at 20% 0%, #0f172a 0%, #020617 70%)",
      }}
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[400px] sm:w-[600px] lg:w-[700px] h-[400px] sm:h-[600px] lg:h-[700px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] bg-purple-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Social rail (desktop kiri) — fixed biar selalu di pinggir viewport */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden xl:flex flex-col items-center gap-5 fixed left-6 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-cyan-400/40" />
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-gray-500 hover:text-cyan-400 transition-colors duration-300"
            aria-label={s.label}
          >
            <span className="text-lg">{s.icon}</span>
            <span className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {s.label}
            </span>
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-purple-400/40" />
      </motion.div>

      <div className="container mx-auto z-10 relative max-w-7xl w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* ======================= CONTENT ======================= */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Label kecil */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 mb-5 sm:mb-6 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-cyan-300/80"
            >
              <span className="w-6 sm:w-8 h-px bg-cyan-400/60" />
              WELCOME TO MY PORTFOLIO
            </motion.div>

            {/* Nama besar */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight mb-5 sm:mb-6"
            >
              <span className="block text-gray-200">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Satriomj
              </span>
            </motion.h1>

            {/* Role typing — pakai cursor bawaan Typed.js */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 min-h-[32px] sm:min-h-[36px]"
            >
              <span className="text-gray-500 font-mono text-sm sm:text-base">&gt;</span>
              <span id="typed-text" className="text-cyan-300"></span>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              variants={itemVariants}
              className="relative pl-5 sm:pl-6 mb-8 sm:mb-10 border-l-2 text-left max-w-xl mx-auto lg:mx-0"
              style={{
                borderImage:
                  "linear-gradient(to bottom, rgba(34,211,238,0.6), rgba(168,85,247,0.6)) 1",
              }}
            >
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed italic">
                "Jangan pernah menganggap belajar sebagai tugas, tetapi anggaplah sebagai
                kesempatan berharga untuk mempelajari sesuatu."
              </p>
              <footer className="mt-3 text-[10px] sm:text-xs font-mono tracking-widest text-gray-500">
                — ALBERT EINSTEIN
              </footer>
            </motion.blockquote>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center lg:justify-start"
            >
              <motion.a
                href="/assets/file/CV-Satrio Maruli Jaya Sianturi.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FaDownload className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10 text-sm sm:text-base">Download CV</span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full text-white font-semibold border border-white/15 hover:border-cyan-400/60 transition-colors duration-300 w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base">View Projects</span>
                <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300 group-hover:text-cyan-400" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-white/5 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-gray-500 uppercase mt-0.5 text-center lg:text-left">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Mobile & tablet social */}
            <div className="flex xl:hidden justify-center lg:justify-start gap-4 mt-8">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ======================= IMAGE ======================= */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-[240px] sm:w-[320px] md:w-[380px] lg:w-[400px] xl:w-[440px] max-w-full"
            >
              {/* Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 z-10 pointer-events-none" />

                <motion.img
                  src="/assets/img/profilku.jpg"
                  alt="Satriomj"
                  className="w-full h-auto object-cover block"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
                  whileHover={{ scale: 1.04 }}
                />

                {/* Corner accents */}
                <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-cyan-400/60 z-20" />
                <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-purple-400/60 z-20" />

                {/* Caption strip */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[9px] sm:text-xs font-mono tracking-widest text-cyan-300">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                    AVAILABLE FOR WORK
                  </div>
                  <FaRocket className="text-purple-400 text-xs sm:text-sm" />
                </div>
              </div>

              {/* Chip: experience — turunin biar gak nabrak caption */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6, type: "spring" }}
                className="absolute -bottom-8 sm:-bottom-9 left-2 sm:-left-5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-900/90 backdrop-blur border border-white/10 text-[9px] sm:text-xs font-mono tracking-widest text-gray-300 shadow-xl z-20"
              >
                <span className="text-cyan-400">3+</span> YEARS EXP
              </motion.div>

              {/* Chip: role */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
                className="absolute -top-4 right-2 sm:-top-5 sm:-right-5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-900/90 backdrop-blur border border-white/10 text-[9px] sm:text-xs font-mono tracking-widest text-gray-300 shadow-xl z-20"
              >
                <FaCode className="inline text-purple-400 mr-1.5" />
                WEB & QA
              </motion.div>

              {/* Decorative icon */}
              <motion.div
                className="hidden md:block absolute top-1/3 -right-10 text-cyan-400/30 text-3xl"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaUserAstronaut />
              </motion.div>

              {/* Blueprint dots */}
              <div
                className="absolute -inset-4 sm:-inset-6 -z-10 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(rgba(34,211,238,0.25) 1px, transparent 1px)`,
                  backgroundSize: "18px 18px",
                  maskImage:
                    "radial-gradient(circle at center, black 40%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 40%, transparent 75%)",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="hidden md:flex flex-col items-center gap-3 absolute bottom-8 right-6 lg:right-8 text-gray-500"
        >
          <span
            className="text-[10px] font-mono tracking-[0.4em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-cyan-400/60 to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
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
