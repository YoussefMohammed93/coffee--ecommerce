import Link from "next/link";

const ProductsButton = () => {
  return (
    <Link
      href="/"
      className="mt-5 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
    >
      منتجات بن الباشا
    </Link>
  );
};

export default ProductsButton;
