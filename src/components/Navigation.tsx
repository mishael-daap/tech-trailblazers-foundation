import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 px-6 py-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Tech Trailblazers logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors text-lg ">
            About
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-gray-900 transition-colors text-lg ">
            Events
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-gray-900 transition-colors text-lg ">
            Resources
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors text-lg ">
            Gallery
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-lg ">
            Contact
          </Link>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-full transition-colors text-lg font-medium">
            Get Involved
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6">
          <div className="flex flex-col gap-6">
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors py-2 text-lg">
              About
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-gray-900 transition-colors py-2 text-lg">
              Events
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-gray-900 transition-colors py-2 text-lg">
              Resources
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors py-2 text-lg">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors py-2 text-lg">
              Contact
            </Link>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-colors text-lg text-left">
              Get Involved
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}