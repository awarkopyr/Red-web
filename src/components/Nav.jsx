import { useState } from "react";
import { Menu, X } from "lucide-react";
import { logo2 } from "../assets/asset";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["HOME", "CAMERA", "GALLERY", "CONTACT"];

  return (
    <nav className="bg-gray-900 text-white w-screen">
      <div className="flex justify-center">
        {/* Container that takes half screen on desktop */}
        <div className="flex items-center justify-between w-full md:w-1/2 h-16 px-4">
          
          {/* Logo (always left) */}
          <img src={logo2} alt="Logo" className="h-20 w-25 p-0 m-0" />

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-evenly">
            {navItems.map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="hover:text-gray-300 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (always right) */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase()}`}
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
