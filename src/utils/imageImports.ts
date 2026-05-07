const imageModules = import.meta.glob('../assets/wad-pictures/LIVE EVENT PHOTOGRAPHY/*.{jpg,JPG,jpeg,JPEG,png,PNG}', {
  eager: true,
  as: 'url'
});

export const galleryImages = Object.values(imageModules) as string[];
