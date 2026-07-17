import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [selected, setSelected] = useState(product.sizes[0]);
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden p-5 flex flex-col h-full">

      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-2xl"
        />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-[#6B1E3B] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Name */}
      <h2 className="text-2xl font-bold mt-4 text-[#6B1E3B]">
        {product.name}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 leading-7 min-h-[70px]">
        {product.description}
      </p>

      {/* Features */}
      {product.features && (
       <ul className="mt-4 space-y-2 text-sm text-gray-600 flex-1">
         {product.features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>
      )}

      {/* Size Buttons */}
      <div className="flex gap-2 mt-5 flex-wrap">
        {product.sizes.map((size) => (
          <button
            key={size.weight}
            onClick={() => setSelected(size)}
            className={`px-4 py-2 rounded-full border transition ${
              selected.weight === size.weight
                ? "bg-[#6B1E3B] text-white"
                : "bg-white hover:bg-[#6B1E3B] hover:text-white"
            }`}
          >
            {size.weight}
          </button>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">

        {/* Price */}
        <div className="mt-5">
          <p className="text-sm text-gray-500">Starting From</p>
          <h3 className="text-3xl font-bold text-green-700">
            ₹{selected.price}
          </h3>
        </div>

        {/* Delivery Info */}
        <p className="text-xs text-gray-500 mt-3">
          🚚 Delivery charges calculated based on order weight & location.
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-5">

          <button
            onClick={() => {
              addToCart(product, selected);
              alert(`${product.name} (${selected.weight}) added to cart`);
            }}
            className="bg-[#6B1E3B] text-white py-3 rounded-full hover:bg-[#54162E] transition"
          >
            Add to Cart
          </button>

          <a
            href={`https://wa.me/917200592175?text=Hi, I'm interested in ${product.name} (${selected.weight}) - ₹${selected.price}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white py-3 rounded-full text-center hover:bg-green-700 transition"
          >
            Order Now
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;