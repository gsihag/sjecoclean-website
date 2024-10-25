import React, { useState } from 'react';
import { ArrowRight, Leaf, Droplets, Shield, Building2, Dumbbell, GraduationCap, Mail, Phone, MapPin, X } from 'lucide-react';

// Quote Modal Component
function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };
    window.location.href = `mailto:contact@sjecoclean.com.au?subject=Quote Request&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0AMessage: ${data.message}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Get a Free Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" name="name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input type="tel" name="phone" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your phone number" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">How can we help you?</label>
            <textarea name="message" rows={4} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Tell us about your cleaning needs"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Home Section */}
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
                <a href="#about" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition">
                  Learn More
                </a>
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

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional cleaning solutions for every commercial space
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: 'School Cleaning',
                description: 'Comprehensive cleaning solutions for educational facilities, ensuring a safe and healthy learning environment.',
                features: ['Classroom sanitization', 'Cafeteria cleaning', 'Playground maintenance', 'Daily disinfection']
              },
              {
                icon: <Dumbbell className="h-8 w-8" />,
                title: 'Gym Cleaning',
                description: 'Specialized cleaning services for fitness centers, focusing on equipment hygiene and member safety.',
                features: ['Equipment sanitization', 'Locker room cleaning', 'Floor maintenance', 'Air purification']
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: 'Office Cleaning',
                description: 'Professional cleaning services for commercial offices, creating a productive work environment.',
                features: ['Workspace cleaning', 'Kitchen maintenance', 'Window cleaning', 'Carpet care']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition duration-300 hover:bg-green-50 hover:shadow-xl hover:scale-105">
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Get in touch for a free quote or to learn more about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea name="message" rows={4} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+61 420 575 011</p>
                  <p className="text-gray-600">Mon-Fri 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@sjecoclean.com.au</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Service Area</h3>
                  <p className="text-gray-600">Covering all Melbourne Suburbs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}