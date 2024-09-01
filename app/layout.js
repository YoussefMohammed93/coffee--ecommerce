import "./globals.css";
import { Cairo } from "next/font/google";
import { CartProvider } from "./context/CartContext";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s | بن الباشا",
    default: "بن الباشا",
  },
  description:
    "اكتشف عالم القهوة الفاخرة مع بن الباشا. نقدم لك أفضل أنواع البن المحمص بعناية للحصول على مذاق لا ينسى، سواء كنت تفضل القهوة العربية الأصيلة أو النكهات العالمية المميزة. جرب الآن وتمتع بنكهة القهوة الحقيقية.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
