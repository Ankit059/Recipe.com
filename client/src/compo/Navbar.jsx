import React from "react";
import img from "../image/fav.png";
import { Outlet, Link } from "react-router-dom";
import { MonitorUp } from 'lucide-react';

export const Navbar = () => {
  return (
    <>
      <div className="w-screen  h-14 bg-fixed border-black bg-gray-800">
        <div className="relative  border-black">
          <div className=" border-black w-52 h-14 ">
            {/* <div className="absolute left-3 top-3 w-14">
              <img src={img} alt="img" />
            </div> */}
            {/* <div className="absolute top-3 left-14">
              <div className="text-2xl text-yellow-500 font-mono cursor-pointer">
                <a href="/">Recipe.Com</a>
              </div>
            </div> */}
            <div className=" flex mb-5 ">
              <img src={img} className="w-16 h-12 mt-1 ml-2" alt="img" />
              <div className="">
                <h1 className="text-3xl font-serif ml-2 text-yellow-500 cursor-pointer">
                  <Link to="/">Recipe.com</Link>
                </h1>
                <h1 className="text-xs font-serif ml-2 text-yellow-500 ">
                  explore the recipes in it ....
                </h1>
              </div>
            </div>
          </div>

          <div className="w-5/6 h-14 flex justify-end items-center absolute top-0 right-0  border-black ">
          
            <div className="mr-5  ">
              <Link
                className="text-lg font-serif  underline cursor-pointer flex text-yellow-500"
                to="/upload"
              >
               <MonitorUp className="mt-1 mr-1" size={22}/>
               <span>Upload</span>
              </Link>
            </div>
            <div className="mr-5">
              <Link
                className="text-lg font-serif  underline cursor-pointer text-yellow-500"
                to="/favPage"
              >
                Favorite
              </Link>
            </div>
            <div className="mr-5">
              <Link
                className="text-lg font-serif underline cursor-pointer text-yellow-500"
                to="/confirm"
              >
                Logout
              </Link>
            </div>
            <div className="">
              <input
                className=" w-96 h-10 mr-2 rounded-xl text-lg font-semibold pl-4 border-2 border-black "
                type="text"
                placeholder="Search recipes"
              />
              <button className=" font-semibold text-lg px-4 py-0.5 mr-6 rounded-lg text-white bg-gray-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5">
                Search
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
