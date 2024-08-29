import Image from "next/image";

export default function AboutCoffeeSection() {
  const coffeeDetails = [
    {
      imgSrc: "/coffee-beans-img1.png",
      text: "أجود أنواع حبوب القهوه",
    },
    {
      imgSrc: "/coffee-beans-img2.png",
      text: "قهوة محمصة بعناية وخبره",
    },
    {
      imgSrc: "/coffee-beans-img3.png",
      text: "مذاق طبيعي بدون اضافات",
    },
  ];

  return (
    <div className="bg-[#e9e2d6] py-12 px-4 lg:px-8">
      <div className="wrapper flex flex-col lg:flex-row lg:items-center">
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-right">
          <h1
            className="text-[#5f1c00] text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ lineHeight: "1.4" }}
          >
            ازاي بنحضرلكم
            <span className="hidden lg:inline">
              {" "}
              <br />{" "}
            </span>{" "}
            بن الباشا الفاخر
          </h1>
          <p className="text-lg py-5 max-w-full lg:max-w-[550px]">
            بيتم انتقاء حبوب القهوه بعنايه من قبل خبرائنا وبيتم تجهيزها وتحميصها
            بدرجات حرارة معينه ووقت معين متقاس بعناية عشان مذاق راقي للقهوة.
          </p>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
          {coffeeDetails.map((coffee, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#5f1c00] p-6 rounded-full flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                <Image
                  src={coffee.imgSrc}
                  alt="coffee image"
                  className="object-contain"
                  width={80}
                  height={80}
                />
              </div>
              <p className="font-semibold text-center text-[#4e1700] mt-4">
                {coffee.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
