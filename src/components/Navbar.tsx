import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from './QuoteModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link 
            to="/" 
            onClick={handleNavClick}
            className="flex items-center hover:opacity-80 transition"
          >
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">SJ EcoClean</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" onClick={handleNavClick} className="text-gray-600 hover:text-green-600 transition">About</Link>
            <Link to="/services" onClick={handleNavClick} className="text-gray-600 hover:text-green-600 transition">Services</Link>
            <Link to="/contact" onClick={handleNavClick} className="text-gray-600 hover:text-green-600 transition">Contact</Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
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
            <Link to="/about" onClick={handleNavClick} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition">About</Link>
            <Link to="/services" onClick={handleNavClick} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition">Services</Link>
            <Link to="/contact" onClick={handleNavClick} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition">Contact</Link>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }} 
              className="w-full mt-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}