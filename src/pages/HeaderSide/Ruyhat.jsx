import React from "react";

export const Ruyhat = () => {
  const directors = [
    {
      name: "MAX WAY BERUNIY",
      movies: "улица Беруни, 47, Ташкент",
      time: "Du-Yak: 10:00-22:00",
      open: "10:00 gacha yopiq",
    },
    {
      name: "MAX WAY ATLAS",
      movies: "улица Катартал, 28, Ташкент",
      time: "Du-Yak: 10:00-22:00",
      open: "10:00 gacha yopiq",
    },
    {
      name: "MAX WAY - DRUJBA",
      movies: "микрорайон Алмазар, 8/2, Чиланзарский район, Ташкент",
      time: "Du-Yak: 10:00-04:00",
      open: "04:00 gacha ochiq",
    },
    {
      name: "MAX WAY MEGA PLANET",
      movies: "улица Ниязбек, 1",
      time: "Du-Yak: 10:00-23:00",
      open: "10:00 gacha yopiq",
    },
    {
      name: "MAX WAY AVIASOZLAR",
      movies: "улица Авиасозлар, 23",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },
    {
      name: "MAX WAY RISOVIY",
      movies: "Узбекистан, Ташкент, Алтынкульская улица, 10",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },

    {
      name: "MAX WAY PARUS",
      movies: "улица Катартал, 60/5",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },
    {
      name: "MAX WAY MAGIC CITY",
      movies: "Узбекистан, Ташкент, улица Бабура, 174/6",
      time: "Du-Yak: 10:00-22:00",
      open: "10:00 gacha yopiq",
    },
    {
      name: "MAX WAY SAMARQAND DARVOZA",
      movies: "Узбекистан, Ташкент, улица Коратош, 5А",
      time: "Du-Yak: 10:00-22:00",
      open: "10:00 gacha yopiq",
    },
    {
      name: "MAX WAY PARKENT",
      movies:
        "Узбекистан, Ташкент, Яшнободский район, массив Мавлоно Риёзи, 30В",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },
    {
      name: "MAX WAY UNIVERSAM",
      movies: "Узбекистан, Ташкент, проспект Амира Темура, 41/3",
      time: "Du-Yak: 10:00-23:00",
      open: "10:00 gacha yopiq",
    },
    {
      name: "MAX WAY ROYSON",
      movies: "Узбекистан, Ташкент, улица Заркайнар, 2",
      time: "Du-Yak: 10:00-01:00",
      open: "01:00 gacha ochiq",
    },

    {
      name: "MAX WAY NEXT",
      movies: "Узбекистан, Ташкент, улица Бабура, 6",
      time: "Du-Yak: 10:00-22:00",
      open: "10:00 gacha yopiq",
    },
    {
      name: "MAX WAY MUQUMIY",
      movies: "Узбекистан, Ташкент, улица Чиланзар",
      time: "Du-Yak: 10:00-04:00",
      open: "04:00 gacha ochiq",
    },

    {
      name: "MAX WAY GRAND MIR",
      movies: "Узбекистан, Ташкент, улица Шота Руставели, 9А",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },

    {
      name: "MAX WAY SAYRAM",
      movies: "Узбекистан, Ташкент, улица Юнусота",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },
    {
      name: "MAX WAY MAKSIM GORKIY",
      movies: "махалля Элобод",
      time: "Du-Yak: 10:00-01:00",
      open: "01:00 gacha ochiq",
    },

    {
      name: "MAX WAY SERGELI",
      movies:
        "Узбекистан, Ташкент, Сергелийский район, массив Сергели-VIIIА, 11",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },

    {
      name: "MAX WAY FONTAN",
      movies: "проспект Амира Темура",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },

    {
      name: "MAX WAY MINOR",
      movies: "MaxWay",
      time: "Du-Yak: 10:00-03:00",
      open: "03:00 gacha ochiq",
    },

    // Add more directors if needed
  ];
  return (
    <>
      <div className="mt-10 ml-6">
        {directors.map((director, index) => (
          <div key={index}>
            <div className="w-[565px] p-5 shadow-sm mt-7 rounded-2xl">
              <div className="flex justify-between items-start relative right-9 md:left-0">
                <div className="flex flex-col">
                  <h1 className="font-bold text-[21px] md:w-full w-[90%]">
                    {director.name}
                  </h1>
                  <p className="md:text-[15px] md:w-full w-[62%] md:text-black text-gray-600">{director.movies}</p>
                </div>
                <div className="ml-auto relative right-52 md:left-0">
                  <p
                    className={`md:w-full w-[80%] relative text-right ml-7 md:right-8
                      ${director.open === "10:00 gacha yopiq"
                        ? "text-red-500"
                        : "text-green-500"
        }`
                    }
                  >
                    {director.open}
                  </p>
                </div>
              </div>
              <div className="md:w-[525px] w-[340px] h-[1px] bg-slate-200 mt-3 relative right-10 md:left-0"></div>
              <div className="flex space-x-[310px] mt-3">
                <div className="relative right-9 md:left-0">
                  <p className="text-gray-500">Ish vaqti:</p>
                  <h2 className="w-[150%]">{director.time}</h2>
                </div>
                <div className="relative right-60 md:left-0">
                  <p className="text-gray-500 left-[58px] relative">Telefon:</p>
                  <h2>+998712005400</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
