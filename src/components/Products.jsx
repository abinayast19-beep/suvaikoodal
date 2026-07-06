import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "../data/products";

const Products = () => {
  return (
    <section
      id="products"
      className="bg-[#FFFDF7] py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-green-700 font-semibold uppercase tracking-widest">
            Our Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-800">
            Healthy Snacks Made With Love ❤️
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-8">
            Every product is freshly prepared using premium quality ingredients
            without artificial preservatives. Perfect for everyday healthy
            snacking and gifting.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
  <ProductCard
    key={item.id}
    image={item.image}
    name={item.name}
    description={item.description}
    price={item.price}
    unit={item.unit}
  />
))}
        </div>

      </div>
    </section>
  );
};

export default Products;