import React from "react";
import img from "./fav.png";
import { Star } from "lucide-react";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="w-screen h-14  border-black bg-gray-800">
        <div className="relative   border-black">
          <div className="  border-black w-52 h-14 ">
            <div className="absolute left-3 top-3 w-14">
              <img src={img} alt="img" />
            </div>
            <div className="absolute top-3 left-14">
              <div className="text-2xl text-yellow-500 font-mono cursor-pointer">
                <a href="/">Recipe.Com</a>
              </div>
            </div>
          </div>

          <div className="w-3/6 h-14 absolute top-0 right-0  border-black ">
            <Star
              className="text-yellow-500 absolute top-5 left-3.5 cursor-pointer"
              size={17}
            />
            <Link
              className="text-lg font-serif absolute top-4 left-8 underline cursor-pointer text-yellow-500"
              to="/favPage"
            >
              Favorite
            </Link>
            
            <input
              className="absolute right-3 top-2.5 w-5/6 h-10 rounded-xl text-lg font-semibold pl-10 border-2 border-black "
              type="text"
              placeholder="Search recipes"
            />
            <button className="absolute right-6 bottom-2.5 font-semibold text-lg  px-4 py-0.5  rounded-lg text-white bg-gray-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5">
              Search
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
