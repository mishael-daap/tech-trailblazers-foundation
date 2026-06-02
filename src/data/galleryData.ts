export interface Subsection {
  title: string;
  pictures: string[];
}

export interface GallerySection {
  title: string;
  sections: Subsection[];
}

export const galleryData: GallerySection[] = [
  {
    title: "West African Dreamin' 2025",
    sections: [
      {
        title: "Sunday",
        pictures: [
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780383181/IMG_7390_o0b4i3.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780383174/IMG_7379_mabnpm.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780383169/IMG_7360_cw9tpx.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780383144/IMG_7397_vqo7wd.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780383139/IMG_7373_jmmoxl.jpg",
        ],
      },
      {
        title: "Saturday",
        pictures: [
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780382965/IMG_7242_akwre0.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780382962/IMG_6807_mvekka.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780382936/IMG_6760_elbyx1.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780382919/IMG_6706_i04wi7.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780382900/IMG_5714_vtiqhy.jpg",
        ],
      },
      {
        title: "Friday",
        pictures: [
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780382249/FullSizeRender_elkff4.jpg",
          "https://res.cloudinary.com/dnnmq2woa/image/upload/q_auto/f_auto/v1780382243/FullSizeRender_1_l52rne.jpg",
        ],
      },
    ],
  },
];
