import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-950/70 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Garis aksen gradient tipis di bawah header saat scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      )}

      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* ================= LOGO ================= */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 group"
        >
          {/* Icon kotak rounded dengan border gradient */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] transition-all duration-300">
            <FaRocket className="text-white text-base -rotate-12" />
            {/* Corner accent */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-300 opacity-70 blur-[2px]" />
          </div>

          {/* Wordmark + label mono kecil */}
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                Satrio
              </span>
              mj
            </span>
            <span className="hidden sm:block text-[9px] font-mono tracking-[0.35em] text-gray-500 mt-1 uppercase">
              Web & QA
            </span>
          </div>
        </motion.a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <a
                    href={item.href}
                    className={`group relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {/* Nomor index mono (editorial) */}
                    <span
                      className={`text-[10px] font-mono tracking-widest transition-colors ${
                        isActive ? 'text-cyan-400' : 'text-gray-600 group-hover:text-cyan-400/70'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span>{item.name}</span>

                    {/* Underline gradient aktif */}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-px origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      } bg-gradient-to-r from-cyan-400/80 via-cyan-400/40 to-transparent`}
                    />

                    {/* Dot indicator aktif */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                      />
                    )}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* ================= ACTION ================= */}
        <div className="flex items-center gap-3">
          {/* CTA desktop — pill dengan border gradient halus */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:inline-flex group relative items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden"
          >
            {/* Border gradient */}
            <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-cyan-400/60 via-blue-400/40 to-purple-500/60">
              <span className="block w-full h-full rounded-full bg-gray-950/80 backdrop-blur" />
            </span>
            {/* Fill on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Contact Me</span>
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </motion.a>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-cyan-400/40 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={toggleMenu}
              className="lg:hidden fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden relative z-50 bg-gray-950/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
            >
              {/* Garis aksen atas */}
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                {/* Label mono kecil */}
                <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.35em] text-gray-500 uppercase">
                  <span className="w-6 h-px bg-cyan-400/50" />
                  Navigation
                </div>

                <ul className="space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all ${
                            isActive
                              ? 'bg-white/5 text-white'
                              : 'text-gray-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`text-[10px] font-mono tracking-widest ${
                                isActive ? 'text-cyan-400' : 'text-gray-600'
                              }`}
                            >
                              0{index + 1}
                            </span>
                            <span className="text-base font-medium">
                              {item.name}
                            </span>
                          </span>

                          {/* Garis kanan aktif */}
                          {isActive && (
                            <span className="w-6 h-px bg-gradient-to-l from-cyan-400 to-transparent" />
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* CTA Mobile */}
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative w-full text-center py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-cyan-400/70 via-blue-400/50 to-purple-500/70">
                    <span className="block w-full h-full rounded-full bg-gray-950/90" />
                  </span>
                  <span className="relative z-10">Contact Me</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
