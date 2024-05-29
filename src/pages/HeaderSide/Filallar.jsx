import React, { useState } from "react";
import { Ruyhat, Mapping } from "./index";
import { NavLink } from "react-router-dom/dist";

export const Filallar = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="relative bottom-0 md:top-2">
        <div className="md:w-[1200px] w-[345px] h-[1px] bg-slate-200 mt-2"></div>

        <div className="md:flex justify-between md:mt-14 mt-10">
          <h1 className="font-bold md:text-4xl text-3xl">Filiallar</h1>

          <div className="space-x-5 md:block flex md:bottom-8 relative top-4">
            <button
              className="w-[170px] h-[50px] hover:text-white text-slate-700 shadow-lg bg-gray-100 rounded-[50px] hover:bg-purple-900 text-xl"
              onClick={() => setCount(1)}
            >
              Ro'yhat
            </button>
            <button
              className="w-[170px] h-[50px] hover:text-white text-slate-700 shadow-lg bg-gray-100 rounded-[50px] hover:bg-purple-900 text-xl"
              onClick={() => setCount(2)}
            >
              Xarita
            </button>
          </div>
        </div>
        <div>{count === 1 && <Ruyhat />}</div>

        <div>
          {count === 2 && (
            <div id="map" style={{ height: "400px" }}>
              <Mapping />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
