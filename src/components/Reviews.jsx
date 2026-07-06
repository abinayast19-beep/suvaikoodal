function Reviews() {
  const reviews = [
    {
      name: "Priya",
      review:
        "The Dry Fruits & Dates with Honey Mix is super fresh and delicious. My kids love it!",
    },
    {
      name: "Karthik",
      review:
        "Very healthy snacks with premium quality. Worth every rupee.",
    },
    {
      name: "Divya",
      review:
        "Excellent packing and homemade taste. Highly recommended.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-[#6B1E3B] font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-[#6B1E3B] mt-3">
            Happy Customers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF6F0] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >

              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 mt-5 leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-[#6B1E3B]">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;