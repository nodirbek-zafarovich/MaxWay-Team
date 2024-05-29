import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import ruyhat from "../../ruyhat";
import { MapYandex } from "../../pages/MapYandex";

export const BringProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedAddress, setHighlightedAddress] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setIsButtonDisabled(true);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsButtonDisabled(true);
  };

  const handleHighlightAddress = (address) => {
    setHighlightedAddress(address);
    setIsButtonDisabled(false);
  };

  const handleDesignationButtonClick = () => {
    const restaurant = ruyhat.find(
      (item) => item.filial.toLowerCase() === searchQuery.toLowerCase()
    );
    if (restaurant) {
      setHighlightedAddress(restaurant.address);
      setIsModalOpen(false); // Close modal when button is clicked
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && ( // Render modal only when isModalOpen is true
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-[400px]">
            <h2 className="text-xl font-bold mb-4">Modal Content</h2>
            <p>Modal content goes here...</p>
            <button
              className="mt-4 bg-purple-900 text-white px-4 py-2 rounded-lg"
              onClick={handleModalClose}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}

      <div className="flex">
        <div>
          <div className="mt-5 w-full">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Restoran nomi bo'yicha qidirish"
                className="w-full h-[50px] px-3 py-2 pr-10 text-[13px] rounded-xl border border-gray-300 focus:outline-none focus:border-purple-500"
              />
              {searchQuery ? (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-3 flex items-center px-2 text-gray-900 hover:text-gray-600 focus:outline-none"
                >
                  <ClearIcon />
                </button>
              ) : (
                <div className="absolute inset-y-0 right-3 flex items-center px-2 text-gray-900">
                  <ClearIcon />
                </div>
              )}
            </div>
            <div className="mt-7 overflow-y-auto max-h-[278px]">
              {ruyhat
                .filter((item) =>
                  item.filial.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className={`w-full h-[100px] rounded-2xl p-3 border-[1px] border-purple-900 mb-3 ${
                      item.address === highlightedAddress ? "bg-purple-100" : ""
                    }`}
                    onClick={() => handleHighlightAddress(item.address)}
                  >
                    <div className="flex">
                      <LocationOnOutlinedIcon className="text-purple-900" />
                      <h1 className="font-semibold">{item.filial}</h1>
                    </div>
                    <div className="mt-1 ml-1">
                      <p className="text-zinc-400 text-[13px]">
                        {item.address}
                      </p>
                      <p
                        className={`text-[13px] mt-2 ${
                          item.openTime === "open_until"
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {item.openTime}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={handleDesignationButtonClick}
            className={`w-full bg-purple-900 text-white font-semibold rounded-3xl h-[46px] mt-4 ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isButtonDisabled}
          >
            Belgilash
          </button>
        </div>
        <div className="flex-shrink-0 w-[410px] ml-10 h-[480px] relative bottom-12 overflow-hidden rounded-xl">
          <MapYandex />
        </div>
      </div>
    </>
  );
};

