import React, { useState } from 'react';
import { ArrowRight, Leaf, Droplets, Shield, Building2, Dumbbell, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import QuoteModal from '../components/QuoteModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Eco-Friendly Commercial Cleaning Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Professional cleaning services using 100% environmentally friendly products. 
                We care for your space and our planet.
              </p>
              <div className="mt-8 flex space-x-4">
                <button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={handleLearnMore}
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800" alt="Eco-friendly cleaning" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">100% Eco-Friendly</p>
                    <p className="text-sm text-gray-500">Safe for environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Why Choose SJ EcoClean?</h2>
              <p className="mt-4 text-lg text-gray-600">
                We're committed to providing exceptional cleaning services while protecting our environment. 
                Our eco-friendly approach ensures a clean, healthy space without harmful chemicals.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Eco-Friendly Products</h3>
                    <p className="text-gray-600">All our cleaning products are biodegradable and environmentally certified</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Droplets className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Water Conservation</h3>
                    <p className="text-gray-600">Advanced cleaning methods that minimize water usage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Safe & Effective</h3>
                    <p className="text-gray-600">Thorough cleaning that's safe for people, pets, and the planet</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800" alt="Eco-friendly cleaning products" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-green-600 rounded-full transform rotate-12 opacity-10"></div>
                    <div className="relative z-10 font-bold text-xl text-green-600">100%</div>
                    <p className="text-gray-600 text-sm">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional cleaning solutions for every commercial space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Office Cleaning",
                description: "Comprehensive cleaning for commercial offices, ensuring a productive work environment."
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Educational Facilities",
                description: "Specialized cleaning for schools and universities, maintaining safe learning spaces."
              },
              {
                icon: <Dumbbell className="h-8 w-8" />,
                title: "Gym & Fitness Centers",
                description: "Thorough sanitization for fitness facilities, focusing on equipment and high-touch areas."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center mx-auto"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}