"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const footerBgColor = pathname === "/products" ? "#e9e2d6" : "#fff";

  return (
    <footer className="py-8" style={{ backgroundColor: footerBgColor }}>
      <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-8 pt-5 items-center">
        <div className="text-center md:text-right">
          <h1 className="text-3xl text-[#5f1c00] font-semibold">بن الباشا</h1>
        </div>
        <nav className="flex justify-center gap-5">
          <Link
            href="/"
            className="text-lg text-black hover:text-[#5f1c00] duration-200 transition-all"
          >
            الرئيسية
          </Link>
          <Link
            href="/products"
            className="text-lg text-black hover:text-[#5f1c00] duration-200 transition-all"
          >
            منتجات بن الباشا
          </Link>
          <Link
            href="tel:+201024349244"
            className="text-lg text-black hover:text-[#5f1c00] duration-200 transition-all"
          >
            اتصل بنا
          </Link>
        </nav>
        <div className="flex items-center justify-center md:justify-end gap-6">
          <Link
            href="https://wa.me/+201024349244"
            className="text-black hover:text-[#5f1c00] duration-200 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/whatsapp.png"
              alt="whatsapp"
              width={41}
              height={41}
              layout="fixed"
              quality={100}
            />
          </Link>
          <Link
            href="https://www.facebook.com/Basha557"
            target="_blank"
            className="text-black hover:text-[#5f1c00] duration-200 transition-all"
          >
            <Image
              src="/facebook.png"
              alt="facebook"
              width={37}
              height={37}
              layout="fixed"
              quality={100}
            />
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-10">
        © {new Date().getFullYear()} جميع الحقوق محفوظة , بن الباشا
      </div>
    </footer>
  );
}
