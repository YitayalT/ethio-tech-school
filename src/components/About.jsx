import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 font-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Our Team" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h3>
            <p className="text-gray-600 mb-4">
             Ethio Tech School was founded to bridge the gap between academic challenges and professional success in Ethiopia's digital landscape. Recognizing students' struggles with assignments, research, and job applications, we built a comprehensive support system combining academic expertise with IT solutions – from homework assistance to Fayda ID printing – empowering students at every step of their educational journey.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At Ethio Tech School, we're revolutionizing academic support in Ethiopia by delivering tailored educational assistance and career-launching tools while bridging the digital divide through practical IT training and essential services. We empower students with both the academic support and technical skills needed for professional success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;