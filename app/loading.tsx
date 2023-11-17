import React from "react";

const Loading = () => {
  return (
    <div  className="fixed t-0 l-0 h-screen w-full flex justify-center items-center">
      <div className="flex w-28 justify-between">
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
