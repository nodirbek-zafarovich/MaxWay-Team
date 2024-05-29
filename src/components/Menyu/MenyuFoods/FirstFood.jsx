import React, { useEffect, useState } from "react";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import { Modal } from "./Modal";
import { data } from "./data";  // Assuming data is an array or a JSON object

export const FirstFood = ({ activeMenuItem }) => {
  const [todos, setTodos] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Setting data...");
    setTodos(data);
  }, []);

  const openModal = (card) => {
    console.log("Opening modal for card:", card);
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  console.log("Rendering...");

  const chunkedTodos = todos.reduce((acc, todo, index) => {
    const chunkIndex = Math.floor(index / 6);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(todo);
    return acc;
  }, []);

  return (
    <div>
      {chunkedTodos.map((chunk, index) => (
        <div key={index}>
          {index === 0 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Maxi BOX</h2>}
          {index === 1 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Klab-Sendvich</h2>}
          {index === 2 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Lavash</h2>}
          {index === 3 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Shaurma</h2>}
          {index === 4 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Panini</h2>}
          {index === 5 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Burger</h2>}
          {index === 6 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Donar Kebab</h2>}
          {index === 7 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Hot-Dog</h2>}
          {index === 8 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Gazaklar</h2>}
          {index === 9 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Tamaddilar</h2>}
          {index === 10 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Desertlar</h2>}
          {index === 11 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Ichimliklar</h2>}
          {index === 12 && <h2 className="text-3xl font-bold mt-5 mb-6 ml-1">Souslar</h2>}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {chunk.map((todo) => (
              <div key={todo.id} className="rounded-2xl overflow-hidden shadow-sm">
                <img src={todo.img} alt="img" className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h1 className="font-semibold md:text-xl">{todo.name}</h1>
                  <p className="text-sm text-gray-500">{todo.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <h1 className="font-bold text-lg text-slate-900">{todo.price}</h1>
                      <p className="text-sm text-zinc-900 ml-1">so'm</p>
                    </div>
                    <button onClick={() => openModal(todo)} className="px-4 py-2 bg-purple-900 text-white rounded-3xl mt-2 md:w-[100px]">
                      Qo'shish
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
    </div>
  );
};

export default FirstFood;
