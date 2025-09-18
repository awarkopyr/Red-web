import { useState } from "react";
import img1 from "../assets/camera/img1.JPG";
import img2 from "../assets/camera/img2.JPG";
import img3 from "../assets/camera/img3.JPG";
// import img4 from "../assets/camera/img4.JPG";

export default function Camera() {
  const [selected, setSelected] = useState(null);

  // 🔹 Products grouped by category
  const products = {
    camera: [
      {
        name: "V-RAPTOR XE RF",
        img: img2,
      },
      {
        name: "V-RAPTOR XE RF",
        img: img3,
      },
    ],
    lens: [
      {
        name: "Canon RF 50mm f/1.2",
        img: "/assets/lens1.jpg",
        desc: "Prime lens for stunning portraits.",
      },
      {
        name: "Sony 24-70mm f/2.8",
        img: "/assets/lens2.jpg",
        desc: "Perfect all-around zoom lens.",
      },
      {
        name: "Nikon Z 85mm f/1.8",
        img: "/assets/lens3.jpg",
        desc: "Ideal lens for portrait photography.",
      },
    ],
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-6xl w-full">
        {!selected ? (
          // 🔹 First View: Choose Category
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="p-8 bg-white shadow-md rounded-2xl text-center cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelected("camera")}
            >
              <img
                src={img1}
                alt="Camera"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">Cameras</h2>
            </div>

            <div
              className="p-8 bg-white shadow-md rounded-2xl text-center cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelected("lens")}
            >
              <img
                src="/assets/lens.jpg"
                alt="Lens"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">Lenses</h2>
            </div>
          </div>
        ) : (
          // 🔹 Product Cards View
          <div>
            <button
              className="mb-6 px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setSelected(null)}
            >
              ← Back
            </button>

            <h2 className="text-3xl font-bold mb-8 capitalize">{selected} Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products[selected].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.desc}</p>
                  <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Contact Us for More Information
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
