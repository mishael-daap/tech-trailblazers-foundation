const imageModules = import.meta.glob('../assets/wad-pictures/*.{webp,WEBP,png,PNG,jpg,JPG,jpeg,JPEG}', {
  eager: true,
  as: 'url'
});

export const galleryImages = Object.values(imageModules) as string[];
