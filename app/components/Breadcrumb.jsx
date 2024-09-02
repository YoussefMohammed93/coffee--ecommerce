import Link from "next/link";

const Breadcrumb = ({ productName }) => {
  return (
    <nav className="flex items-center justify-start space-x-2 text-gray-600 px-5 sm:px-0">
      <Link href="/" className="hover:underline">
        الرئيسية
      </Link>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#000000"
          fill="none"
        >
          <path
            d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <Link href="/products" className="hover:underline">
        منتجات بن الباشا
      </Link>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#000000"
          fill="none"
        >
          <path
            d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-semibold text-black">
        {productName || "اسم المنتج"}
      </span>
    </nav>
  );
};

export default Breadcrumb;
