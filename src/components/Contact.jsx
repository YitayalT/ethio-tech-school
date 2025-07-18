import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios first
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert(`Thank you for your message, ${formData.name}! We'll contact you soon.`);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 font-serif bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">Contact Elevana Solutions</h2>

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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
                  placeholder="Tell us about your academic or IT support needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md font-medium transition"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6 text-teal-800">Our Contact Details</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-teal-600 mr-4 mt-1">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Our Location</h4>
                    <p className="text-gray-600">Cameroon St, Bole, Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-teal-600 mr-4 mt-1">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone Number</h4>
                    <p className="text-gray-600">09 63 80 48 48</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-teal-600 mr-4 mt-1">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@elevanasolutions.com<br />support@elevanasolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-teal-600 mr-4 mt-1">
                    <FaTelegram className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Telegram</h4>
                    <p className="text-gray-600">
                      <a href="https://t.me/anu_12_10 " className="hover:underline" target="_blank" rel="noopener noreferrer">
                        t.me/elevanasolutions
                      </a>
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