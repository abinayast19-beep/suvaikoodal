import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FAF6F0] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>

          <p className="text-[#6B1E3B] font-semibold uppercase tracking-widest">
            Homemade • Healthy • Fresh
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#6B1E3B] leading-tight mt-5">
            Healthy Homemade Foods
            <br />
            Made with Tradition & Care 💚
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Discover a delicious range of homemade healthy foods prepared with
            premium ingredients. Every order is freshly made with no
            preservatives or artificial colours, bringing authentic taste and
            nutrition to your family.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#products"
              className="bg-[#6B1E3B] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#54162E] transition"
            >
              View Products
              <FaArrowRight />
            </a>

            <a
              href="https://wa.me/917200592175?text=Hi%20Suvaikoodal!%20I%20want%20to%20order."
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[#6B1E3B] text-[#6B1E3B] px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#6B1E3B] hover:text-white transition"
            >
              <FaWhatsapp />
              WhatsApp Order
            </a>

          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <h3 className="text-2xl">🌿</h3>
              <p className="text-sm font-semibold text-[#6B1E3B] mt-2">
                100% Homemade
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <h3 className="text-2xl">🚫</h3>
              <p className="text-sm font-semibold text-[#6B1E3B] mt-2">
                No Preservatives
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <h3 className="text-2xl">🌾</h3>
              <p className="text-sm font-semibold text-[#6B1E3B] mt-2">
                Premium Ingredients
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <h3 className="text-2xl">🚚</h3>
              <p className="text-sm font-semibold text-[#6B1E3B] mt-2">
                Pan India Delivery
              </p>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <img
            src="/images/Dry-fruits.jpg"
            alt="Dry Fruits & Dates with Honey Mix"
            className="w-full max-w-md rounded-[35px] shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;