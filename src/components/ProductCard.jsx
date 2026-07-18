import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [selected, setSelected] = useState(product.sizes[0]);
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden p-5 flex flex-col h-full">

      {/* Product Image */}
      <div className="relative bg-[#FFF8F5] rounded-2xl p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain rounded-2xl transition-transform duration-300 hover:scale-105"
        />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-[#6B1E3B] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Name */}
      <h2 className="text-2xl font-bold mt-5 text-[#6B1E3B]">
        {product.name}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 leading-7 text-[15px] min-h-[95px]">
        {product.description}
      </p>

      {/* Features */}
      {product.features && (
        <ul className="mt-4 space-y-2 text-sm text-gray-600 flex-1 min-h-[120px]">
          {product.features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>
      )}

      {/* Size Selection */}
      <div className="flex gap-2 mt-5 flex-wrap">
        {product.sizes.map((size) => (
          <button
            key={size.weight}
            onClick={() => setSelected(size)}
            className={`px-4 py-2 rounded-full border font-medium transition-all duration-300 ${
              selected.weight === size.weight
                ? "bg-[#6B1E3B] text-white border-[#6B1E3B]"
                : "bg-white text-[#6B1E3B] border-[#6B1E3B] hover:bg-[#6B1E3B] hover:text-white"
            }`}
          >
            {size.weight}
          </button>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">

        {/* Price */}
        <div className="mt-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Starting From
          </p>

          <h3 className="text-4xl font-extrabold text-green-700 mt-1">
            ₹{selected.price}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Inclusive of quality packaging
          </p>
        </div>

        {/* Delivery */}
        <div className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          🚚 Delivery charges calculated based on order weight & location.
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <button
            onClick={() => {
              addToCart(product, selected);
              alert(`${product.name} (${selected.weight}) added to cart`);
            }}
            className="bg-[#6B1E3B] text-white py-3 rounded-full font-semibold hover:bg-[#54162E] hover:scale-105 transition-all duration-300"
          >
            Add to Cart
          </button>

          <a
            href={`https://wa.me/917200592175?text=Hi, I'm interested in ${product.name} (${selected.weight}) - ₹${selected.price}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white py-3 rounded-full text-center font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            Order Now
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;