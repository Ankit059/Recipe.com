import React from "react";
import img from "../image/fav.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Confirm = () => {

  const navigate = useNavigate();

  const Cancel = () =>{
    navigate("/");
  }

  return (
    <>
      <div className=" relative bg-gray-400 bg-cover bg-center h-screen flex flex-col justify-center items-center">
        <div className=" flex mb-20 ">
          <img src={img} className="w-16" alt="img" />
          <div className="">
            <h1 className="text-4xl font-serif ml-2 ">Recipe.com</h1>
            <h1 className="text-sm font-serif ml-2 text-gray-800 ">
              explore the recipes in recipe.com
            </h1>
          </div>
        </div>
        <div className=" pt-3 w-96 max-w-md px-8 py-0 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Confirm
          </h2>

          <form className="relative">
            <div className=" mb-7 text-center text-xl font-serif">
                Do you want to logout ?
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                //   onClick={onSubmit}
                className="w-2/5 bg-blue-500 mb-8 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              ><Link to="/login">Logout</Link>
                </button>
              <button
                type=""
                  onClick={Cancel}
                className="w-2/5 ml-4 bg-blue-500 mb-8 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                <div>Cancel</div>
              </button>
            </div>
          </form>
        </div>
        {/* <p className=" cursor-pointer absolute top-12 right-28 mt-1 font-semibold text-lg  px-4 py-0.5  rounded-lg text-white bg-blue-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5">Signup</p> */}
      </div>
    </>
  );
};
