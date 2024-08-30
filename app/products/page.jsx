"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productsData from "../data/ProductsData";
import CardButton from "../components/CardButton";
import Pagination from "../components/pagenation";
import React, { useState, useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // Number of products per page
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  useEffect(() => {
    document.title = "منتجاتنا | بن الباشا";
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(
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
              key={item.title}
              className="flex flex-col items-center justify-center gap-1 p-3 border shadow-md"
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
              <p className="text-center" style={{ direction: "ltr" }}>
                {item.price}
              </p>
              <CardButton text="اختيارات الشراء" href="/product" />
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
