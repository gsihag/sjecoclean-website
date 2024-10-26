import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="flex items-center hover:opacity-80 transition"
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">SJ EcoClean</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Professional eco-friendly commercial cleaning services in Melbourne. 
              We care for your space and our planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-600 hover:text-green-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-gray-600 hover:text-green-600 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-gray-600 hover:text-green-600 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:pl-4">
            <h3 className="font-semibold text-gray-800 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <span className="block text-sm text-gray-500">Phone:</span>
                +61 420 575 011
              </li>
              <li>
                <span className="block text-sm text-gray-500">Email:</span>
                contact@sjecoclean.com.au
              </li>
              <li>
                <span className="block text-sm text-gray-500">Service Area:</span>
                Melbourne Suburbs
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} SJ EcoClean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}