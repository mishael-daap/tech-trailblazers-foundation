import { Link } from "react-router-dom"
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return<nav className="relative z-10 px-6 py-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-serif text-xl md:text-2xl text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
              Tech Trailblazers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
              About
            </Link>
            <Link to="/programs" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
              Programs
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
              Resources
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
              Contact
            </Link>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full transition-colors text-sm">
              Get Involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
            <div className="flex flex-col gap-4">
              <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors py-2">
                About
              </Link>
              <Link to="/programs" className="text-gray-700 hover:text-gray-900 transition-colors py-2">
                Programs
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-gray-900 transition-colors py-2">
                Resources
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors py-2">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors py-2">
                Contact
              </Link>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors text-left">
                Get Involved
              </button>
            </div>
          </div>
        )}
      </nav>
}