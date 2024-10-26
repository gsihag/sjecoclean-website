import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    window.location.href = `mailto:contact@sjecoclean.com.au?subject=Contact Inquiry from ${formData.get('name')}&body=Name: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0AMessage: ${formData.get('message')}`;
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our eco-friendly cleaning services? We're here to help! 
            Contact us today for a free consultation.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center mx-auto"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Phone className="h-6 w-6 text-green-600" />,
              title: "Phone",
              info: "+61 420 575 011",
              subInfo: "Mon-Fri, 9am-6pm"
            },
            {
              icon: <Mail className="h-6 w-6 text-green-600" />,
              title: "Email",
              info: "contact@sjecoclean.com.au",
              subInfo: "24/7 Support"
            },
            {
              icon: <MapPin className="h-6 w-6 text-green-600" />,
              title: "Service Area",
              info: "Melbourne Metropolitan",
              subInfo: "All suburbs covered"
            },
            {
              icon: <Clock className="h-6 w-6 text-green-600" />,
              title: "Business Hours",
              info: "Monday - Friday",
              subInfo: "9:00 AM - 6:00 PM"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.info}</p>
              <p className="text-sm text-gray-500">{item.subInfo}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Features */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your cleaning needs"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Services?</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Eco-Friendly Solutions",
                  description: "100% environmentally safe cleaning products and methods"
                },
                {
                  title: "Professional Team",
                  description: "Highly trained and experienced cleaning specialists"
                },
                {
                  title: "Customized Services",
                  description: "Tailored cleaning solutions for your specific needs"
                },
                {
                  title: "Competitive Pricing",
                  description: "Transparent pricing with no hidden costs"
                },
                {
                  title: "Reliable Service",
                  description: "Consistent, dependable, and punctual service"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}