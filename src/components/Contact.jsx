import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We'll contact you soon.`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 font-serif bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Contact Ethio Tech School</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">How Can We Help?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Tell us about your academic or IT support needs..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Our Location</h4>
                    <p className="text-gray-600">Cameroon St, Bole, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone Number</h4>
                    <p className="text-gray-600">09 32 04 56 12</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@ethiotechschool.com<br />support@ethiotechschool.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <FaTelegram className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Telegram</h4>
                    <p className="text-gray-600">
                      <a href="https://t.me/anu_12_10" className="hover:underline">t.me/ethiotechschool</a>
                    </p>
                  </div>
                </div>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;