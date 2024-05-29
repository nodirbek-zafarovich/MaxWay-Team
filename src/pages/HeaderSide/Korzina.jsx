import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateTotalPrice } from "../../actions";
import CloseIcon from "@mui/icons-material/Close";
import { removeFromCart } from "../../actions";

export const Korzina = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [totalPrice, setTotalPrice] = useState(0); // State for total price
  const minimumOrderPrice = 4000;
  const [itemCounts, setItemCounts] = useState({});

  // Function to handle incrementing count for an item
  const incrementCount = (itemId) => {
    const updatedCounts = { ...itemCounts };
    updatedCounts[itemId] = (updatedCounts[itemId] || 0) + 1;
    setItemCounts(updatedCounts);

    // Calculate the price of the item being incremented
    const itemPrice =
      cartItems.find((item) => item.id === itemId)?.productPrice || 0;

    // Add the price of the item to the total price
    setTotalPrice((prevTotalPrice) => prevTotalPrice + itemPrice);
  };

  // Function to handle decrementing count for an item
  const decrementCount = (itemId) => {
    if (itemCounts[itemId] > 1) {
      const updatedCounts = { ...itemCounts };
      updatedCounts[itemId] -= 1;
      setItemCounts(updatedCounts);

      // Calculate the price of the item being decremented
      const itemPrice =
        cartItems.find((item) => item.id === itemId)?.productPrice || 0;

      // Subtract the price of the item from the total price
      setTotalPrice((prevTotalPrice) => prevTotalPrice - itemPrice);
    }
  };

  const handleCheckout = () => {
    // Your checkout logic here
  };

  useEffect(() => {
    // Update total price whenever itemCounts changes
    let newTotalPrice = 0;
    cartItems.forEach((item) => {
      const itemPrice = item.productPrice * (itemCounts[item.id] || 1);
      newTotalPrice += itemPrice;
    });
    setTotalPrice(newTotalPrice + 2000);
  }, [cartItems, itemCounts]);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeleteItem = () => {
    console.log("Deleting item:", selectedItem); // Check selectedItem
    dispatch(removeFromCart(selectedItem.id)); // Dispatch action to remove item from cart
    setShowModal(false); // Close the modal
  };

  return (
    <div className="mt-8">
      <h1 className="font-bold md:text-4xl text-[28px]">Savatcha</h1>

      <div className="md:flex md:space-x-12">
        <ul className="md:mt-10">
          <div className="md:w-[780px] w-[350px] h-[165px] shadow-sm rounded-2xl p-4 flex space-x-4 pt-12 pl-7">
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe876e478-efea-4992-a7ab-0b5cdb650582&w=1200&q=75"
              alt="img"
              className="w-[90px] h-[90px] object-cover rounded-2xl"
            />
            <div className="relative bottom-3 md:top-0">
              <p className="md:text-xl text-[17px] w-full font-semibold mt-6">
                Kraft packet
              </p>
              <p className="font-bold md:hidden block text-gray-800 mt-2">
                2 000 so'm
              </p>
            </div>

            <div className="flex space-x-16 relative md:left-[176px] left-5">
              <div className="md:w-[140px] md:h-[40px] w-[80px] h-[36px] relative flex md:space-x-9 space-x-4 p-2 border-[1px] mt-5 border-purple-800 rounded-3xl">
                <button
                  className="md:text-3xl text-2xl md:ml-4 ml-2 relative bottom-2"
                  onClick={decrementCount}
                >
                  -
                </button>
                <h2 className="md:text-xl relative md:right-2 right-3 bottom-[2px]">
                  {count}
                </h2>
                <button
                  className="md:text-3xl text-2xl right-6 relative bottom-[7px]"
                  onClick={incrementCount}
                >
                  +
                </button>
              </div>

              <p className="font-bold hidden md:block md:text-xl text-gray-800 mt-7">
                2 000 so'm
              </p>
            </div>
          </div>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="md:w-[780px] w-[350px]md:h-[150px] h-[170px] shadow-sm rounded-2xl p-4 flex pt-6 pl-7">
                <div className="flex space-x-4 w-[56%]">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-[90px] md:h-[90px] h-[120px] object-cover rounded-2xl"
                  />
                  <div>
                    <p className="md:text-xl">{item.productName}</p>
                    <p className="text-slate-500 mt-1 ml-2 w-[70%]">
                      {item.productTitle}
                    </p>

                    <div className="flex justify-between gap-20 md:hidden relative bottom-3">
                      <div>
                        <p className="font-bold text-[18px] w-[180%] text-gray-800 mt-7">
                          {item.productPrice} so'm
                        </p>
                      </div>
                      <div className="md:w-[140px] w-[78px] h-[38px] relative flex md:space-x-9 space-x-4 p-2 border-[1px] mt-5 border-purple-800 rounded-3xl">
                        <button
                          className="md:text-3xl text-2xl md:ml-4 ml-2 relative bottom-2"
                          onClick={() => {
                            if (itemCounts[item.id] <= 1) {
                              openModal(item);
                            } else {
                              decrementCount(item.id);
                            }
                          }}
                        >
                          -
                        </button>

                        <h2 className="md:text-xl relative right-2 bottom-[2px]">
                          {itemCounts[item.id] || 1}{" "}
                        </h2>
                        <button
                          className="md:text-3xl text-2xl md:right-6 right-4 relative bottom-[7px]"
                          onClick={() => incrementCount(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:flex justify-between gap-14 hidden">
                  <div className="w-[140px] h-[40px] relative flex space-x-9 p-2 border-[1px] mt-5 border-purple-800 rounded-3xl">
                    <button
                      className="text-3xl ml-4 relative bottom-2"
                      onClick={() => {
                        if (itemCounts[item.id] <= 1) {
                          openModal(item);
                        } else {
                          decrementCount(item.id);
                        }
                      }}
                    >
                      -
                    </button>

                    {/* <h2 className="text-xl relative right-2 bottom-[2px]">
                      {count}
                    </h2> */}
                    <h2 className="text-xl relative right-2 bottom-[2px]">
                      {itemCounts[item.id] || 1}{" "}
                      {/* Use count from state or default to 1 */}
                    </h2>
                    <button
                      className="text-3xl right-6 relative bottom-[7px]"
                      onClick={() => incrementCount(item.id)} // Call incrementCount with item id
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="font-bold text-[18px] text-gray-800 mt-7">
                      {item.productPrice} so'm
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Modal Page */}

        {showModal && selectedItem && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl w-[450px] h-[280px]">
              <div className="relative left-[360px]">
                <CloseIcon />
              </div>
              <h1 className="font-semibold text-2xl text-center text-gray-900 mt-1">
                Diqqat
              </h1>
              <p className="font-normal text-gray-400 text-xl mt-5 text-center">
                Haqiqatan ham ushbu mahsulotni oʻchirib tashlamoqchimisiz?
              </p>
              <div className="mt-7 flex gap-5 ml-5">
                <button
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-3xl w-[190px] h-[50px]"
                  onClick={closeModal}
                >
                  Yo'q
                </button>

                <button
                  className="bg-purple-900 font-bold text-white w-[190px] h-[50px] px-4 py-2 rounded-3xl"
                  onClick={() => handleDeleteItem(selectedItem)}
                >
                  Ha
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Page end */}

        <div className="md:w-[380px] h-[310px] w-[360px] rounded-2xl shadow-md p-6 mt-10">
          <h1 className="text-2xl font-bold">Umumiy</h1>

          <div className="flex items-start justify-between mt-3">
            <h2 className="text-xl text-gray-800">Mahsulotlar</h2>
            <p className="text-xl text-gray-800">{totalPrice} so'm</p>
          </div>
          <div className="flex items-start justify-between mt-3">
            <h2 className="text-xl text-gray-800">Yetkazib berish</h2>
            <p className="text-xl text-gray-800">0 so'm</p>
          </div>

          {totalPrice >= minimumOrderPrice ? (
            <React.Fragment>
              <div className="w-[330px] mt-4 h-[1px] bg-slate-400"></div>
              <div className="flex items-start justify-between mt-3">
                <h2 className="text-xl text-gray-800">To'lash uchun</h2>
                <p className="text-xl text-gray-800">{totalPrice} so'm</p>
              </div>
              <button
                className="w-[330px] h-[50px] rounded-3xl mt-4 font-semibold bg-purple-700 text-white"
                onClick={handleCheckout}
              >
                To'lov sahifasiga o'tish
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="w-[330px] mt-4 h-[1px] bg-slate-400"></div>
              <div className="flex items-start justify-between mt-3">
                <h2 className="text-xl text-gray-800">To'lash uchun</h2>
                <p className="text-xl text-gray-800">{totalPrice} so'm</p>
              </div>
              <button
                className="w-[330px] h-[50px] rounded-3xl mt-4 font-semibold bg-slate-300 text-slate-400"
                disabled
              >
                To'lov sahifasiga o'tish
              </button>
              <p className="text-red-600 text-[13px] ml-5 mt-1">
                Eng kam buyurtma narxi 40 000 so'm bo'lishi kerak
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
