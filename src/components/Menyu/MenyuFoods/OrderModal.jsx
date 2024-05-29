import React from "react";

export const OrderModal = ({ isOpen, onClose, title, description, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
        <img
          src={imageSrc}
          alt="img"
          className="object-cover h-48 w-full mb-4"
        />
        <h2 className="text-xl text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
