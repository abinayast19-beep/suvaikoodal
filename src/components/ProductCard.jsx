import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [selected, setSelected] = useState(product.sizes[0]);
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-5">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-2xl"
      />

      <h2 className="text-2xl font-bold mt-4 text-[#6B1E3B]">
        {product.name}
      </h2>

      <p className="text-gray-600 mt-2">
        {product.description}
      </p>

      {/* Weight Buttons */}
      <div className="flex gap-2 mt-5 flex-wrap">
        {product.sizes.map((size) => (
          <button
            key={size.weight}
            onClick={() => setSelected(size)}
            className={`px-4 py-2 rounded-full border ${
              selected.weight === size.weight
                ? "bg-[#6B1E3B] text-white"
                : "bg-white"
            }`}
          >
            {size.weight}
          </button>
        ))}
      </div>

      {/* Price */}
      <h3 className="text-3xl font-bold text-green-700 mt-5">
        ₹{selected.price}
      </h3>

      <div className="grid grid-cols-2 gap-3 mt-5">

  <button
    onClick={() => {
      addToCart(product, selected);
      alert(`${product.name} (${selected.weight}) added to cart`);
    }}
    className="bg-[#6B1E3B] text-white py-3 rounded-full hover:bg-[#54162E]"
  >
    Add to Cart
  </button>

  <a
    href={`https://wa.me/917200592175?text=Hi, I'm interested in ${product.name} (${selected.weight}) - ₹${selected.price}`}
    target="_blank"
    rel="noreferrer"
    className="bg-green-600 text-white py-3 rounded-full text-center hover:bg-green-700"
  >
    Order Now
  </a>

</div>

    </div>
  );
}

export default ProductCard;