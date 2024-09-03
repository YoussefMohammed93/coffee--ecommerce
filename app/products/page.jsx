"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardButton from "../components/CardButton";
import Pagination from "../components/pagenation";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "../utils/api";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Products() {
  useEffect(() => {
    document.title = "بن الباشا | منتجاتنا";
  }, []);

  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 4;

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProducts();
        if (response.data && Array.isArray(response.data)) {
          setAllProducts(response.data);
        } else {
          console.error("Fetched data is not an array:", response);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <Navbar />
      <div>
        <h1 className="text-4xl sm:text-6xl font-semibold text-center pt-8 text-[#5f1c00]">
          منتجات بن الباشا
        </h1>
      </div>
      <div className="wrapper">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
            {currentProducts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-1 p-3 border shadow-md cursor-pointer"
              >
                <Link
                  href={`/product/${item.id}`}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="w-48 h-48 relative overflow-hidden">
                    <Image
                      src={
                        item.image.startsWith("http")
                          ? item.image
                          : `https://bon-elbasha.up.railway.app${item.image}`
                      }
                      alt={item.name || "Product Image"}
                      layout="fill"
                      className="object-contain transform transition-transform duration-300 group-hover:scale-[1.15] sm:py-3"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#5f1c00] text-center">
                    {item.name || "Product Name"}
                  </h3>
                  <p className="text-center text-gray-600 font-semibold text-lg">
                    {item.price || "Price not available"} جنيه
                  </p>
                  <p className="text-center text-gray-500 text-sm">
                    الحجم: {item.size} جم
                  </p>
                </Link>
                <CardButton
                  text="اختيارات الشراء"
                  href={`/product/${item.id}`}
                />
              </div>
            ))}
          </div>
        )}
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
