import { Link } from "react-router-dom";

function CategoryCards() {
  const categories = [
    {
      title: "Healthy Laddus",
      image: "/images/healthy-laddus-category.jpg",
      link: "/healthy-snacks",
      description: "Traditional & Healthy Homemade Laddus",
    },
    {
      title: "Healthy Mixes",
      image: "/images/healthy-mixes-category.jpg",
      link: "/healthy-snacks",
      description: "Nutritious Dry Fruits & Honey Mix",
    },
    {
      title: "Herbal Products",
      image: "/images/herbal-products-category.jpg",
      link: "/healthy-snacks",
      description: "Natural Wellness Products",
    },
    {
      title: "Homemade Powders",
      image: "/images/Podi-category.jpg",
      link: "/homemade-podi",
      description: "Freshly Ground Homemade Powders",
    },
    {
      title: "Healthy Treats",
      image: "/images/healthy-treats-category.jpg",
      link: "/healthy-snacks",
      description: "Healthy Chocolates & Traditional Sweets",
    },
    {
      title: "Combo Packs",
      image: "/images/combo-packs-category.jpg",
      link: "/combo-packs",
      description: "Healthy Combos for Every Occasion",
    },
    {
      title: "Return Gifts",
      image: "/images/return-gifts-category.jpg",
      link: "/return-gifts",
      description: "Festival & Special Occasion Return Gifts",
    },
  ];

  return (
    <section className="py-16 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#6B1E3B] mb-4">
          Shop by Category
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Discover our healthy homemade products crafted with care.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold text-[#6B1E3B]">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  {item.description}
                </p>

                <button className="mt-5 bg-[#6B1E3B] text-white px-5 py-2 rounded-full hover:bg-[#54162E] transition">
                  Explore →
                </button>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoryCards;