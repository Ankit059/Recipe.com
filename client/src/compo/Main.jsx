import React from "react";
import { Card} from "./Card";
import food from './food.png';
import img from "./fav.png";


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
        <div className=" flex mb-5 mt-20">
          <img src={img} className="w-16" alt="img" />
          <div className="">
            <h1 className="text-4xl font-serif ml-2 ">Recipe.com</h1>
            <h1 className="text-sm font-serif ml-2 text-gray-800 ">
              explore the recipes in recipe.com
            </h1>
          </div>
        </div>
        <div className="w-4/6 h-auto  border-gray-400  mt-4">
          <div class="grid grid-cols-3 gap-4  ">
            <div class="">
              <Card />
            </div>

            <div class=" ">
              <Card />
            </div>
            <div class=" ">
              <Card />
            </div>
            <div class=" ">
              <Card />
            </div>
            <div class="">
              <Card />
            </div>

            <div class=" ">
              <Card />
            </div>
            <div class=" ">
              <Card />
            </div>
            <div class=" ">
              <Card />
            </div>
            <div class="  ">
              <Card />
            </div>
            <div class="  ">
              <Card />
            </div>
            <div class="  ">
              <Card />
            </div>
            <div class="  ">
              <Card />
            </div>
            <div class="  ">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
