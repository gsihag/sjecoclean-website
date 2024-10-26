import React, { useState } from 'react';
import { Shield, Users, Award, Leaf, ArrowRight } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-24 bg-gradient-to-br from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At SJ EcoClean, we're more than just a cleaning company. We're environmental stewards committed to creating healthier spaces while protecting our planet.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To revolutionize the commercial cleaning industry by proving that effective cleaning doesn't have to come at the environment's expense.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional cleaning services using eco-friendly products and sustainable practices, ensuring a healthier environment for our clients and the planet.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose SJ EcoClean?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-green-600" />,
                title: "Certified Green Cleaning",
                description: "All our products and methods are certified eco-friendly, ensuring zero harm to the environment."
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Expert Team",
                description: "Our highly trained professionals deliver consistent, quality results every time."
              },
              {
                icon: <Award className="h-8 w-8 text-green-600" />,
                title: "Proven Track Record",
                description: "Years of experience serving Melbourne's leading businesses and institutions."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Environmental Impact</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-green-600 mt-1" />
                  <p className="text-gray-600">Reduced water consumption through efficient cleaning methods</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-green-600 mt-1" />
                  <p className="text-gray-600">Zero harmful chemicals released into the environment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-green-600 mt-1" />
                  <p className="text-gray-600">Minimized plastic waste through reusable containers</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800" 
                alt="Eco-friendly cleaning" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}