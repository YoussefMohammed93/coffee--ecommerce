import Image from "next/image";

const aboutData = [
  {
    imgSrc: "/about-company-img1.png",
    title: "تغليف حديث قوى وصحي",
    description:
      "أجود أنواع الخامات من أجل تغليف قوي للعبوات وصحي على القهوة لحفظها بدون اى تغيير طوال فترة الصلاحية",
  },
  {
    imgSrc: "/about-company-img2.png",
    title: "قابل لإعادة التدوير",
    description: "عبوات وأكياس صديقة للبيئة من أفضل الخامات الصحية",
  },
  {
    imgSrc: "/about-company-img3.png",
    title: "حبوب قهوه طبيعية محمصه",
    description: "حبوب قهوة طبيعية 100% بأفضل جودة ومُنقاه بخبره",
  },
  {
    imgSrc: "/about-company-img4.png",
    title: "نقاء وجودة مضمونة",
    description:
      "نضمن جودة البن المستورد من أفضل المصادر العالمية، مع الحفاظ على نكهة قوية وطبيعية في كل فنجان.",
  },
];

export default function About() {
  return (
    <div className="py-12">
      <div className="wrapper">
        <h2 className="text-center text-5xl font-semibold text-[#5f1c00] pb-16">
          عن بن الباشا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative">
                <Image
                  src={item.imgSrc}
                  alt="coffee"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#5f1c00] text-center">
                {item.title}
              </h3>
              <p className="text-center px-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
