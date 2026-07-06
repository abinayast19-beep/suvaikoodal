function ProductCard({ image, name, description, price, unit }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#6B1E3B]">
          {name}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <p className="mt-4 text-[#6B1E3B] font-bold">
          Starting from ₹{price}
        </p>

        <p className="text-gray-500 text-sm">
          {unit}
        </p>

        <a
          href={`https://wa.me/917200592175?text=Hi%20Suvaikoodal!%20I%20want%20to%20order%20${encodeURIComponent(
            name
          )}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-[#6B1E3B] text-white px-6 py-3 rounded-full hover:bg-[#54162E]"
        >
          Order Now
        </a>

      </div>

    </div>
  );
}

export default ProductCard;