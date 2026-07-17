function Testimonial() {
  return (
    <section className="py-20 bg-[#FFFDF7]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#6B1E3B] mb-3">
          💚 Loved by Our Customers
        </h2>

        <p className="text-gray-600 mb-12">
          Real feedback from our happy customers.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">
          <div className="text-4xl mb-3">⭐⭐⭐⭐⭐</div>

          <p className="text-lg italic text-gray-700 leading-8">
            "Packaging was superb and everything arrived in perfect condition.
            Highly satisfied! 💯👌"
          </p>

          <div className="mt-8 border-t pt-5">
            <h3 className="text-xl font-bold text-[#6B1E3B]">
              Verified Customer
            </h3>

            <p className="text-gray-500">
              Purchased: Dry Fruits & Dates with Honey Mix
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;