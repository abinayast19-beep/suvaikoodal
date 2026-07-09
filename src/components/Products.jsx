import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({ category }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchCategory = !category || item.category === category;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section id="products" className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#6B1E3B] mb-8">
          Our Products
        </h2>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border rounded-full px-5 py-3 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;