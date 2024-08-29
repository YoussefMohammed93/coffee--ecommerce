"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "منتجات بن الباشا", path: "/products" },
    { name: "سلة التسوق", path: "/cart" },
  ];

  return (
    <nav className="wrapper relative z-40 pt-10">
      <div className="flex items-center justify-between bg-[#dddddd] bg-opacity-25 z-50 rounded-full px-5 py-1 max-w-7xl lg:max-w-6xl mx-auto">
        <ul className="flex items-center gap-3 sm:gap-5">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`text-base transition-all duration-200 ${
                  pathname === link.path
                    ? "text-[#ffac47]"
                    : "text-white hover:text-[#ffac47]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link href="/">
            <Image src="/Logo.svg" alt="logo" width={40} height={40} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
