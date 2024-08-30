"use client";

import Image from "next/image";
import About from "../home/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardButton from "../components/CardButton";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Product() {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.title = "منتجاتنا | بن الباشا";
  }, []);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="wrapper py-5 pb-10 md:pb-28">
        <div className="pt-5">
          <Breadcrumb />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10">
          <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start">
            <Image
              src="/product.png"
              width={250}
              height={250}
              alt="Product Image"
              className="w-full max-w-64"
            />
          </div>
          <div className="col-span-12 md:col-span-7 mt-5 md:mt-0 px-5 sm:px-0">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-start">
              اسم المنتج
            </h2>
            <p
              className="text-lg mt-2 mb-4 text-end"
              style={{ direction: "ltr" }}
            >
              250 EGP : السعر
            </p>
            <div className="flex items-center justify-start mb-4">
              <span className="ml-3">الكمية :</span>
              <button
                className="px-2 py-1 border hover:bg-gray-200 duration-150 transition-all"
                onClick={decrementQuantity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-minus"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="mx-3 w-[40px] h-[40px] flex items-center justify-center text-center border focus:outline-none hover:cursor-default"
                min="1"
              />
              <button
                className="px-2 py-1 border hover:bg-gray-200 duration-150 transition-all"
                onClick={incrementQuantity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </button>
            </div>
            <div className="flex justify-start">
              <CardButton
                text="أضف لسلة التسوق"
                href="/cart"
                className="max-w-[225px]"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold my-2 pt-10 text-start">
              الوصف
            </h3>
            <p className="text-sm md:text-base leading-relaxed max-w-lg text-start">
              استمتع بمذاق فاخر من حبوب البن المختارة بعناية، المحمصة بعناية
              فائقة لتقديم نكهة غنية وعطرية لا تُضاهى. يتميز بن الباشا بتوازن
              مثالي بين المرارة والحموضة، ليمنحك قهوة مميزة تحاكي الجودة والتميز
              في كل فنجان. مناسب لكل الأوقات والمناسبات.
            </p>
          </div>
        </div>
      </div>
      <About />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
