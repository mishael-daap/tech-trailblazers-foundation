import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { Footer } from '../components/Footer';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6" style={{ fontFamily: 'Lora, serif' }}>
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Moments from our journey of empowering African tech talents, building communities, and creating opportunities across the continent.
          </p>
        </div>
      </section>

      <GalleryGrid />
      <Footer />
    </div>
  );
}
