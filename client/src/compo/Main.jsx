import React from "react";
import { Card } from "./Card";
// import axios from 'axios';

export const Main = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col  items-center">
        {/* <div className="h-20  w-screen flex justify-center items-center bg-custom-image">
            <img src={food} className="mt-8 w-10 mr-2" alt="img2" />
          <h1 className="font-bold mt-8 font-serif text-4xl text-green-700 cursor-pointer underline ">
            Rec!pe Finder
          </h1>
        </div> */}
        <div className=" flex space-x-5 mb-5 mt-20">
          <div className="text-3xl font-thin text-yellow-600 cursor-pointer">
            All recipe
          </div>
          <div className="text-3xl font-thin">|</div>
          <div className="text-3xl font-thin text-yellow-600 cursor-pointer">
            My recipe
          </div>
        </div>
        <div className="w-5/6 h-auto  border-gray-400  mt-4">
            <div class="grid grid-cols-3 gap-4">
              <Card />
          </div>
        </div>
      </div>
    </>
  );
};
