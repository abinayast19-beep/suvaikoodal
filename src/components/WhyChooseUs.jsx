function WhyChooseUs() {
  const features = [
    {
      icon: "🌿",
      title: "100% Homemade",
      description: "Prepared with traditional methods and homemade care.",
    },
    {
      icon: "🚫",
      title: "No Preservatives",
      description: "Freshly prepared without artificial preservatives.",
    },
    {
      icon: "🌾",
      title: "Premium Ingredients",
      description: "Made using carefully selected quality ingredients.",
    },
    {
      icon: "🍯",
      title: "Freshly Prepared",
      description: "Every order is prepared fresh after you place it.",
    },
    {
      icon: "🚚",
      title: "Pan India Delivery",
      description: "Safe and secure delivery across India.",
    },
    {
      icon: "💚",
      title: "Made with Love",
      description: "Every product is handcrafted with care and quality.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#6B1E3B] mb-3">
          Why Choose Suvaikoodal?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Healthy. Homemade. Honest.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-[#FFFDF7] rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-bold text-[#6B1E3B]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;