import Link from "next/link";
import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <div
      className="relative md:h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <Navbar />
      <div className="wrapper relative grid grid-cols-1 md:grid-cols-2 h-full pt-[108px]">
        <div className="flex items-center justify-self-center md:justify-self-end order-1 md:order-2 pt-5 self-baseline">
          <img
            src="coffee.png"
            alt="Coffee"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center pb-16 pt-10 md:pb-20 md:py-12 md:pt-16 lg:pb-16 text-white order-2 md:order-1 text-center md:text-right">
          <div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8">
              بن الباشا
            </h1>
            <span className="text-orange-400 text-5xl font-bold">
              بن على مزاجك
            </span>
          </div>
          <p className="text-lg lg:text-xl mt-8 mb-5 max-w-[500px]">
            بن عربي فاخر من أجود أنواع البن العالمية الفتة والفحص بعناية ويتابعه
            مجموعة من الخبراء لأفضل مذاق ممكن للبن.
          </p>
          <Link
            href="/"
            className="mt-5 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            منتجات بن الباشا
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
