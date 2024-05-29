// StickyMenu.js
import React from "react";

function StickyMenu() {
  return (
    <div className="sticky top-0 bg-white shadow">
      <ul className="flex p-4">
        <li className="mr-4 cursor-pointer">Home</li>
        <li className="mr-4 cursor-pointer">About</li>
        <li className="mr-4 cursor-pointer">Contact</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
}

export default StickyMenu;
