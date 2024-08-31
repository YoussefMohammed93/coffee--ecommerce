"use client";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import productsData from "../data/ProductsData";
import CardButton from "../components/CardButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ProductsButton from "../components/ProductsButton";

export default function ProductsSection() {
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
          {productsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-1 p-3 border shadow-md mx-10 sm:mx-0">
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
                <CardButton text="اختيارات الشراء" href="/product" />
              </div>
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
