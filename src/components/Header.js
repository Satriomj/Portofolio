import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-cyan-700 text-white p-5 fixed top-0 left-0 w-full z-10 shadow-md"> {/* Tambahkan shadow untuk efek elevasi */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Satriomj</h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />} 
          </button>
        </div>

        <nav className={`${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0"> {/* Tambahkan space-y untuk jarak antar item di mobile */}
            <li>
              <a href="#home" className="hover:text-white bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
