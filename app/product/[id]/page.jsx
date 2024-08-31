import Card from "../Card";
import About from "@/app/home/About";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";
import AllProductsData from "@/app/data/AllProductsData";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

export default function Product({ params }) {
  const { id } = params;
  const product = AllProductsData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl font-semibold text-gray-600">
          Product not found
        </p>
      </div>
    );
  }

  return (
    <main>
      <div className="wrapper min-h-screen flex flex-col">
        <Navbar />
        <div className="py-5 pb-10 md:pb-28">
          <div className="pt-5">
            <Breadcrumb productName={product.title} />
          </div>
          <Card product={product} />
        </div>
      </div>
      <About />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export async function generateStaticParams() {
  return AllProductsData.map((product) => ({
    id: product.id.toString(),
  }));
}
