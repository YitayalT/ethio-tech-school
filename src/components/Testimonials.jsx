import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dawit Mekonnen",
      role: "Computer Science Student, AAU",
      content: "Ethio Tech School's assignment assistance helped me improve my grades while their IT training gave me practical skills my courses didn't cover. The perfect academic partner!",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Amina Yusuf",
      role: "Recent Graduate",
      content: "Their professional CV service and job application support landed me 3 interviews in one month. I now have my dream job at a tech company!",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Tewodros Abebe",
      role: "Fayda ID Customer",
      content: "I was struggling with the digital ID process, but Ethio Tech School handled everything efficiently. They saved me weeks of government office visits.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 font-serif bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear how we're transforming academic and professional journeys in Ethiopia
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-md">
            <FaQuoteLeft className="text-blue-600 text-3xl mb-6" />
            <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
              {testimonials[currentTestimonial].content}
            </p>
            <div className="flex items-center">
              <img 
                src={testimonials[currentTestimonial].avatar} 
                alt={testimonials[currentTestimonial].name} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-blue-600" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition ${currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'}`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;