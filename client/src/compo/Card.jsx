import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import axios from "axios";
import { Loader } from '../compo/Loader'

export const Card = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fff");
  const [visible, setVisible] = useState("invisible");

  const search = props.searchVal;
  // console.log(props.searchVal);
  const handleColor = () =>{
    if(color === "#fff"){
      setColor("yellow") 
    }
    else{
      setColor("#fff")
    }
  }

    useEffect(() => {
      if(props.val === 0 && props.searchVal === ""){

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
      if(props.val === 1 && props.searchVal === ""){
        const fetchMessageStatus = async () => {
          const u_id = localStorage.getItem("id");
          // console.log(u_id)
          try {
            setLoading(true);
            const response = await fetch('http://localhost:3002/api/auth/getallrecipebyid', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ u_id }),
            });
            const result = await response.json();
            setData(result.message);
            // console.log(data);

            if(!response){
              console.log("not fetching")
            }
          setLoading(false);
          } catch (err) {
            // setStatus(null);
            console.error(err);
          }
        };
  
        fetchMessageStatus();
      }
      if( props.searchVal !== ""){
        const handleSearch = async () => {
          debugger;
         
          const name = String(search);
      
          try {
            // setLoading(true);
            const response = await fetch('http://localhost:3002/api/auth/searchrecipebyname', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({name}),
            });
            const result = await response.json();
            setData(result.message);
            // console.log(result.message);
      
            if(!response){
              console.log("not fetching")
            }
          // setLoading(false);
          } catch (err) {
            // setStatus(null);
            console.error(err);
          }
        };
  
        handleSearch();
      }
    }, [props.val,props.searchVal]);
  
    if(loading){
      return(
        <span><Loader/></span>
      )
    }

  return (
    <>
      {Array.isArray(data) &&
        data.map((item) => (
            <div className="flex flex-col rounded-xl w-3/4  m-8 relative ">
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
                  <Star fill={color} onClick={()=>handleColor()} className=" absolute top-2 right-3 z-50" onMouseLeave={()=>setVisible("invisible")} onMouseEnter={()=>setVisible("visible")} strokeWidth={0} />
                  <div className={`${visible} absolute top-6 w-24 text-center right-8 bg-white rounded-b-xl
                   border-gray-300 border-2 rounded-l-xl text-gray-500 shadow-2xl shadow-gray-500  text-xs font-mono`}>
                    Add to Favourite!
                  </div>
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
