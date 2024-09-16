import React, { useState, useEffect } from "react";

export const SuggestionBar = (props) => {
  const search = props.search;
  const [data, setData] = useState("");
  // const [dataFromChild, setDataFromChild] = useState("");

  const handleData = (item) => {
    props.func(item.r_name);
    // console.log("child ="+data);
  };

  useEffect(() => {
    const handleSearch = async () => {
      debugger;
      const name = String(search);

      if (search !== "") {
        try {
          // setLoading(true);
          const response = await fetch(
            "http://localhost:3002/api/auth/searchrecipebyname",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name }),
            }
          );
          const result = await response.json();
          setData(result.message);
          console.log(result.message);

          if (!response) {
            console.log("not fetching");
          }
          // setLoading(false);
        } catch (err) {
          // setStatus(null);
          console.error(err);
        }
      } else {
        setData("");
      }
    };
    handleSearch();
  }, [props.search]);

  return (
    <div className="relative">
      {Array.isArray(data) &&
        data.map((item) => (
          <div
          onClick={()=>handleData(item)}
          key={item._id}
            className={` flex border-2 border-gray-200 w-80 rounded-md h-8 bg-gray-100`}
          >
            <img src={item.r_img} className="w-8" alt="img" />
            <h1 className="font-serif ml-3 text-lg text-blue-700">
              {item.r_name}
            </h1>
          </div>
        ))}
      
    </div>
  );
};
