"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "منتجات بن الباشا", path: "/products" },
    { name: "سلة التسوق", path: "/cart" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`transition-transform duration-300 flex ${
        isVisible ? "translate-y-8 sm:translate-y-10" : "-translate-y-full"
      } fixed w-full top-0 z-40`}
    >
      <div className="flex items-center justify-between bg-[#dddddd] bg-opacity-25 z-50 rounded-full px-5 py-1 mx-auto backdrop-blur-sm">
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
        <div className="pr-2 sm:pr-5">
          <Link href="/">
            <Image src="/Logo.svg" alt="logo" width={40} height={40} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
