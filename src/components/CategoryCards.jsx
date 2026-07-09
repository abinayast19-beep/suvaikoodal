import { Link } from "react-router-dom";

function CategoryCards() {
  const categories = [
    {
      title: "Healthy Snacks",
      image: "/images/healthy-snacks-category.jpg",
      link: "/healthy-snacks",
    },
    {
      title: "Homemade Podi",
      image: "/images/Podi-category.jpg",
      link: "/homemade-podi",
    },
    {
      title: "Combo Packs",
      image: "/images/combo-packs-category.jpg",
      link: "/combo-packs",
    },
    {
      title: "Return Gifts",
      image: "/images/return-gifts-category.jpg",
      link: "/return-gifts",
    },
  ];

  return (
    <section className="py-16 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#6B1E3B] mb-10">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#6B1E3B]">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  Explore our collection
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryCards;