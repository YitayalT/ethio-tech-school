import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white font-serif shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold font-serif">Ethio tech school</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none hover:text-blue-200 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-200 transition py-2">Home</a>
            <a href="#about" className="hover:text-blue-200 transition py-2">About Us</a>
            <a href="#services" className="hover:text-blue-200 transition py-2">Our Services</a>
            <a href="#testimonials" className="hover:text-blue-200 transition py-2">Testimonials</a>
            <a href="#contact" className="hover:text-blue-200 transition py-2">Contact Us</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="hover:text-green-200 transition py-2 border-b border-blue-500"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="hover:text-green-200 transition py-2 border-b border-blue-500"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <a 
                href="#services" 
                className="hover:text-green-200 transition py-2 border-b border-blue-500"
                onClick={toggleMenu}
              >
                Our Services
              </a>
              <a 
                href="#testimonials" 
                className="hover:text-green-200 transition py-2 border-b border-blue-500"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="hover:text-green-200 transition py-2"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;