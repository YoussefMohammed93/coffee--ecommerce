"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardButton from "../components/CardButton";
import Pagination from "../components/pagenation";
import React, { useState, useEffect } from "react";
import AllProductsData from "../data/AllProductsData";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(AllProductsData.length / productsPerPage);

  useEffect(() => {
    document.title = "منتجاتنا | بن الباشا";
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = AllProductsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <main>
      <Navbar />
      <div>
        <h1 className="text-4xl sm:text-6xl font-semibold text-center pt-8 text-[#5f1c00]">
          منتجات بن الباشا
        </h1>
      </div>
      <div className="wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
          {currentProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center gap-1 p-3 border shadow-md cursor-pointer"
            >
              <Link
                href={item.href}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="w-48 h-48 relative overflow-hidden">
                  <Image
                    src={item.imgSrc}
                    alt="coffee"
                    layout="fill"
                    objectFit="contain"
                    className="transform transition-transform duration-300 group-hover:scale-[1.15] sm:py-3"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#5f1c00] text-center">
                  {item.title}
                </h3>
                <p
                  className="text-center text-gray-600 font-semibold text-lg"
                  style={{ direction: "ltr" }}
                >
                  {item.price}
                </p>
              </Link>
              <CardButton text="اختيارات الشراء" href={item.href} />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
