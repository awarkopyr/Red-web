export default function Contact() {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            I’d love to hear from you! Whether you have a question, project idea,
            or just want to say hi, feel free to reach out.
          </p>

          <div className="space-y-4">
            <p className="text-gray-800">
              📍 <span className="font-medium">Address:</span> Your Address Here
            </p>
            <p className="text-gray-800">
              📧 <span className="font-medium">Email:</span> your@email.com
            </p>
            <p className="text-gray-800">
              📞 <span className="font-medium">Phone:</span> +123 456 7890
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black text-2xl">🌐</a>
            <a href="#" className="text-gray-600 hover:text-black text-2xl">🐦</a>
            <a href="#" className="text-gray-600 hover:text-black text-2xl">📸</a>
            <a href="#" className="text-gray-600 hover:text-black text-2xl">💼</a>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
