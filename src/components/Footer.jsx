import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 font-serif">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ethio Tech School</h3>
            <p className="text-gray-400 mb-4">
              Providing comprehensive academic support and IT services to empower students and professionals in Ethiopia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://t.me/amvlugCKRTI" className="text-gray-400 hover:text-white transition" aria-label="Telegram">
                <FaTelegram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Our Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Success Stories</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Assignment Assistance</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">CV Writing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Job Application Support</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Fayda ID Printing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">IT Training</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition">Cameroon St, Bole</li>
              <li className="hover:text-white transition">Addis Ababa, Ethiopia</li>
              <li className="hover:text-white transition">09 32 04 56 12</li>
              <li className="hover:text-white transition">info@ethiotechschool.com</li>
              <li>
                <a href="https://t.me/amvlugCKRTI" className="hover:text-white transition">
                  t.me/amvlugCKRTI
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Ethio Tech School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;