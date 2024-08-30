import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 bg-[#e9e2d6]">
      <div className="wrapper mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#5f1c00] pb-12 md:pb-16">
          عن بن الباشا
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <Image
              src="/about-company-img1.png"
              alt="coffee"
              width={100}
              height={100}
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#5f1c00]">
              تغليف حديث قوى وصحي
            </h3>
            <p className="text-sm md:text-base">
              أجود أنواع الخامات من أجل تغليف قوي للعبوات وصحي على القهوة لحفظها
              بدون اى تغيير طوال فترة الصلاحية
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <Image
              src="/about-company-img2.png"
              alt="coffee"
              width={100}
              height={100}
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#5f1c00]">
              قابل لإعادة التدوير
            </h3>
            <p className="text-sm md:text-base">
              عبوات وأكياس صديقة للبيئة من أفضل الخامات الصحية
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <Image
              src="/about-company-img3.png"
              alt="coffee"
              width={100}
              height={100}
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#5f1c00]">
              حبوب قهوه طبيعية محمصه
            </h3>
            <p className="text-sm md:text-base">
              حبوب قهوة طبيعية 100% بأفضل جودة ومُنقاه بخبره
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <Image
              src="/about-company-img4.png"
              alt="coffee"
              width={100}
              height={100}
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#5f1c00]">
              نقاء وجودة مضمونة
            </h3>
            <p className="text-sm md:text-base">
              نضمن جودة البن المستورد من أفضل المصادر العالمية، مع الحفاظ على
              نكهة قوية وطبيعية في كل فنجان.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
