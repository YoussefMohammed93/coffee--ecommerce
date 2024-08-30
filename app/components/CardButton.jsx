import Link from "next/link";

export default function CardButton() {
  return (
    <Link
      href="/product"
      className="group flex items-center text-lg gap-2 border border-black px-5 py-2 my-2 relative bg-transparent font-medium uppercase text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
    >
      اختيارات الشراء
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        className="transition-colors duration-200 group-hover:text-white"
        color={"#000000"}
        fill={"none"}
      >
        <path
          d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 6H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 20L15 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}
