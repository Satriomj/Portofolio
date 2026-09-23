import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaMobileAlt, FaVial, FaArrowRight } from "react-icons/fa";

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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  const imageVariants = {
    hidden: { scale: 0.94, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const skills = [
    {
      icon: <FaLaptopCode />,
      title: "Web Developer",
      description: "React.js, JavaScript, Tailwind CSS, Node.js, Express, Laravel",
      accent: "text-cyan-400",
      dot: "bg-cyan-400",
    },
    {
      icon: <FaVial />,
      title: "QA & API Testing",
      description: "Manual Testing, API Testing (Postman), Bug Reporting, Functional Testing",
      accent: "text-purple-400",
      dot: "bg-purple-400",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "Mobile-first approach, Cross-browser compatibility",
      accent: "text-blue-400",
      dot: "bg-blue-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 80% 20%, #0f172a 0%, #020617 100%)",
      }}
    >
      {/* Background mesh (lebih halus, konsisten dengan Home) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 w-[350px] sm:w-[450px] lg:w-[500px] h-[350px] sm:h-[450px] lg:h-[500px] bg-purple-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
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
        {/* Section label — mono, konsisten dengan Home */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-cyan-300/80"
          >
            <span className="w-6 sm:w-8 h-px bg-cyan-400/60" />
            ABOUT ME
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start"
        >
          {/* ======================= IMAGE (kiri, 5 col) ======================= */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 relative order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Frame kotak editorial — konsisten dengan Home */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 z-10 pointer-events-none" />

                <img
                  src="/assets/img/myprofile.jpg"
                  alt="Profile"
                  className="w-full h-auto object-cover block"
                />

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400/60 z-20" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-purple-400/60 z-20" />

                {/* Caption strip bawah */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-cyan-300">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                    BASED IN INDONESIA
                  </div>
                </div>
              </div>

              {/* Chip: experience */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
                className="absolute -bottom-7 left-3 sm:-bottom-5 sm:-left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-900/90 backdrop-blur border border-white/10 text-[10px] sm:text-xs font-mono tracking-widest text-gray-300 shadow-xl z-20"
              >
                <span className="text-cyan-400">3+</span> YEARS EXP
              </motion.div>

              {/* Blueprint dots background */}
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
            </div>
          </motion.div>

          {/* ======================= CONTENT (kanan, 7 col) ======================= */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-7 order-2"
          >
            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 sm:mb-6 leading-tight tracking-tight"
            >
              <span className="text-gray-200">Hello, I'm a </span>
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Web Developer & QA
              </span>
            </motion.h2>

            {/* Divider gradient */}
            <motion.div
              variants={itemVariants}
              className="w-24 h-px bg-gradient-to-r from-cyan-400/60 to-transparent mb-6 sm:mb-8"
            />

            {/* Deskripsi */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
            >
              Informatics Engineering graduate with professional experience as a
              Manual Tester at PT Braincode Sinergi Nusantara for one year, as well
              as two years of experience as a Web Developer. Interested in software
              quality assurance, website development, and system testing, with
              hands-on experience in functional testing, user support, bug
              reporting, and system improvement. Also has internship experience at
              PT Darmajaya Digital Solusi, leadership experience, and active
              contributions in various organizations. A friendly coworker,
              detail-oriented, and eager to learn new things.
            </motion.p>

            {/* ============ SKILLS — list style dengan nomor mono ============ */}
            <motion.div variants={containerVariants} className="mb-10 sm:mb-12">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-gray-500 mb-5"
              >
                <span className="w-4 h-px bg-gray-600" />
                WHAT I DO
              </motion.div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-white/5 hover:border-cyan-400/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                  >
                    {/* Nomor index mono */}
                    <span className="text-[10px] font-mono tracking-widest text-gray-600 pt-1.5 shrink-0">
                      0{index + 1}
                    </span>

                    {/* Icon */}
                    <div
                      className={`text-2xl sm:text-3xl ${skill.accent} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-sm sm:text-base mb-1 flex items-center gap-2">
                        {skill.title}
                        <span
                          className={`w-1 h-1 rounded-full ${skill.dot} opacity-0 group-hover:opacity-100 transition-opacity`}
                        />
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Garis kanan saat hover */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-px bg-gradient-to-l from-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ============ CTA ============ */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-sm sm:text-base">View My Projects</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full text-white font-semibold border border-white/15 hover:border-cyan-400/60 transition-colors duration-300 w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base">Contact Me</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
