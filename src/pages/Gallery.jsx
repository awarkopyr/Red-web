export default function PhotoGallery() {
  // ✅ Dynamically import all images from assets/gallery
  const images = import.meta.glob("/src/assets/gallery/*.{png,jpg,jpeg,webp}", { eager: true });

  // Convert the object into an array of image URLs
  const photos = Object.values(images).map((img) => img.default);

  return (
    <section className="w-full py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md">
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
