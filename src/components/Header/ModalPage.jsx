import React, { useState } from "react";
import { SendProduct, BringProduct } from "./index";

export const ModalPage = () => {
  const [number, setNumber] = useState(1);

  return (
    <>
      <div className="flex relative bottom-12">
        <div>
          <h1 className="text-[25px] text-gray-800 font-bold">
            Qabul qilib olish turini tanlang
          </h1>
          <p className="text-gray-500 text-[15px]">
            Real vaqt va joylashuvga mos menyuni ko'rish uchun
          </p>
          <div className="flex space-x-4 mt-4">
            <button
              className="w-[230px] text-gray-600 text-[18px] font-normal rounded-3xl hover:bg-slate-100 hover:text-purple-800 bg-gray-100 h-[46px]"
              onClick={() => setNumber(1)}
            >
              Yetkazib berish
            </button>
            <button
              className="w-[230px] text-gray-600 text-[18px] font-normal rounded-3xl hover:bg-slate-100 hover:text-purple-800 bg-gray-100 h-[46px]"
              onClick={() => setNumber(2)}
            >
              Olib ketish
            </button>
          </div>


          <div>{number === 1 && <SendProduct />}</div>
          <div>{number === 2 && <BringProduct />}</div>

        </div>

      
      </div>
    </>
  );
};
