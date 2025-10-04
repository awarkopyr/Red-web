// src/components/PhotoCardCarousel.jsx
import one from "../assets/one.JPG";
import two from "../assets/two.JPG";
import three from "../assets/three.JPG";
import four from "../assets/four.JPG";
import five from "../assets/five.JPG";
import six from "../assets/six.JPG";
import seven from "../assets/seven.JPG";
import eight from "../assets/eight.JPG";

export default function PhotoCardCarousel() {
  const photos = [
    one, two, three, four, five, six, seven, eight
  ];

  return (
    <div className="w-screen overflow-hidden bg-gray-900 py-6">
      <div
        className="flex animate-slide"
        style={{ animationDuration: `${photos.length * 2}s` }}
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
