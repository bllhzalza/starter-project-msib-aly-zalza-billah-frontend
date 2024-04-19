import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-rose-300 px-4 py-3 flex ml-48 justify-end">
      <button className="flex justify-center items-center rounded shadow w-16 h-7 bg-red-500 " type="submit">
        <span className="font-semibold text-white text-sm">Logout</span>
        </button>
    </nav >
  );
};
export default Navbar;