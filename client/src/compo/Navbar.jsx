import React, { useState } from "react";
import img from "../image/fav.png";
import { Outlet, Link } from "react-router-dom";
import { MonitorUp, Utensils, Star  } from 'lucide-react';
import {  UserRound} from 'lucide-react';
// import { performSearch } from '../thunks/searchThunk'
// import { useDispatch } from "react-redux";

export const Navbar = () => {
  
  const [visible,setVisible] = useState("invisible");
  // const dispatch = useDispatch();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(performSearch(val));
  // };

  return (
    <>
      <div className="w-screen  h-14 bg-fixed border-black bg-gray-800" onMouseLeave={()=>setVisible("invisible")}>
        <div className="relative  border-black">
          <div className=" border-black w-52 h-14 ">
            
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
                to="/"
              >
               <Utensils  className="mt-1 mr-1" size={22}/>
               <span>Recipe</span>
              </Link>
            </div>
            <div className="mr-5  ">
              <Link
                className="text-lg font-serif  underline cursor-pointer flex text-yellow-500"
                to="/upload"
              >
               <MonitorUp className="mt-1 mr-1" size={22}/>
               <span>Upload</span>
              </Link>
            </div>
            <div className="mr-10" onMouseLeave={()=>setVisible("invisible")}>
              <Link
                className="text-lg font-serif  underline cursor-pointer flex text-yellow-500"
                to="/favPage"
              >
                <Star className="mt-1 mr-1" size={22}/>
                <span>Favorite</span>
              </Link>
            </div>
            {/* <div className="relative flex justify-center items-center" onMouseLeave={()=>setVisible("invisible")}>
              <input
                className="  w-80 h-10 pr-9 rounded-l-xl text-lg font-semibold pl-4 border-2 border-black "
                type="text"
                onChange={(e)=>setVal(e.target.value)}
                value={val}
                placeholder="Search recipes"
              />
              <CircleX size={22} onClick={()=>setVal("")} fill="gray" color="white" className="cursor-pointer absolute right-16"/>
              <button 
              // onClick={()=>handleSubmit} 
              className=" font-semibold h-9 text-lg px-2 py-0.5 mr-3 rounded-r-xl text-white bg-gray-600  active:bg-gray-700">
                <Search/>
              </button>
            </div> */}
            <div className="mr-2" onMouseLeave={()=>setVisible("invisible")}>
              <span
                className="text-lg font-sans  cursor-pointer flex text-green-500"
              >
               <span>{localStorage.getItem("r_name")}</span>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <button onMouseEnter={()=>setVisible("visible")} className=" font-semibold h-9 text-lg px-2 py-0.5 mr-6 rounded-full
               text-white bg-gray-600  active:bg-gray-700">
                <UserRound/>
              </button>
            </div>
          </div>
          <div className={`${visible} absolute right-8`} onMouseLeave={()=>setVisible("invisible")}>
              <table className="w-28 text-lg font-serif">
                <tr>
                  <td className="bg-blue-200 text-center">{localStorage.getItem("r_name")}</td>
                </tr>
                <tr>
                  <td className="bg-red-500 text-white cursor-pointer text-center underline"><Link to='/confirm' >Logout</Link></td>
                </tr>
              </table>
            </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
