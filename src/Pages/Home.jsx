import Navbar from "../components/Navbar";
import OfferBanner from "../components/OfferBanner";
import CartIcon from "../components/CartIcon";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import BestSellers from "../components/BestSellers";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
     
<OfferBanner />

        <CartIcon />
      <Hero />
      <CategoryCards />
<BestSellers />
      <About />
<WhyChooseUs />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;