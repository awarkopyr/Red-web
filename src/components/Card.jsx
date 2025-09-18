// src/components/PhotoCardCarousel.jsx
import { one , two , three , four , five , six , seven , eight } from "../assets/asset.js";

export default function PhotoCardCarousel() {
  const photos = [
    one, two, three, four, five, six, seven, eight
  ];

  return (
    <div className="w-screen overflow-hidden bg-gray-900 py-6">
      <div
        className="flex animate-slide"
        style={{ animationDuration: `${photos.length * 3}s` }}
      >
        {/* duplicate for infinite scroll */}
        {[...photos, ...photos].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/5" 
            /* w-full on phone → 1 card; w-1/5 on sm+ → 5 cards */
          >
            <img
              src={src}
              alt={`Photo ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
