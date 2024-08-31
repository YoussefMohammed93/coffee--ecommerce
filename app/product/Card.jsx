"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.title = "منتجاتنا | بن الباشا";
  }, []);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10">
      <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start">
        <Image
          src={product.imgSrc}
          width={250}
          height={250}
          alt={product.title}
          className="w-full max-w-64"
        />
      </div>
      <div className="col-span-12 md:col-span-7 mt-5 md:mt-0 px-5 sm:px-0">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-start">
          {product.title}
        </h2>
        <p className="text-lg my-4 text-end" style={{ direction: "ltr" }}>
          <span className="font-semibold text-gray-700">{product.price}</span> :
          السعر
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-minus"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        </div>
        <div className="flex justify-start">
          <button className="group flex items-center text-lg gap-2 border border-black px-5 py-2 my-2 relative bg-transparent font-medium uppercase text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
            أضف لسلة التسوق
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
        </div>
        <h3 className="text-lg md:text-xl font-semibold my-2 pt-10 text-start">
          الوصف :
        </h3>
        <p className="text-sm md:text-base leading-relaxed max-w-lg text-start text-gray-500">
          استمتع بمذاق مميز مع "بن الباشا"، قهوة محمصة بعناية من أفضل حبوب البن
          لتمنحك تجربة غنية تجمع بين النكهة القوية والنعومة الفريدة. مع كل فنجان
          من "بن الباشا"، استمتع بلحظات من الفخامة والانتعاش.
        </p>
      </div>
    </div>
  );
};

export default Card;
