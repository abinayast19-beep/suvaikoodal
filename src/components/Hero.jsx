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
            Healthy Snacks
            <br />
            Made With Love ❤️
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Enjoy nutritious homemade snacks prepared using premium ingredients.
            No preservatives, no artificial colours, only natural goodness for
            you and your family.
          </p>

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

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-[#6B1E3B]">
                100%
              </h2>
              <p className="text-gray-600">
                Homemade
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#6B1E3B]">
                0%
              </h2>
              <p className="text-gray-600">
                Preservatives
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#6B1E3B]">
                Fresh
              </h2>
              <p className="text-gray-600">
                Everyday
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