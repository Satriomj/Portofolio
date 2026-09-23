import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane,
  FaLinkedin, FaGithub, FaInstagram
} from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError] = useState(false);

  // ==== VISITOR COUNTER STATE ====
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    // Fetch total visits dari GoatCounter (JSON endpoint)
    fetch("https://satriomjs.goatcounter.com/counter/TOTAL.json")
      .then((res) => res.json())
      .then((data) => {
        setVisits(data.count);
      })
      .catch(() => {
        setVisits(null);
      });
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "satrisenturi@gmail.com",
      link: "mailto:satriosenturi@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Bogor, Indonesia",
      link: "https://goo.gl/maps/yourlocation",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+62 822 8159 1638",
      link: "tel:+6282281591638",
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/satriomj", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/Satriomj", label: "GitHub" },
    { icon: <FaInstagram />, url: "https://instagram.com/satriomjs", label: "Instagram" },
  ];

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

  // Style shared untuk input
  const inputClass =
    "w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-cyan-400/60 focus:bg-white/[0.05] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-sm";

  const labelClass =
    "block text-[10px] font-mono tracking-widest text-cyan-300/80 uppercase mb-2";

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 80% 20%, #0f172a 0%, #020617 100%)",
      }}
    >
      {/* Background mesh */}
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
        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-cyan-300/80 mb-5"
          >
            <span className="w-6 sm:w-8 h-px bg-cyan-400/60" />
            LET'S TALK
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-white tracking-tight leading-tight max-w-3xl"
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            I'm currently available for freelance work or full-time positions. If
            you have a project that needs some creative work, feel free to contact
            me.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-gradient-to-r from-cyan-400/60 to-transparent mt-6"
          />
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* ============ LEFT — INFO (5 col) ============ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="lg:col-span-5"
          >
            <motion.div
              variants={itemVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400/40" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-purple-400/40" />

              <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] text-cyan-300/80 mb-6">
                <span className="w-4 h-px bg-cyan-400/60" />
                CONTACT INFO
              </div>

              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={itemVariants}
                    className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-300"
                  >
                    <span className="text-[10px] font-mono tracking-widest text-gray-500 pt-1.5 shrink-0 w-5">
                      0{index + 1}
                    </span>

                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all duration-300">
                      {info.icon}
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <h4 className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-1">
                        {info.title}
                      </h4>
                      <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300 truncate">
                        {info.content}
                      </p>
                    </div>

                    <span className="self-center w-4 h-px bg-gradient-to-l from-cyan-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] text-cyan-300/80 mb-4">
                <span className="w-4 h-px bg-cyan-400/60" />
                FOLLOW ME
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-gray-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="/assets/file/CV-Satrio Maruli Jaya Sianturi.pdf"
              download
              className="group relative mt-4 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full text-white font-semibold overflow-hidden w-full"
            >
              <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-cyan-400/70 via-blue-400/50 to-purple-500/70">
                <span className="block w-full h-full rounded-full bg-gray-950/80 backdrop-blur" />
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-sm">Download CV</span>
              <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </motion.a>
          </motion.div>

          {/* ============ RIGHT — FORM (7 col) ============ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="lg:col-span-7"
          >
            <motion.div
              variants={itemVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400/40" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-purple-400/40" />

              <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] text-cyan-300/80 mb-6">
                <span className="w-4 h-px bg-cyan-400/60" />
                SEND A MESSAGE
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Satrio Sianturi"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="satriosenturi@gmail.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Website"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Hello, I'd like to talk about..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full text-white font-semibold overflow-hidden w-full sm:w-auto ${
                      isSubmitting ? "cursor-not-allowed opacity-60" : ""
                    }`}
                  >
                    <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-cyan-400/70 via-blue-400/50 to-purple-500/70">
                      <span className="block w-full h-full rounded-full bg-gray-950/90" />
                    </span>
                    {!isSubmitting && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    {isSubmitting ? (
                      <span className="relative z-10 flex items-center gap-3 text-sm">
                        <svg
                          className="animate-spin h-4 w-4 text-cyan-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center gap-3 text-sm">
                        Send Message
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    )}
                  </motion.button>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5 flex items-start gap-3 p-4 rounded-xl border border-cyan-400/30 bg-cyan-500/[0.08]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse mt-1.5 shrink-0" />
                      <p className="text-cyan-300 text-xs sm:text-sm leading-relaxed">
                        Your message has been sent successfully! I'll get back to
                        you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5 flex items-start gap-3 p-4 rounded-xl border border-red-400/30 bg-red-500/[0.08]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse mt-1.5 shrink-0" />
                      <p className="text-red-300 text-xs sm:text-sm leading-relaxed">
                        There was an error sending your message. Please try again
                        later.
                      </p>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= FOOTER NOTE + LIVE STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-white/5"
        >
          {/* Baris 1: copyright + built with */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase">
              <span className="w-6 h-px bg-gray-600" />
              Satriomj — {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase">
              Built with React & Tailwind (Satriomjs)
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Baris 2: LIVE VISITOR STATS */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase">
              <span className="w-6 h-px bg-gray-600" />
              Total Visitors
            </div>

            <a
              href="https://satriomjs.goatcounter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-300"
              title="View live stats on GoatCounter"
            >
              {/* Dot pulse */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>

              {/* Angka kunjungan */}
              <span className="text-sm font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent font-mono tabular-nums min-w-[2ch] text-center">
                {visits !== null ? visits : "—"}
              </span>

              {/* Label */}
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase group-hover:text-cyan-400 transition-colors">
                Live Stats
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
