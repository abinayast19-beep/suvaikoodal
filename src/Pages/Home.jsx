import Navbar from "../components/Navbar";
import OfferBanner from "../components/OfferBanner";
import CartIcon from "../components/CartIcon";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import About from "../components/About";
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
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;