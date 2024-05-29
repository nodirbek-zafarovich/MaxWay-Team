import React, { useEffect, useRef } from "react";
import ruyhat from "../ruyhat";

export const MapYandex = ({ highlightedAddress }) => {
  const karta = useRef(null);

  useEffect(() => {
    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(karta.current, {
        center: [41.2995, 69.2401],
        zoom: 11,
      });

      ruyhat.forEach((ruyhatlar) => {
        window.ymaps.geocode(ruyhatlar.address).then((result) => {
          const coords = result.geoObjects.get(0).geometry.getCoordinates();
          const placemark = new window.ymaps.Placemark(
            coords,
            {
              balloonContent: `<strong>${ruyhatlar.filial}</strong><br>${ruyhatlar.address}`,
            },
            {
              preset: "islands#icon",
              iconColor:
                highlightedAddress === ruyhatlar.address
                  ? "#ff0000"
                  : "#0095b6",
            }
          );
          map.geoObjects.add(placemark);
        });
      });

      // Set the map center to the selected address
      if (highlightedAddress) {
        window.ymaps.geocode(highlightedAddress).then((result) => {
          const coords = result.geoObjects.get(0).geometry.getCoordinates();
          map.setCenter(coords, 15);
        });
      }
    });
  }, [highlightedAddress]);

  return <div ref={karta} style={{ height: "500px", width: "100%" }} />;
};
