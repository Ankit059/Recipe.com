import React from "react";
import { useState } from "react";
import { MonitorUp } from "lucide-react";

export const Upload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the image file
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center fixed w-screen h-screen ">
        <div className=" mb-6 flex items-center  ">
          <div className="text-4xl flex items-center font-serif text-yellow-600 underline">
            <MonitorUp className="mr-2" size={39} />
            <h1>Upl0@d Y0ur Rec!pe</h1>
          </div>
          
        </div>
        <div className="w-3/4 h-3/4  flex justify-center items-center mb-10">
          <div className="w-2/5 h-3/6 flex bg-red-200 flex-col justify-center items-center border-2 border-red-100 shadow-xl rounded-3xl">
            <h1 className="text-3xl font-serif text-red-600 mb-10">
              Upload Image Of Food Item
            </h1>
            <input
              type="file"
              accept="image/*"
              className="w-52"
              onChange={handleImageChange}
            />
            {image && (
              <img
                src={image}
                alt="Uploaded Preview"
                className="mt-6"
                style={{ width: "300px", height: "auto" }}
              />
            )}
          </div>
          <div className="w-2/5 h-3/6 border-2 border-gray-100 bg-blue-100 shadow-2xl ml-20 rounded-3xl flex justify-center items-center">
            <div>
              <div className="w-full  border-black ">
                <label htmlFor="" className="block text-xl font-serif">
                  Recipe name :
                </label>
                <input
                  type="text"
                  placeholder="Enter your recipe name"
                  className=" w-full p-2 font-sans"
                />
              </div>
              <div className="mt-2 w-96">
                <label htmlFor="" className="block text-xl font-serif">
                  Recipe description :
                </label>
                <textarea
                  type="text"
                  placeholder="Enter your description here..."
                  className=" w-full h-32 p-2 font-sans"
                />
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  type="Submit"
                  className="border-2 border-gray-100 bg-green-400 active:bg-green-600 font-bold w-24 h-10 rounded-lg text-xl "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
