import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">SJ EcoClean</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-green-600 transition">Home</a>
            <a href="#services" className="text-gray-600 hover:text-green-600 transition">Services</a>
            <a href="#about" className="text-gray-600 hover:text-green-600 transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition">Contact</a>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-green-600 transition">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-green-600 transition">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-green-600 transition">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-green-600 transition">Contact</a>
            <button className="w-full mt-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}