import About from "./About";
import HeroSection from "./HeroSection";
import Footer from "../components/Footer";
import AboutCoffeeSection from "./AboutCoffeeSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ProductsSection from "./ProductsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutCoffeeSection />
      <ProductsSection />
      <About />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
