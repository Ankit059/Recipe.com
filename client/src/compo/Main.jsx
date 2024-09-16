import React, { useState } from "react";
import { Card } from "./Card";
import { CircleX } from "lucide-react";
import { SuggestionBar } from "./SuggestionBar";

export const Main = () => {
  // debugger
  const [val, setVal] = useState(0);
  const [search, setSearch] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [style0, setStyle0] = useState("text-3xl");
  const [style1, setStyle1] = useState("text-2xl");
  const [visible,setVisible] = useState("visible");
  // const [dataFromChild, setDataFromChild] = useState("");

  // Callback function that will be passed to the child
  const handleDataFromChild = (data) => {
    setSearch(data);
    setVisible("invisible");
    console.log("main = "+data);
  };

  const performSearch = () => {
    setSearchVal(search);
    console.log(search);
  };

  return (
    <>
      <div className="bg-custom-image bg-cover bg-center h-screen">
        <div className="w-screen h-auto flex flex-col  items-center">
          <div className=" flex items-center justify-center space-x-5 bg-red-500 w-screen h-12 mb-5 mt-20">
            <div
              className={`${style0}  font-thin text-white
           cursor-pointer`}
              onClick={() => {
                setVal(0);
                setStyle1("text-2xl");
                setStyle0("text-3xl");
              }}
            >
              <h1 className="cursor-pointers font-mono">All recipe</h1>
            </div>
            <div className="text-4xl mb-2 font-thin text-white">|</div>
            <div
              className={`${style1} font-thin text-white cursor-pointer`}
              onClick={() => {
                setVal(1);
                setStyle0("text-2xl");
                setStyle1("text-3xl");
              }}
            >
              <h1 className="cursor-pointer font-mono">My recipe</h1>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center my-3">
            <div className="">
              <input
                className="  w-96 h-10 pr-9 rounded-l-xl text-lg font-semibold pl-4 border-2 border-gray-500 "
                type="text"
                onChange={(e) => {setSearch(e.target.value);setVisible("visible")}}
                value={search}
                placeholder="Search recipes"
              />
              <CircleX
                size={25}
                onClick={() => setSearch("")}
                fill="gray"
                color="white"
                className="cursor-pointer absolute right-24 top-2"
              />
              <button
                onClick={performSearch}
                className=" font-semibold h-10 w-20  text-xl px-2 py-0.5 mr-3 rounded-r-xl text-white bg-gray-600  active:bg-gray-700"
              >
                Search
              </button>
            </div>
            <div className={` ${visible} z-20 absolute right-32 ml-10 top-10 cursor-pointer`}>
              <SuggestionBar search={search} func = {handleDataFromChild} />
            </div>
          </div>

          <div className="w-5/6 h-auto border-gray-400  mt-4">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <Card val={val} searchVal={searchVal}  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
