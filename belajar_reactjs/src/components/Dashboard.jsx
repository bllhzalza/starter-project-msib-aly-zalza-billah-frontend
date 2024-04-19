import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full flex items-center justify-center p-10 lg:flex">
        <div className="text-wrap py-5 px-4 w-64 h-80 bg-rose-300 rounded shadow">
          <form action="">
            <div className="px-3 justify-center items-center">
              <div className="w-full justify-center items-center flex">
                <FaRegUserCircle className="flex h-28 w-28"></FaRegUserCircle>
              </div>
              <input
                className="mt-2 h-7 rounded w-full text-sm bg-white px-2 flex"
                type="text"
                placeholder="Fullname"
                required
                value="zalzabillah"
                disabled
              ></input>

              <input
                className="mt-1 h-7 rounded w-full text-sm bg-white px-2 flex"
                type="text"
                placeholder="Email"
                required
                value="zalzabilah20000@gmail.com"
                disabled
              ></input>

              <input
                className="my-1 h-7 rounded w-full text-sm bg-white px-2 flex"
                type="text"
                placeholder="Phone Number"
                required
                value="088912345678"
                disabled
              ></input>

              <input
                className="my-1 h-7 rounded w-full text-sm flex px-2 bg-white"
                type="text"
                placeholder="Password"
                required
                value="******"
                disabled
              ></input>

              <button
                className="mt-2 text-white font-semibold rounded justify-center text-sm items-center bg-red-500 w-full h-7 flex"
                type="submit"
              >
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
