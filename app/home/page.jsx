import About from "./About";
import HeroSection from "./HeroSection";
import Footer from "../components/Footer";
import AboutCoffeeSection from "./AboutCoffeeSection";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutCoffeeSection />
      <About />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
