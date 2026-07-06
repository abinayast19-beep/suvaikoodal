import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-3xl font-bold text-[#6B1E3B]">
          Suvaikoodal
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-[#6B1E3B]">Home</a>
          <a href="#products" className="hover:text-[#6B1E3B]">Products</a>
          <a href="#about" className="hover:text-[#6B1E3B]">About</a>
          <a href="#contact" className="hover:text-[#6B1E3B]">Contact</a>

          <a
            href="https://wa.me/917200592175?text=Hi%20Suvaikoodal!%20I%20want%20to%20order."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
          >
            <FaWhatsapp />
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#6B1E3B]"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-5">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Home
          </a>

          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Products
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Contact
          </a>

          <a
            href="https://wa.me/917200592175?text=Hi%20Suvaikoodal!%20I%20want%20to%20order."
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-full"
          >
            <FaWhatsapp />
            Order Now
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;