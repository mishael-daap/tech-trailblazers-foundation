import { Link } from 'react-router-dom';


export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo and About Column */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-white mb-6" style={{ fontFamily: 'Lora, serif' }}>
              Tech Trailblazers
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Empowering Africa's digital future through technology, education, and community-driven collaboration.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white mb-6 font-medium">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Column */}
          <div>
            <h3 className="text-white mb-6 font-medium">Get Involved</h3>
            <ul className="space-y-4">
              <li>
                <a href="#donate" className="text-gray-400 hover:text-white transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-400 hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#partner" className="text-gray-400 hover:text-white transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency Column */}
          <div>
            <h3 className="text-white mb-6 font-medium">Transparency</h3>
            <ul className="space-y-4">
              <li>
                <a href="#financial" className="text-gray-400 hover:text-white transition-colors">
                  Financial Reports
                </a>
              </li>
              <li>
                <a href="#governance" className="text-gray-400 hover:text-white transition-colors">
                  Governance
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Twitter"
          >
            {/* <Twitter className="w-5 h-5" /> */}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            {/* <Facebook className="w-5 h-5" /> */}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            {/* <Instagram className="w-5 h-5" /> */}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            {/* <Linkedin className="w-5 h-5" /> */}
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="YouTube"
          >
            {/* <Youtube className="w-5 h-5" /> */}
          </a>
          <a
            href="mailto:info@ttce.org"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Email"
          >
            {/* <Mail className="w-5 h-5" /> */}
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © Tech Trail Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
