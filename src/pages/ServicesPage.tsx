import React, { useState } from 'react';
import { Building2, GraduationCap, Dumbbell, ShoppingBag, Hotel, Building, ArrowRight, Check } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <Building2 className="h-12 w-12 text-green-600" />,
      title: "Office Cleaning",
      description: "Comprehensive cleaning solutions for commercial offices of all sizes.",
      features: [
        "Daily cleaning and maintenance",
        "Deep carpet cleaning",
        "Window cleaning",
        "Kitchen and break room sanitization",
        "Waste management",
        "Green cleaning products"
      ]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-green-600" />,
      title: "Educational Facilities",
      description: "Specialized cleaning services for schools, universities, and training centers.",
      features: [
        "Classroom sanitization",
        "Laboratory cleaning",
        "Common area maintenance",
        "Sports facility cleaning",
        "After-hours service",
        "COVID-safe protocols"
      ]
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-green-600" />,
      title: "Gym & Fitness Centers",
      description: "Thorough cleaning services for fitness facilities and wellness centers.",
      features: [
        "Equipment sanitization",
        "Locker room cleaning",
        "Shower area disinfection",
        "Floor maintenance",
        "Mirror cleaning",
        "Air quality management"
      ]
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-green-600" />,
      title: "Retail Spaces",
      description: "Professional cleaning for retail stores and shopping centers.",
      features: [
        "Floor cleaning and polishing",
        "Display area dusting",
        "Entrance and window cleaning",
        "Restroom sanitization",
        "High-traffic area maintenance",
        "After-hours service"
      ]
    },
    {
      icon: <Hotel className="h-12 w-12 text-green-600" />,
      title: "Healthcare Facilities",
      description: "Specialized cleaning for medical offices and healthcare facilities.",
      features: [
        "Medical-grade sanitization",
        "Exam room cleaning",
        "Waiting area maintenance",
        "Biohazard waste management",
        "HEPA filtration",
        "Compliance with health regulations"
      ]
    },
    {
      icon: <Building className="h-12 w-12 text-green-600" />,
      title: "Industrial Spaces",
      description: "Heavy-duty cleaning solutions for industrial facilities.",
      features: [
        "Warehouse cleaning",
        "Machine area maintenance",
        "Loading dock cleaning",
        "Floor scrubbing",
        "Dust control",
        "Safety compliance"
      ]
    }
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional eco-friendly cleaning solutions tailored to your specific needs. 
            We combine innovative techniques with sustainable practices.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center mx-auto"
          >
            Get a Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote. Let us show you how our eco-friendly cleaning solutions can transform your space.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center mx-auto"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}