"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(50);
  const { addToCart, notification } = useCart();

  const [totalPrice, setTotalPrice] = useState(product.price);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = `منتجاتنا | ${product?.name || "بن الباشا"}`;
    }
  }, [product]);

  useEffect(() => {
    setTotalPrice(product.price * quantity);
  }, [quantity, product.price]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, size });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10">
      <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start">
        <Image
          src={
            product?.image?.startsWith("http")
              ? product.image
              : `https://bon-elbasha.up.railway.app${
                  product?.image || "/product.png"
                }`
          }
          width={250}
          height={250}
          alt={product.name}
          className="w-full max-w-64 h-full object-cover"
        />
      </div>
      <div className="col-span-12 md:col-span-7 mt-5 md:mt-0 px-5 sm:px-0">
        <h2 className="text-xl md:text-2xl font-black mb-2 text-start">
          {product.name}
        </h2>
        <p className="text-lg my-4">
          السعر :
          <span className="font-bold text-gray-700"> {product.price} جنيه</span>
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
        <div className="flex items-center justify-start mb-4">
          <span className="ml-3">الحجم :</span>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="relative cursor-pointer p-1 z-20 mx-[6px] w-[100px] min-w-[200px] h-[40px] flex items-center justify-center text-center border focus:outline-none"
          >
            <option value={50}>50 جرام</option>
            <option value={100}>100 جرام</option>
            <option value={125}>125 جرام ( تمن كيلو )</option>
            <option value={200}>200 جرام</option>
            <option value={250}>250 جرام ( ربع كيلو )</option>
            <option value={300}>300 جرام</option>
            <option value={500}>500 جرام ( نص كيلو )</option>
            <option value={1000}>1000 جرام ( كيلو )</option>
          </select>
        </div>
        <div className="flex justify-start">
          <button
            className="group flex items-center text-lg gap-2 border border-black px-5 py-2 my-2 relative bg-transparent font-medium uppercase text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
            onClick={handleAddToCart}
          >
            أضف لسلة التسوق
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
        </div>
        <p className="text-lg my-4">
          السعر الإجمالي :
          <span className="font-bold text-gray-700"> {totalPrice} جنيه</span>
        </p>
        <h3 className="text-lg md:text-xl font-semibold my-2 pt-2 text-start">
          الوصف :
        </h3>
        <p className="text-sm md:text-base leading-relaxed max-w-lg text-start text-gray-500">
          {product.description}
        </p>
      </div>
      {notification && (
        <div className="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Card;
