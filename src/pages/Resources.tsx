import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Resources</p>
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontFamily: 'Lora, serif' }}>
            Learning Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-10">
            Access guides, community toolkits, and practical resources that help learners and professionals
            build confidently with modern technology.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-colors"
          >
            View Community Highlights
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
