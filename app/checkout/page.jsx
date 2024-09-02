"use client";

import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("online");
  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const governorates = [
    "القاهرة",
    "الجيزة",
    "الإسكندرية",
    "الدقهلية",
    "الشرقية",
    "الغربية",
    "المنوفية",
    "القليوبية",
    "البحيرة",
    "كفر الشيخ",
    "دمياط",
    "بورسعيد",
    "الإسماعيلية",
    "السويس",
    "مطروح",
    "شمال سيناء",
    "جنوب سيناء",
    "بني سويف",
    "الفيوم",
    "المنيا",
    "أسيوط",
    "سوهاج",
    "قنا",
    "الأقصر",
    "أسوان",
    "الوادي الجديد",
    "البحر الأحمر",
  ];

  const getQueryParams = () => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const cartItemsQuery = urlParams.get("cartItems");
      return cartItemsQuery;
    }
    return null;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "بن الباشا | الدفع";

      const cartItemsQuery = getQueryParams();
      if (cartItemsQuery) {
        setCartItems(JSON.parse(cartItemsQuery));
      }
    }
  }, []);

  useEffect(() => {
    const isFormComplete =
      firstName &&
      lastName &&
      city &&
      street &&
      phoneNumber &&
      selectedGovernorate;
    setIsButtonDisabled(!isFormComplete);
  }, [firstName, lastName, city, street, phoneNumber, selectedGovernorate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );
  const deliveryFee = 50;
  const total = Math.round(subtotal + deliveryFee);

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleSelect = (governorate) => {
    setSelectedGovernorate(governorate);
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      first_name: firstName,
      last_name: lastName,
      governorate: selectedGovernorate,
      city: city,
      street_name: street,
      phonenumber: phoneNumber,
      cart: cartItems.map((item) => ({
        product: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await fetch(
        "https://bon-elbasha.up.railway.app/checkout/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        alert("Order submitted successfully!");
      } else {
        const errorText = await response.text();
        console.error("Server Error:", errorText);
        alert("Failed to submit order. Please check the server logs.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the order.");
    }
  };

  return (
    <div>
      <main>
        <div className="wrapper">
          <div className="grid lg:grid-cols-2">
            <div className="pl-4 pt-8">
              <p className="text-xl font-medium">ملخص الطلب</p>
              <p className="text-gray-400 mt-2">
                تحقق من العناصر الخاصة بك. واختر طريقة الشحن المناسبة.
              </p>
              <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col rounded-lg bg-white sm:flex-row"
                  >
                    <img
                      className="m-2 h-24 w-28 rounded-md border object-contain object-center p-1"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold text-lg sm:text-xl mb-2">
                        {item.name}
                      </span>
                      <span className="float-right text-gray-400">
                        الحجم : {item.size} جرام
                      </span>
                      <div className="flex items-center mt-2">
                        <span className="float-right text-gray-400">
                          الكمية : {item.quantity}
                        </span>
                      </div>
                      <p className="text-lg font-semibold mt-2">
                        السعر :{" "}
                        {Math.round(parseFloat(item.price) * item.quantity)}{" "}
                        جنيه
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="my-8 text-lg sm:text-xl font-bold">طرق الدفع</p>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  onChange={() => handlePaymentMethodChange("cash")}
                  checked={selectedPaymentMethod === "cash"}
                />
                <span className="peer-checked:border-orange-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 mb-6 peer-checked:border-orange-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_2"
                >
                  <div className="ml-5">
                    <span className="mt-2 font-semibold pr-10">
                      الدفع عند الاستلام
                    </span>
                    <p className="text-slate-500 text-sm leading-6 pr-10">
                      التوصيل: من 2 إلى 4 أيام
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  onChange={() => handlePaymentMethodChange("online")}
                  checked={selectedPaymentMethod === "online"}
                />
                <span className="peer-checked:border-orange-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-orange-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_1"
                >
                  <div className="ml-5">
                    <span className="mt-2 font-semibold pr-10">
                      الدفع اونلاين
                    </span>
                    <p className="text-slate-500 text-sm leading-6 pr-10">
                      التوصيل: من 2 إلى 4 أيام
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="pt-5 grid gap-1 p-5 bg-[#f1f1f1] mt-10 lg:mt-0">
                <label
                  htmlFor="first-name"
                  className="mt-4 block text-sm font-medium mb-3"
                >
                  الاسم الأول
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="الاسم الأول"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label
                  htmlFor="last-name"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  الاسم الأخير
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="الاسم الأخير"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <label
                  htmlFor="state"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  اسم المحافظة
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="اسم المحافظة"
                  value={selectedGovernorate}
                  onClick={() => setShowDropdown(true)}
                  readOnly
                  required
                />
                {showDropdown && (
                  <ul
                    ref={dropdownRef}
                    className="border border-gray-200 rounded-md mt-2 max-h-48 overflow-y-auto bg-white"
                  >
                    {governorates.map((governorate, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => handleSelect(governorate)}
                      >
                        {governorate}
                      </li>
                    ))}
                  </ul>
                )}
                <label
                  htmlFor="city"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  اسم المدينة
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="اسم المدينة"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <label
                  htmlFor="street"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  اسم الشارع
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="اسم الشارع"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                />
                <label
                  htmlFor="phone-number"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  رقم التلفون
                </label>
                <input
                  type="text"
                  id="phone-number"
                  name="phone-number"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="رقم التلفون"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="mt-4 mb-8 w-full rounded-md bg-orange-400 hover:bg-orange-500 disabled:hover:bg-orange-300 disabled:bg-orange-300 disabled:cursor-not-allowed duration-200 transition-all px-5 py-3 font-medium text-white"
                  disabled={isButtonDisabled}
                >
                  تقديم الطلب
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
