"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import ProductsButton from "../components/ProductsButton";

const productsData = [
  {
    imgSrc: "/product.png",
    title: "1بن الباشا",
    price: "100 EGP",
  },
  {
    imgSrc: "/product.png",
    title: "2بن الباشا",
    price: "200 EGP",
  },
  {
    imgSrc: "/product.png",
    title: "3بن الباشا",
    price: "240 EGP",
  },
  {
    imgSrc: "/product.png",
    title: "4بن الباشا",
    price: "350 EGP",
  },
  {
    imgSrc: "/product.png",
    title: "5بن الباشا",
    price: "50 EGP",
  },
  {
    imgSrc: "/product.png",
    title: "6بن الباشا",
    price: "260 EGP",
  },
];

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
                <p className="text-center" style={{ direction: "ltr" }}>
                  {item.price}
                </p>
                <Link
                  href="/"
                  className="group flex items-center text-lg gap-2 border border-black px-5 py-2 my-2 relative bg-transparent font-medium uppercase text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                >
                  اختيارات الشراء
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="transition-colors duration-200 group-hover:text-white"
                    color={"#000000"}
                    fill={"none"}
                  >
                    <path
                      d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 6H22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="6"
                      cy="20"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="17"
                      cy="20"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 20L15 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
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
