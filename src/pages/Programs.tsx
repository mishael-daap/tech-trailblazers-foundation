import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Programs</p>
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontFamily: 'Lora, serif' }}>
            Our Learning Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-10">
            Explore our practical, community-driven programs designed to build digital skills, support
            career growth, and empower technology leaders across Africa.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-colors"
          >
            Join a Program
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
