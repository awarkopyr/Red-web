import { useEffect, useRef, useState } from "react";
import one from "../assets/one.JPG";
import two from "../assets/two.JPG";
import three from "../assets/three.JPG";
import four from "../assets/four.JPG";
import five from "../assets/five.JPG";
import six from "../assets/six.JPG";
import seven from "../assets/seven.JPG";
import eight from "../assets/eight.JPG";

export default function PhotoCardCarousel() {
  const photos = [one, two, three, four, five, six, seven, eight];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let scrollPos = 0;

    // speed (lower = faster)
    const speed = isMobile ? 1.5 : 0.6;

    let animationFrame;

    const scroll = () => {
      scrollPos += speed;
      if (scrollPos >= container.scrollWidth / 2) {
        // reset position seamlessly halfway through duplicate
        scrollPos = 0;
      }
      container.style.transform = `translateX(-${scrollPos}px)`;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isMobile]);

  return (
    <div className="w-screen overflow-hidden bg-gray-900 py-6">
      <div ref={containerRef} className="flex transition-none will-change-transform">
        {[...photos, ...photos].map((src, index) => (
          <div
            key={index}
            className={`flex-shrink-0 flex items-center justify-center ${
              isMobile ? "w-full" : "sm:w-1/5"
            }`}
          >
            <img
              src={src}
              alt={`Photo ${index + 1}`}
              className="w-auto h-64 sm:h-80 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
