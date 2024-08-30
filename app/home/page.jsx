import About from "./About";
import HeroSection from "./HeroSection";
import Footer from "../components/Footer";
import ProductsSection from "./ProductsSection";
import AboutCoffeeSection from "./AboutCoffeeSection";
import ScrollToTopButton from "../components/ScrollToTopButton";

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
