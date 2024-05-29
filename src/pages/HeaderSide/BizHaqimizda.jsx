import React, { useState } from "react";
import { NavLink } from "react-router-dom/dist";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const BizHaqimizda = () => {
  const instagramLink = "https://www.instagram.com/maxwayuz/";
  
  const handleClick = () => {
    window.location.href = instagramLink;
  };

  return (
    <>
      <div className="relative bottom-0 md:top-2">
        <div className="md:w-[1200px] w-[345px] h-[1px] bg-slate-200 mt-2"></div>

        <div className="md:mt-8 mt-4">
          <h1 className="font-semibold md:text-4xl text-[28px]">
            Kompaniya haqida
          </h1>
          <div className="md:mt-8 mt-3">
            <img
              src="https://maxway.uz/_next/image?url=%2Fimages%2Fabout.png&w=1920&q=75"
              alt="img"
              className="rounded-xl w-full md:h-[320px] h-[150px] object-cover"
            />
            <p className="mt-8 text-gray-900 font-normal leading-7 text-[17px] sm:w-[70%] w-[100%]">
              Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil
              etilgan. Hozirda kompaniyaning Toshkent shahrida 18 ta filiali
              mavjud. <br /> Taomnoma asosan klаb sendvichlari, hot-doglar,
              burgerlar, lavashlar va donarlardan iborat. Bizning ustuvor
              yo'nalishlarimiz - ingredientlarning yangiligi va sifati,
              qo'shimchalarning xilma-xilligi, arzon narxlar va mehmonlarning
              takliflariga e'tibor. <br /> Har kuni turli xil odamlar MaxWay-dan
              buyurtma berishadi. Biz esa tashrif buyuruvchilar sonini ham,
              filiallar sonini ham oshirishga harakat qilmoqdamiz. Har bir
              tayyorlangan taom bilan biz o'ziga xos retseptlarning
              tafsilotlarini aniqlaymiz va sizning sevimli brendingiz bo'lishda
              davom etish uchun narx va sifatning mukammal muvozanatini
              qidiramiz. <br /> Agar siz kutilmaganda biz tomondan yomon xizmat
              yoki past sifatli pishirilgan taomga duch kelsangiz, bizga{" "}
              <a href="https://t.me/maxwaymasterfood_bot">
                @maxwaymasterfood_bot{" "}
              </a>
              manziliga murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni
              mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati - bu sovg'a,
              bu tufayli bizda o'sish uchun maqsad bo’ladi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
