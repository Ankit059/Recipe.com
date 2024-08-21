import React, { useState } from "react";
import img from "./fav.png";
import { Link } from "react-router-dom";

export const ForgetPass = () => {

    const [userId, setUserId ] = useState("");
    const [password, setPassword ] = useState("");

  return (
    <>
      <div className=" relative bg-gray-400 bg-cover bg-center h-screen flex flex-col justify-center items-center">
        <div className=" flex mb-8 ">
          <img src={img} className="w-16" alt="img" />
          <div className="">
            <h1 className="text-4xl font-serif ml-2 ">Recipe.com</h1>
            <h1 className="text-sm font-serif ml-2 text-gray-800 ">
              explore the recipes in recipe.com
            </h1>
          </div>
        </div>
        <div className=" pt-3 w-full max-w-md px-8 py-0 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>

          <form className="relative">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="userId"
              >
                User Id
              </label>
              <input
                type="userId"
                id="userId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
            //   onClick={onSubmit}
              className="w-full bg-blue-500 mb-8 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
            <div className="absolute bottom-4 left-8 text-xs text-center font-sans">If you know your password <Link to="/login" className="text-blue-500 underline ml-1 text-xs cursor-pointer">Login</Link>  and for sign up <Link to="/signup" className="text-blue-500 underline ml-1 text-xs cursor-pointer">Sign up</Link></div>
          </form>
        </div>
          {/* <p className=" cursor-pointer absolute top-12 right-28 mt-1 font-semibold text-lg  px-4 py-0.5  rounded-lg text-white bg-blue-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5">Signup</p> */}
      </div>
    </>
  );
};
