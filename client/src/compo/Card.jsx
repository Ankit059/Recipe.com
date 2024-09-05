import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Card = (props) => {
  const [data, setData] = useState(null);
  // console.log(props.val)

  
    useEffect(() => {
      if(props.val === 0){
        const fetchMessageStatus = async () => {
          try {
            const response = await axios.get(
              `http://localhost:3002/api/auth/getallrecipe`
            );
            setData(response.data.message);
            // console.log(response.data.message.r_name)
            // const R_name = response.data.message[0].r_name;
            // setError(null);
          } catch (err) {
            // setStatus(null);
            console.error(err);
          }
        };
  
        fetchMessageStatus();
      }
      else{
        const fetchMessageStatus = async () => {
          const u_id = localStorage.getItem("id");
          // console.log(u_id)
          try {
            const response = await fetch('http://localhost:3002/api/auth/getallrecipebyid', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ u_id }),
            });
            const result = await response.json();
            setData(result.message);
            console.log(data);

            if(!response){
              console.log("not fetching")
            }
          } catch (err) {
            // setStatus(null);
            console.error(err);
          }
        };
  
        fetchMessageStatus();
      }
    }, []);
  
 

  return (
    <>
      {Array.isArray(data) &&
        data.map((item) => (
            <div className="flex flex-col rounded-xl w-3/4  m-8  ">
              <Link
                to="/description"
                onClick={()=>{localStorage.setItem("name",item.r_name);
                  localStorage.setItem("img",item.r_img);
                  localStorage.setItem("desc",item.r_desc);
                }}
                className="border-2 flex justify-center items-center h-60 w-full  rounded-t-xl hover:overflow-visible bg-gray-900  cursor-pointer"
              >
                <img
                  src={item.r_img}
                  alt="img"
                  className="w-full h-full rounded-t-xl border-2 border-black"
                />
              </Link>
              <div className=" flex flex-col border-2 h-20 border-black rounded-b-lg ">
                <div className=" font-bold font-serif px-2 hover:underline cursor-pointer">
                  <Link to="/description" onClick={()=>{localStorage.setItem("name",item.r_name);
                    localStorage.setItem("img",item.r_img);
                    localStorage.setItem("desc",item.r_desc);
                  }}>Recipe Name :</Link>
                  <span className=""> {item.r_name}</span>
                </div>
                <div className="text-xs font-sans overflow-hidden px-2">
                  {item.r_desc}
                </div>
                <div className=""></div>
              </div>
            </div>

        ))}
    </>
  );
};
