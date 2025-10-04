import owner from "../assets/owner.png";
export default function Portfolio() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Side - Photo */}
        <div className="w-full flex justify-center">
          <img
            src={owner} // 🔹 Replace with your photo path
            alt="Portfolio"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Side - Details */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-50">Syed Badruzzaman (CEO)</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {/* 🔹 Replace this with your details */}
            As the Founder and CEO of Angel Movie World, We have built the company with a vision to empower filmmakers and storytellers with world-class camera equipment. With a passion for cinema and a commitment to quality,We have grown the company into a trusted partner for productions of all sizes, providing cutting-edge cameras and gear that help bring stories to life on the big screen.
          </p>

          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-2xl bg-black text-white hover:bg-gray-800" href="contact">
              Contact Me
            </button>
            <button className="px-5 py-2 rounded-2xl border border-black hover:bg-gray-100">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
