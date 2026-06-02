import type { GallerySection } from '../data/galleryData';

interface Props {
  section: GallerySection;
}

export function GallerySection({ section }: Props) {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-12 text-center" style={{ fontFamily: 'Lora, serif' }}>
          {section.title}
        </h2>

        {/* Subsections */}
        <div className="space-y-16">
          {section.sections.map((subsection) => (
            <div key={subsection.title}>
              {/* Subsection Header */}
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-8 pb-3 border-b border-gray-200">
                {subsection.title}
              </h3>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {subsection.pictures.map((src, idx) => (
                  <div
                    key={src + idx}
                    className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-[4/3]"
                  >
                    <img
                      src={src}
                      alt={`${section.title} — ${subsection.title} photo ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
