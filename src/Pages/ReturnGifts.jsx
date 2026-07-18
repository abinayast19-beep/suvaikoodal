import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

function ReturnGifts() {
  return (
    <>
      <Navbar />

      <div className="bg-[#FFFDF7] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="text-[#6B1E3B] font-semibold hover:underline"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold text-center text-[#6B1E3B] mb-10 mt-4">
            🎉 Return Gifts
          </h1>

          <Products defaultCategory="Return Gifts" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ReturnGifts;