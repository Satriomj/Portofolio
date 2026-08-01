import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
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

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION - Dibersihkan, tanpa tulisan apapun di bawahnya */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 group"
        >
          {/* Icon Logo Premium */}
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
            <FaRocket className="text-white text-lg -rotate-12" />
          </div>
          
          {/* Text Logo - Fokus ke nama, besar dan tegas */}
          <span className="text-2xl font-bold tracking-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
              Satrio
            </span>
            mj
          </span>
        </motion.a>

        {/* Desktop Navigation - Lebih Minimalis */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-1">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a 
                  href={item.href} 
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 block ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gray-800/80 text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Tombol Resume / CV (Ganti dari Hire Me jadi lebih profesional) */}
          <a 
            href="#contact" 
            className="hidden lg:inline-block px-6 py-2.5 rounded-xl bg-white text-gray-900 font-semibold text-sm shadow-lg shadow-white/10 hover:shadow-white/25 hover:scale-105 hover:bg-gray-100 transition-all duration-300"
          >
            Contact Me
          </a>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden p-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen feel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-gray-900 border-t border-gray-800 overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a 
                      href={item.href} 
                      className={`block px-4 py-4 rounded-xl text-base font-medium transition-all ${
                        activeSection === item.href.substring(1)
                          ? 'bg-gray-800 text-cyan-400 border-l-4 border-cyan-400'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              {/* CTA Mobile */}
              <a 
                href="#contact" 
                className="w-full text-center py-4 rounded-xl bg-white text-gray-900 font-bold shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
