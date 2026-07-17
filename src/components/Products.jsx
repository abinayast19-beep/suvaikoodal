import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const categories = [
  "All",
  "Healthy Laddus",
  "Healthy Mixes",
  "Herbal Products",
  "Homemade Powders",
  "Healthy Treats",
  "Combo Packs",
  "Return Gifts",
];

function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((item) => {
    const matchCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section
      id="products"
      className="py-20 bg-[#FFFDF7]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#6B1E3B] mb-8">
          Our Products
        </h2>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border rounded-full px-5 py-3 outline-none shadow-sm focus:ring-2 focus:ring-[#6B1E3B]"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-[#6B1E3B] text-white"
                  : "bg-white border border-[#6B1E3B] text-[#6B1E3B] hover:bg-[#6B1E3B] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No products found.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Products;