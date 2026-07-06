import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#6B1E3B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Suvaikoodal
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Homemade healthy snacks prepared with premium ingredients.
            Fresh • Healthy • No Preservatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>

          <div className="space-y-3">

            <a href="#home" className="block hover:text-yellow-300">
              Home
            </a>

            <a href="#products" className="block hover:text-yellow-300">
              Products
            </a>

            <a href="#about" className="block hover:text-yellow-300">
              About
            </a>

            <a href="#contact" className="block hover:text-yellow-300">
              Contact
            </a>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Contact
          </h3>

          <p>📍 Thiruporur, Tamil Nadu</p>

          <p className="mt-2">
            📞 +91 72005 92175
          </p>

          <div className="flex gap-5 text-3xl mt-6">

            <a href="#">
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/suvaikoodal_healthyfoods/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/917200592175"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-300">
        © 2026 Suvaikoodal Healthy Snacks. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;