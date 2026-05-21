"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    caption:
      "Moments of connection and collaboration during the West African Dreaming experience.",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/dnnmq2woa/image/upload/v1778150327/IMG_7276_kknq84.jpg",
  },
  {
    caption:
      "Attendees engaging in meaningful conversations and sharing ideas at the event.",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/dnnmq2woa/image/upload/v1778150319/IMG_7283_bg31qk.jpg",
  },
  {
    caption:
      "A glimpse into the vibrant energy and community spirit of West African Dreaming.",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/dnnmq2woa/image/upload/v1778150306/IMG_7307_bk5khq.jpg",
  },
  {
    caption:
      "Celebrating innovation, learning, and collaboration within the Salesforce ecosystem.",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/dnnmq2woa/image/upload/v1778150297/IMG_7315_tmalpn.jpg",
  },
  {
    caption:
      "Participants connecting and creating memorable experiences throughout the event.",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1778150139/IMG_7356_bmnj1d.jpg",
  },
  {
    caption:
      "Capturing inspiring moments from an unforgettable community gathering.",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1778150134/IMG_7374_xb1p8r.jpg",
  },
  {
    caption:
      "Bringing together passionate professionals, learners, and innovators from across the region.",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1778150123/IMG_7402_s73ytj.jpg",
  },
  {
    caption:
      "Highlights from a day filled with networking, inspiration, and shared growth.",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1778150078/IMG_7464_p3uilp.jpg",
  },
];

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Computes card layout placement to create an elegant layered overlapping visual
  const getCardStyles = (index: number) => {
    let offset = index - activeIndex;

    // Handle wrap-around array mathematics for infinite continuous looping
    if (offset < -images.length / 2) offset += images.length;
    if (offset > images.length / 2) offset -= images.length;

    const absOffset = Math.abs(offset);

    // Hide cards that are out of immediate field of view
    if (absOffset > 2) {
      return {
        opacity: 0,
        transform: "translateX(0px) scale(0.6)",
        zIndex: 0,
        visibility: "hidden" as const,
      };
    }

    // Elegant placement configurations matching visual depth layers
    let translateX = "0px";
    let scale = 1;
    let zIndex = 30;
    let opacity = 1;

    if (offset === 0) {
      translateX = "0px";
      scale = 1;
      zIndex = 30;
      opacity = 1;
    } else if (offset === 1) {
      translateX = "260px"; // Tucked slightly behind center card
      scale = 0.82;
      zIndex = 20;
      opacity = 0.85;
    } else if (offset === -1) {
      translateX = "-260px";
      scale = 0.82;
      zIndex = 20;
      opacity = 0.85;
    } else if (offset === 2) {
      translateX = "460px"; // Outer layer
      scale = 0.68;
      zIndex = 10;
      opacity = 0.4;
    } else if (offset === -2) {
      translateX = "-460px";
      scale = 0.68;
      zIndex = 10;
      opacity = 0.4;
    }

    // Responsive adaptation adjustments for mobile screen widths
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      if (offset === 1) translateX = "70px";
      if (offset === -1) translateX = "-70px";
      if (absOffset === 2) opacity = 0; 
    }

    return {
      transform: `translateX(${translateX}) scale(${scale})`,
      zIndex,
      opacity,
      visibility: "visible" as const,
    };
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4">
        
        {/* Carousel View Container */}
        <div className="relative flex h-[550px] w-full items-center justify-center">
          {images.map((image, idx) => {
            const styles = getCardStyles(idx);
            const isActive = idx === activeIndex;

            return (
              <div
                key={idx}
                style={styles}
                className="absolute h-[460px] w-[300px] overflow-hidden rounded-[32px] bg-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.15)] transition-all duration-600 ease-out md:h-[520px] md:w-[380px]"
              >
                <img
                  src={image.imageUrl}
                  alt={image.caption}
                  className="h-full w-full object-cover select-none"
                />

                {/* Shading/Gradient Overlays matching active states */}
                {isActive ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-500" />
                ) : (
                  <div className="absolute inset-0 bg-black/15 transition-opacity duration-500" />
                )}

                {/* Inner Content Text Layer */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                    {image.date}
                  </p>
                  <h3 className="text-lg font-medium leading-relaxed md:text-xl">
                    {image.caption}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Circle Arrow Navigation Controls */}
        <div className="mt-12 flex items-center gap-3">
          <button
            onClick={previous}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all duration-200 hover:border-black hover:text-black active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5 stroke-[1.5]" />
          </button>

          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all duration-200 hover:border-black hover:text-black active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Navigation Dots Indicator Timeline */}
        <div className="mt-8 flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-6 bg-black" : "w-1.5 bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}