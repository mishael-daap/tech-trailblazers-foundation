import { useState } from 'react';

interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVjaCUyMHByb2Zlc3Npb25hbHMlMjBjb2Rpbmd8ZW58MXx8fHwxNzc1OTc3MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Tech professionals collaborating on innovative solutions"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1582638423482-a90640357638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5JTIwd29ya3Nob3B8ZW58MXx8fHwxNzc1OTc3MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Students engaged in hands-on technology workshops"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1771412198236-c2a5a5778fb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwdGVjaCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzU5NzcwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Community tech education bringing digital skills to all"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1675250719891-37d4747c9e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBjb2RpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzU5NzcwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Women in tech leading the digital transformation"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1633443315529-84fe2415585f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbWVudG9yc2hpcCUyMEFmcmljYSUyMHlvdXRofGVufDF8fHx8MTc3NTk3NzAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Mentorship programs connecting youth with industry experts"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1594098882270-66ce9399b040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzc1OTc3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Team collaboration driving innovation and growth"
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1666281134747-caa676fc2201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2xhc3Nyb29tJTIwZGlnaXRhbCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTk3NzAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Digital learning transforming education across Africa"
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZGV2ZWxvcGVyJTIwbGFwdG9wJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzc1OTc3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Developers building the future of African technology"
  },
];

export function GalleryGrid() {
  return (
    <section className="py-12 px-6 lg:px-12 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-[4/3]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={item.imageUrl}
        alt={item.caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay - Always visible on mobile (lg:hidden), hover on desktop */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
          flex items-end p-6
          lg:opacity-0 lg:group-hover:opacity-100
          transition-opacity duration-300
        `}
      >
        <p className="text-white text-lg leading-relaxed">
          {item.caption}
        </p>
      </div>
    </div>
  );
}
