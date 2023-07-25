import React from "react";

const Loading = () => {
  return (
    <div style={{height:"calc(100vh - 200px)"}} className="w-full flex justify-center items-center">
      <div className="flex w-28 justify-between">
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
