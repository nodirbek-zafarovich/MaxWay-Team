import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { addToCart } from "../../../actions";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Slider from "react-slick";

export const Modal = ({ isOpen, onClose, card }) => {
  console.log(card);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);



  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        ...item,
      })
    );
    alert("Successfully added to cart!");
    // Close the modal after adding to cart
  };

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const [isInput, setIsInput] = useState(false);
  const [isInput1, setIsInput1] = useState(false);
  const [isInput2, setIsInput2] = useState(false);
  const [count, setCount] = useState(1); // Initialize count to 1

  //
  const toggleInputGroup = () => {
    setIsChecked(!isChecked);
    setIsChecked1(false);
    setIsChecked2(false);
  };

  const toggleInputGroup1 = () => {
    setIsChecked(false);
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
  };

  const toggleInputGroup2 = () => {
    setIsChecked(false);
    setIsChecked1(false);
    setIsChecked2(!isChecked2);
  };
  //

  const toggleInputSide = () => {
    setIsInput(!isInput);
    setIsInput1(false);
    setIsInput2(!isInput2);
  };

  const toggleInputSide1 = () => {
    setIsInput(false);
    setIsInput1(!isChecked1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setCount(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;
  const totalPrice = count * card.productPrice;

  //carousel

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 cards by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Enable center mode
    centerPadding: "1px", // Adjust spacing between cards
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  //   Modal

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50"
      onClick={handleCloseModal}
      animate={{
        x: 8,
        y: 8,
        scale: 0.6,
        rotate: 0,
      }}
    >
      <div
        className="bg-white rounded-lg md:w-[730px] h-[540px] w-[386px] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseOutlinedIcon
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />
        <div className="md:flex overflow-y-auto">
          <div className="flex md:mt-32 mt-6 md:w-[320px] ml-6">
            <img src={card.img} alt="img" className="h-60 object-cover mb-4" />
          </div>
          {/* scroll */}
          <div className="md:overflow-y-auto h-[460px]">
            <div className="flex flex-col md:ml-10 ml-6 md:mt-9 mt-4">
              <h1 className="font-semibold md:text-2xl text-xl md:mb-2">
                {card.name}
              </h1>
              <p className="text-[17px] md:text-gray-500 text-zinc-400 mt-2 mb-4 w-[92%]">
                {card.desc}
              </p>

              {/* 1 st div */}

              <div className="md:w-[360px] w-[350px] h-[84px] mt-2 rounded-xl border-2 p-3">
                <h2 className="font-normal text-gray-600">kartoshka-fri</h2>

                <div className="flex space-x-3 mt-2">
                  <input type="checkbox" className="text-purple-900" />

                  <p className="text-gray-600 text-[14px]">
                    kichik kartoshka-fri
                  </p>

                  <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                    <button>-</button>
                    <p className="text-[13px] mt-[2px]">{count}</p>
                    <button>+</button>
                  </div>

                  <h2 className="text-gray-500 text-[14px] mt-[1px] relative md:left-[75px] left-[64px]">
                    + 0 so'm
                  </h2>
                </div>
              </div>

              {/* 1 st div */}

              {/* 2nd div */}

              <div className="md:w-[360px] w-[350px] h-[164px] mt-6 rounded-xl border-2 p-3">
                <h2 className="font-semibold text-gray-600">
                  siz tanlagan sous
                </h2>
                {/*  */}
                <div className="flex items-center justify-between mt-2 leading-10">
                  <div className="flex space-x-3">
                    <input
                      type="checkbox"
                      className="text-purple-900"
                      onChange={toggleInputGroup}
                      checked={isChecked}
                    />

                    <p className="text-gray-600 text-[14px]">sarimsoqli sous</p>

                    {isChecked && (
                      <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                        <button>-</button>
                        <p className="text-[13px] mt-[4px]">{count}</p>
                        <button>+</button>
                      </div>
                    )}
                  </div>

                  <h2 className="text-gray-500 text-[14px] mt-[1px]">
                    + 0 so'm
                  </h2>
                </div>
                {/*  */}

                <div className="flex items-center justify-between mt-2">
                  <div className="flex space-x-3">
                    <input
                      type="checkbox"
                      className="text-purple-900"
                      onChange={toggleInputGroup1}
                      checked={isChecked1}
                    />

                    <p className="text-gray-600 text-[14px]">sarimsoqli sous</p>

                    {isChecked1 && (
                      <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                        <button>-</button>
                        <p className="text-[13px] mt-[4px]">{count}</p>
                        <button>+</button>
                      </div>
                    )}
                  </div>

                  <h2 className="text-gray-500 text-[14px] mt-[1px]">
                    + 0 so'm
                  </h2>
                </div>

                {/*  */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex space-x-3">
                    <input
                      type="checkbox"
                      className="text-purple-900"
                      onChange={toggleInputGroup2}
                      checked={isChecked2}
                    />

                    <p className="text-gray-600 text-[14px]">sarimsoqli sous</p>
                    {isChecked2 && (
                      <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                        <button>-</button>
                        <p className="text-[13px] mt-[4px]">{count}</p>
                        <button>+</button>
                      </div>
                    )}
                  </div>

                  <h2 className="text-gray-500 text-[14px] mt-[1px]">
                    + 0 so'm
                  </h2>
                </div>

                {/*  */}
              </div>
              {/* 2nd div */}

              {/* 3d div */}
              <div className="md:w-[360px] w-[350px] h-[134px] mt-6 rounded-xl border-2 p-3">
                <h2 className="font-semibold text-gray-600">ichimlik</h2>
                {/*  */}
                <div className="flex items-center justify-between mt-2 leading-10">
                  <div className="flex space-x-3">
                    <input
                      type="checkbox"
                      className="text-purple-900"
                      onChange={toggleInputSide}
                      checked={isInput}
                    />

                    <p className="text-gray-600 text-[14px]">quyma cola</p>

                    {isInput && (
                      <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                        <button>-</button>
                        <p className="text-[13px] mt-[4px]">{count}</p>
                        <button>+</button>
                      </div>
                    )}
                  </div>

                  <h2 className="text-gray-500 text-[14px] mt-[1px]">
                    + 0 so'm
                  </h2>
                </div>
                {/*  */}

                <div className="flex items-center justify-between mt-2">
                  <div className="flex space-x-3">
                    <input
                      type="checkbox"
                      className="text-purple-900"
                      onChange={toggleInputSide1}
                      checked={isInput1}
                    />

                    <p className="text-gray-600 text-[14px]">limonli choy</p>

                    {isInput1 && (
                      <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                        <button>-</button>
                        <p className="text-[13px] mt-[4px]">{count}</p>
                        <button>+</button>
                      </div>
                    )}
                  </div>

                  <h2 className="text-gray-500 text-[14px] mt-[1px]">
                    + 0 so'm
                  </h2>
                </div>

                {/*  */}
              </div>

              {/* 3d div */}

              {/* recomend */}
              <div className="mt-5">
                <h1 className="font-bold text-gray-800 text-xl">
                  Tavsiya etamiz
                </h1>

                <div style={{ maxHeight: "430px", overflow: "hidden" }}>
                  <Slider {...settings} className="w-[440px] mt-5">
                    <div>
                      <div className="w-[201px] h-[266px] rounded-2xl overflow-hidden shadow-sm">
                        <img
                          src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fdd3eb9ef-b9e6-48ac-824a-66cfd0f39913&w=1200&q=75"
                          alt="img"
                          className="object-cover h-[127px] w-[320px]"
                        />
                        <div className="p-6">
                          <h2 className="text-xl text-gray-800">Tiramisu</h2>
                          <p className="text-[14px] text-slate-500">
                            Savoyardi pechene, m...
                          </p>
                          <button className="w-[160px] h-[40px] mt-3 rounded-3xl text-gray-700 font-normal hover:bg-gray-300">
                            22 000 so'm
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="w-[201px] h-[266px] rounded-2xl overflow-hidden shadow-sm">
                        <img
                          src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Febf7f8ee-0181-4294-9be8-f9241e3cff08&w=1200&q=75"
                          alt="img"
                          className="object-cover h-[127px] w-[320px]"
                        />
                        <div className="p-6">
                          <h2 className="text-xl text-gray-800">Brauni</h2>
                          <p className="text-[14px] text-slate-500">
                            Qora shokolad, yong'o...
                          </p>
                          <button className="w-[160px] h-[40px] mt-3 rounded-3xl text-gray-700 font-normal hover:bg-gray-300">
                            22 000 so'm
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="w-[201px] h-[266px] rounded-2xl overflow-hidden shadow-sm">
                        <img
                          src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1ae33c55-cbd8-4d0a-b9a6-6a7624beca32&w=1200&q=75"
                          alt="img"
                          className="object-cover h-[127px] w-[320px]"
                        />
                        <div className="p-6">
                          <h2 className="text-xl text-gray-800">
                            San-sebastian
                          </h2>
                          <p className="text-[14px] text-slate-500">
                            Savoyardi kukilari, ma...
                          </p>
                          <button className="w-[160px] h-[40px] mt-3 rounded-3xl text-gray-700 font-normal hover:bg-gray-300">
                            22 000 so'm
                          </button>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              {/* recomend */}
            </div>
          </div>

          {/* scroll */}
        </div>
        {/* buttons */}
        <div className="md:mt-4 flex space-x-24 md:ml-[300px] ml-4 mt-3">
          <div className="w-[140px] h-[43px] flex space-x-9 p-2 border-[1px] border-purple-800 rounded-3xl">
            <button
              className="text-3xl ml-4 relative bottom-2"
              onClick={decrementCount}
            >
              -
            </button>
            <h2 className="text-xl relative right-2">{count}</h2>
            <button
              className="text-3xl right-6 relative bottom-[7px]"
              onClick={incrementCount}
            >
              +
            </button>
          </div>

          <button
            className="p-2 bg-[#51267d] text-white rounded-full px-4"
            onClick={(e) => {
              handleAddToCart(item);
              (e) => e.stopPropagation();
            }}
          >
            Qo'shish
          </button>
        </div>
      </div>
    </div>
  );
};
