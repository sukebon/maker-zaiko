import React from "react";
import CsvRegisterArea from "./csv-register-area";

const CsvRegisterPage = async () => {

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 150px)" }}
    >
      <CsvRegisterArea />
    </div>
  );
};

export default CsvRegisterPage;
