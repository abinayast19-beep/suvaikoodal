import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-[#FAF6F0]">

      <Navbar />

      <Hero />

      <Products />

      <About />

      <Reviews />

      <FAQ />

      <Contact />

      <Footer />

      <ScrollTop />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917200592175?text=Hi%20Suvaikoodal!%20I%20want%20to%20order."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition text-3xl z-50"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default Home;