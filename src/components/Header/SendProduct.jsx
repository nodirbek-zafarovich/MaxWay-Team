import React, { useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { MapYandex } from "../../pages/MapYandex";
import ruyhat from "../../ruyhat";

const tashkentAddresses = [
  "Address 1, Tashkent",
  "Address 2, Tashkent",
  "Address 3, Tashkent",
];

export const SendProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredAddresses = ruyhat.filter((item) =>
      item.address.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredAddresses);
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleButtonClick = () => {
    if (selectedAddress) {
      console.log("Selected address:", selectedAddress);
    }
  };

  const handleClearInput = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="flex">
      <div className="max-w-md mx-auto">
        <div className="mb-4 flex">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="mt-1 relative right-2 top-5 w-[590px] h-[50px] shadow-sm sm:text-sm border-[1px] rounded-lg p-4"
            placeholder="Yetkazib berish manzili"
          />
          {searchQuery && (
            <ClearOutlinedIcon
              className="mt-9 right-16 relative text-gray-700 cursor-pointer"
              onClick={handleClearInput}
            />
          )}
        </div>

        {searchResults.length > 0 && (
          <div className="overflow-y-auto max-h-[260px] mt-10 shadow-lg p-5">
            <ul>
              {searchResults.map((item) => (
                <li key={item.id}>
                  <div
                    className="w-[408px] h-[70px] rounded-xl hover:bg-purple-100 p-5 mt-2"
                    onClick={() => handleSelectAddress(item.address)}
                  >
                    <p className="text-zinc-600">{item.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          className={`bg-slate-300 w-[450px] relative h-[50px] top-9 text-gray-700 font-bold py-2 px-4 rounded-3xl ${
            !selectedAddress && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleButtonClick}
          disabled={!selectedAddress}
        >
          Belgilash
        </button>
      </div>

      <div className="flex-shrink-0 w-[410px] ml-10 h-[480px] relative bottom-12 overflow-hidden rounded-xl">
        <MapYandex />
      </div>
    </div>
  );
};
