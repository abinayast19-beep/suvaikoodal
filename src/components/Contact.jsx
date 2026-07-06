import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-[#6B1E3B] font-semibold uppercase tracking-widest">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-[#6B1E3B] mt-3">
            We'd Love To Hear From You
          </h2>

          <p className="text-gray-600 mt-5">
            Order healthy homemade snacks directly through WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Location */}
          <div className="bg-[#FAF6F0] rounded-3xl p-8 shadow-lg text-center">

            <FaMapMarkerAlt className="text-5xl text-[#6B1E3B] mx-auto mb-5"/>

            <h3 className="text-2xl font-bold">
              Location
            </h3>

            <p className="text-gray-600 mt-3">
              Thiruporur,
              <br />
              Chengalpattu,
              <br />
              Tamil Nadu
            </p>

          </div>

          {/* Phone */}
          <div className="bg-[#FAF6F0] rounded-3xl p-8 shadow-lg text-center">

            <FaPhoneAlt className="text-5xl text-[#6B1E3B] mx-auto mb-5"/>

            <h3 className="text-2xl font-bold">
              Call Us
            </h3>

            <p className="text-gray-600 mt-3">
              +91 72005 92175
            </p>

          </div>

          {/* WhatsApp */}
          <div className="bg-[#FAF6F0] rounded-3xl p-8 shadow-lg text-center">

            <FaWhatsapp className="text-5xl text-green-600 mx-auto mb-5"/>

            <h3 className="text-2xl font-bold">
              WhatsApp
            </h3>

            <a
              href="https://wa.me/917200592175?text=Hi%20Suvaikoodal!%20I%20want%20to%20order."
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Chat Now
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;