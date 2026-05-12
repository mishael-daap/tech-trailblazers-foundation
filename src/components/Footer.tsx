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
          {/* <div>
            <h3 className="text-white mb-6 font-medium">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
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
          </div> */}

          {/* Get Involved Column */}
          <div>
            <h3 className="text-white mb-6 font-medium">Get Involved</h3>
            <ul className="space-y-4">
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
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
          {/* <div>
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
          </div> */}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://x.com/WA_Dreamin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Twitter"
          >
            {/* <Twitter className="w-5 h-5" /> */}
            <svg className='w-5 h-5' fill="none" viewBox="0 0 1200 1227"><path fill="#fff" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
          </a>
        
          <a
            href="https://www.linkedin.com/company/westafricadreamin/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            {/* <Linkedin className="w-5 h-5" /> */}
            <svg className='w-5 h-5' preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"/></svg>
          </a>
         
          <a
            href="mailto:info@ttce.org"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Email"
          >
            {/* <Mail className="w-5 h-5" /> */}
            <svg className='w-5 h-5' viewBox="0 49.4 512 399.42"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/><path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/></g></svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © Tech Trail Foundation. All rights reserved.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
