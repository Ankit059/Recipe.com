import React from "react";
import food from './f01.jfif'

export const Card = () => {
  return (
    <>
      <div className="flex flex-col  rounded-xl w-80 h-80 m-8  ">
        <div className="border-2 flex justify-center items-center h-60 w-80  rounded-t-xl hover:overflow-visible  rounded-t-xl bg-gray-900  cursor-pointer">
          <img src={food} alt="img" className="w-80 h-60 rounded-t-xl border-2 border-black" />
        </div>
        <div className=" flex flex-col border-2 h-20 border-black rounded-b-lg hover:h-2/5">
          <div className=" font-bold font-serif px-2 hover:underline cursor-pointer">Recipe Name :</div>
          <div className="text-xs font-sans overflow-hidden px-2">
            Recipe Description Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Deserunt, delectus! Error vero sint distinctio at iste facere.
            Delectus beatae veniam natus id alias.
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};
