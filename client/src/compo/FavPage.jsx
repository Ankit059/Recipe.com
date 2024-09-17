import React from "react";
import { FavCard } from "./FavCard";
import Star from "../image/Star2.png";

export const FavPage = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center  border-black">
        <div className="mt-4 h-20 flex font-serif  border-black">
          <img
            src={Star}
            className="mt-10 w-10 h-10 text-yellow-700 mr-1"
            alt="star"
          />
          <div className="mt-10 text-4xl text-yellow-600 font-bold underline">
            F@vour!tes{" "}
          </div>
          {/* <Link
            to="/"
            className="absolute right-64 top-28 mt-1 font-semibold text-lg  px-4 py-0.5  rounded-lg text-white bg-gray-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5"
          >
            Back
          </Link> */}
        </div>
        <div className="w-5/6 h-auto  border-gray-400  mt-4">
          <div class="grid grid-cols-3 gap-4  ">
            <FavCard val="2"/>
          </div>
        </div>
      </div>
    </>
  );
};
