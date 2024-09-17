import React from 'react';
import ReactLoading from "react-loading";

export const Loader = () => {
  return (
    <>
        <div className="flex justify-center items-center h-96 border-2 border-black">
            <ReactLoading
                type="spinningBubbles"
                color="#0000FF"
                height={100}
                width={50}
            />
        </div>
    </>
  )
}
