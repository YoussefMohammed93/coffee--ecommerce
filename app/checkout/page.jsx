"use client";

import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";

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

  // Custom function to extract query parameters manually
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
      firstName && lastName && city && street && phoneNumber;
    setIsButtonDisabled(!isFormComplete);
  }, [firstName, lastName, city, street, phoneNumber]);

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
              <p className="mt-8 text-lg sm:text-xl font-bold">طرق الدفع</p>
              <form className="mt-5 grid gap-6">
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
                    className="peer-checked:border-2 peer-checked:border-orange-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_2"
                  >
                    <img
                      className="w-14 object-contain"
                      src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">
                        الدفع عند الاستلام
                      </span>
                      <p className="text-slate-500 text-sm leading-6">
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
                    <img
                      className="w-14 object-contain"
                      src="/images/naorrAeygcJzX0SyNI4Y0.png"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">الدفع اونلاين</span>
                      <p className="text-slate-500 text-sm leading-6">
                        التوصيل: من 2 إلى 4 أيام
                      </p>
                    </div>
                  </label>
                </div>
              </form>
            </div>
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
              <div>
                <p className="text-xl font-medium">تفاصيل الدفع</p>
                <p className="text-gray-400 pt-2">
                  أكمل طلبك بتوفير تفاصيل الدفع الخاصة بك.
                </p>
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
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
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
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="الاسم الأخير"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {selectedPaymentMethod === "online" && (
                  <>
                    <label
                      htmlFor="card-no"
                      className="block text-sm font-medium pt-3 mb-3"
                    >
                      تفاصيل البطاقة
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row space-y-4 sm:space-y-0">
                      <div className="relative w-full sm:w-7/12 flex-shrink-0">
                        <input
                          type="text"
                          id="card-no"
                          name="card-no"
                          maxLength="12"
                          className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="xxxx-xxxx-xxxx"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg
                            className="h-4 w-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        name="credit-expiry"
                        maxLength="4"
                        className="w-full sm:w-3/12 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="MM/YY"
                      />
                      <input
                        type="text"
                        name="credit-cvc"
                        maxLength="3"
                        className="w-full sm:w-2/12 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="CVC"
                      />
                    </div>
                  </>
                )}
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
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="اسم المحافظة"
                  value={selectedGovernorate}
                  onClick={() => setShowDropdown(true)}
                  readOnly
                  required
                />
                {showDropdown && (
                  <ul
                    ref={dropdownRef}
                    className="border border-gray-200 rounded-md mt-2 max-h-48 overflow-y-auto"
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
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
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
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
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
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="رقم التلفون"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mt-6 border-t border-b py-2 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      الإجمالي الفرعي للسلة
                    </p>
                    <p className="font-semibold text-gray-900">
                      {Math.round(subtotal)} جنيه
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      رسوم التوصيل
                    </p>
                    <p className="font-semibold text-gray-900">50 جنيه</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between px-5">
                  <p className="text-sm sm:text-lg font-semibold text-gray-900">
                    الإجمالي
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {total} جنيه
                  </p>
                </div>
                <button
                  className="mt-4 mb-8 w-full rounded-md bg-orange-400 hover:bg-orange-500 disabled:hover:bg-orange-300 disabled:bg-orange-300 disabled:cursor-not-allowed duration-200 transition-all px-5 py-3 font-medium text-white"
                  disabled={isButtonDisabled}
                >
                  تقديم الطلب
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
