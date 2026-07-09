import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-[#6B1E3B]">
          Suvaikoodal
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link to="/" className="hover:text-[#6B1E3B]">
            Home
          </Link>

          <Link to="/healthy-snacks" className="hover:text-[#6B1E3B]">
            Healthy Snacks
          </Link>

          <Link to="/homemade-podi" className="hover:text-[#6B1E3B]">
            Homemade Podi
          </Link>

          <Link to="/combo-packs" className="hover:text-[#6B1E3B]">
            Combo Packs
          </Link>

          <Link to="/return-gifts" className="hover:text-[#6B1E3B]">
            Return Gifts
          </Link>

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

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Home
          </Link>

          <Link
            to="/healthy-snacks"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Healthy Snacks
          </Link>

          <Link
            to="/homemade-podi"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Homemade Podi
          </Link>

          <Link
            to="/combo-packs"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Combo Packs
          </Link>

          <Link
            to="/return-gifts"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Return Gifts
          </Link>

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