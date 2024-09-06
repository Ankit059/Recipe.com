import React, { useState } from "react";
import { Card } from "./Card";
// import { Footer } from '../compo/Footer'
// import axios from 'axios';

export const Main = () => {

  const[val,setVal] = useState(0);
  const[style0,setStyle0] = useState("text-3xl");
  const[style1,setStyle1] = useState("text-2xl");

  return (
    <>
      <div className="w-screen h-auto flex flex-col  items-center">
        <div className=" flex items-center space-x-5 mb-5 mt-20">
          <div className={`${style0}  font-thin text-yellow-600
           cursor-pointer`} onClick={()=>{setVal(0);setStyle1("text-2xl");setStyle0("text-3xl");}}>
            All recipe
          </div>
          <div className="text-3xl font-thin">|</div>
          <div className={`${style1} font-thin text-yellow-600 cursor-pointer`} onClick={()=>{setVal(1);setStyle0("text-2xl");setStyle1("text-3xl")}} >
            My recipe
          </div>
        </div>
        <div className="w-5/6 h-auto border-gray-400  mt-4">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <Card val={val}/>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};
