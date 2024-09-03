"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CardButton from "../components/CardButton";
import ProductsButton from "../components/ProductsButton";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://bon-elbasha.up.railway.app/product/get-random/"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const displayedProducts = products.slice(0, 10);

  return (
    <section className="pt-12 pb-4">
      <div className="wrapper">
        <h2 className="text-center text-5xl font-semibold text-[#5f1c00]">
          بعض منتجاتنا
        </h2>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
            768: {
              slidesPerView: 2,
              autoplay: false,
            },
            1024: {
              slidesPerView: 5,
              autoplay: false,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-8"
        >
          {displayedProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/product/${item.id}`}>
                <div className="flex flex-col items-center justify-center gap-1 p-3 border shadow-md mx-10 sm:mx-0 cursor-pointer">
                  <div className="w-48 h-48 relative overflow-hidden">
                    <Image
                      src={
                        item.image.startsWith("http")
                          ? item.image
                          : `https://bon-elbasha.up.railway.app${item.image}`
                      }
                      alt={item.name || "Product Image"}
                      layout="fill"
                      objectFit="contain"
                      className="transform transition-transform duration-300 group-hover:scale-[1.15] sm:py-3"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#5f1c00] text-center">
                    {item.name}
                  </h3>
                  <p className="text-center text-gray-600 font-semibold text-lg">
                    {item.price} جنيه
                  </p>
                  <p className="text-center text-gray-500 text-sm">
                    الحجم: {item.size} جم
                  </p>
                  <CardButton
                    text="اختيارات الشراء"
                    href={`/product/${item.id}`}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pb-5 flex justify-center">
          <ProductsButton />
        </div>
      </div>
    </section>
  );
}
