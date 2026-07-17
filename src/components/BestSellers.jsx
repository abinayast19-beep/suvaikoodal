import products from "../data/products";
import ProductCard from "./ProductCard";

function BestSellers() {
  const bestsellerNames = [
    "Dry Fruits & Dates with Honey Mix",
    "Biotin Laddu",
    "Kambu Laddu",
    "Healthy Laddu Sampler Box",
  ];

  const bestsellers = products.filter((product) =>
    bestsellerNames.includes(product.name)
  );

  return (
    <section className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#6B1E3B] mb-3">
          ⭐ Best Sellers
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Our customers' favourite homemade products.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
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

export default BestSellers;