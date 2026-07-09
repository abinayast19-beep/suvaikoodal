function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/Dry-fruits.jpg"
            alt="About Suvaikoodal"
            className="rounded-3xl shadow-2xl w-full max-w-md"
          />
        </div>

        {/* Content */}
        <div>

          <p className="text-[#6B1E3B] font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="text-5xl font-bold text-[#6B1E3B] mt-4">
            Homemade Healthy Snacks
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            Suvaikoodal Healthy Snacks is committed to preparing delicious,
            nutritious and homemade snacks using premium quality ingredients.
            Every product is freshly made with care to give your family a
            healthy and tasty experience.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-[#FAF6F0] p-6 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-[#6B1E3B]">
                100%
              </h3>
              <p className="mt-2 text-gray-600">
                Homemade
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-[#6B1E3B]">
                Fresh
              </h3>
              <p className="mt-2 text-gray-600">
                Daily Preparation
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-[#6B1E3B]">
                0%
              </h3>
              <p className="mt-2 text-gray-600">
                Preservatives
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-[#6B1E3B]">
                Premium
              </h3>
              <p className="mt-2 text-gray-600">
                Ingredients
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;