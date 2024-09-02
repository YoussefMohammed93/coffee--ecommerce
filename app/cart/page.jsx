"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Cart() {
  const { cartItems, removeFromCart, notification, updateCartItemQuantity } =
    useCart();
  const [includeDelivery, setIncludeDelivery] = useState(false);

  if (typeof window !== "undefined") {
    useEffect(() => {
      document.title = "سلة التسوق | بن الباشا";
    }, []);
  }

  const isClient = typeof window !== "undefined";

  if (cartItems.length === 0) {
    return (
      <main>
        <Navbar />
        <div className="min-h-[85vh] flex items-center justify-center px-4">
          <p className="text-center text-2xl font-semibold text-neutral-600">
            سلتك فارغة
          </p>
          {notification && (
            <div className="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
              {notification}
            </div>
          )}
        </div>
        <Footer />
        <ScrollToTopButton />
      </main>
    );
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );
  const deliveryFee = 50;
  const total = Math.round(subtotal + deliveryFee);

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item, item.quantity - 1);
    }
  };

  const incrementQuantity = (item) => {
    updateCartItemQuantity(item, item.quantity + 1);
  };

  return (
    <main>
      <div className="cart-table wrapper">
        <Navbar />
        <div className="main-padding pt-10">
          <div className="overflow-x-auto">
            <table className="cart-table w-full min-w-[600px]">
              <thead className="border border-neutral-300">
                <tr className="flex lg:table-row overflow-x-auto gap-5 items-center">
                  <td className="border-l border-neutral-300 text-lg lg:text-lg text-black py-3 pr-3 min-w-[150px]">
                    حذف المنتج
                  </td>
                  <td className="border-l border-neutral-300 lg:pr-5 text-lg lg:text-lg text-black py-3 min-w-[150px]">
                    صورة المنتج
                  </td>
                  <td className="border-l border-neutral-300 lg:pr-5 text-lg lg:text-lg text-black py-3 min-w-[150px]">
                    اسم المنتج
                  </td>
                  <td className="border-l border-neutral-300 lg:pr-5 text-lg lg:text-lg text-black py-3 min-w-[150px]">
                    سعر المنتج
                  </td>
                  <td className="border-l border-neutral-300 lg:pr-5 text-lg lg:text-lg text-black py-3 min-w-[150px]">
                    كمية المنتج
                  </td>
                  <td className="border-l border-neutral-300 lg:pr-5 text-lg lg:text-lg text-black py-3 min-w-[150px]">
                    حجم المنتج
                  </td>
                  <td className="border-l border-neutral-300 lg:pr-5 text-lg lg:text-lg text-black py-3 min-w-[150px]">
                    الإجمالي الفرعي
                  </td>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    className="product-row flex items-center gap-5 lg:table-row border-b border-neutral-300"
                    key={index}
                  >
                    <td className="remove-item pr-8 min-w-[150px]">
                      <button
                        className="text-lg ml-5 bg-red-500 text-white px-4 py-1 hover:bg-red-600 transition-all duration-200"
                        onClick={() => removeFromCart(item)}
                      >
                        حذف
                      </button>
                    </td>
                    <td className="td-product-image pt-5 pr-4 lg:pr-8 min-w-[100px]">
                      <div className="flex justify-center lg:block">
                        <Image
                          src={
                            item.image?.startsWith("http")
                              ? item.image
                              : `https://bon-elbasha.up.railway.app${item.image}`
                          }
                          alt={item.name}
                          width={80}
                          height={80}
                          className="mb-4 object-cover"
                        />
                      </div>
                    </td>
                    <td className="td-product-name text-lg text-black pt-5 pr-16 lg:pr-8 min-w-[150px]">
                      {item.name}
                    </td>
                    <td className="td-product-price pt-5 text-lg text-black pr-20 lg:pr-12 min-w-[120px]">
                      {Math.round(parseFloat(item.price))} جنيه
                    </td>
                    <td className="td-product-number pt-5 text-lg text-black pr-[45px] lg:p-10 min-w-[100px]">
                      <div className="flex items-center">
                        <button
                          className="px-2 py-1 border disabled:hover:bg-white disabled:hover:cursor-not-allowed hover:bg-gray-200 duration-150 transition-all"
                          onClick={() => decrementQuantity(item)}
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
                          value={item.quantity}
                          readOnly
                          className="mx-3 w-[40px] h-[40px] flex items-center justify-center text-center border focus:outline-none hover:cursor-default"
                          min="1"
                        />
                        <button
                          className="px-2 py-1 border hover:bg-gray-200 duration-150 transition-all"
                          onClick={() => incrementQuantity(item)}
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
                    </td>
                    <td className="td-product-size pt-5 text-lg text-black pr-8 min-w-[100px]">
                      {item.size} جرام
                    </td>
                    <td className="td-product-sub-total pt-5 text-lg text-black pr-20 lg:pr-16 min-w-[100px]">
                      {Math.round(parseFloat(item.price) * item.quantity)} جنيه
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {cartItems.length === 0 && (
              <p className="empty-cart text-2xl font-semibold text-neutral-600 mt-5">
                سلتك فارغة
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-12 pt-12 pb-16 gap-8">
            <div className="col-span-12 md:col-span-8">
              <div className="border border-neutral-300">
                <div className="p-5">
                  <h2 className="text-xl sm:text-2xl text-black font-bold">
                    إجمالي السلة
                  </h2>
                  <table className="sub-total-table w-full mt-5">
                    <tbody>
                      <tr>
                        <td>الإجمالي الفرعي للسلة</td>
                        <td>{Math.round(subtotal)} جنيه</td>
                      </tr>
                      <tr>
                        <td>رسوم التوصيل</td>
                        <td>50 جنيه</td>
                      </tr>
                      <tr>
                        <td>
                          <strong className="font-extrabold">الإجمالي</strong>
                        </td>
                        <td className="font-extrabold">{total} جنيه</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-5">
                    <Link
                      href="/"
                      className="group max-w-[210px] flex items-center text-lg gap-2 border border-black px-5 py-2 my-2 relative bg-transparent font-medium uppercase text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                    >
                      المتابعة إلى الدفع
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="group-hover:text-white text-black"
                        fill="none"
                      >
                        <path
                          d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M6 6L7.5 6M22 6H19"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M10.5 7C10.5 7 11.5 7 12.5 9C12.5 9 15.6765 4 18.5 3"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="6"
                          cy="20"
                          r="2"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <circle
                          cx="17"
                          cy="20"
                          r="2"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M8 20L15 20"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {notification && (
          <div className="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
            {notification}
          </div>
        )}
        <ScrollToTopButton />
      </div>
      <Footer />
    </main>
  );
}
