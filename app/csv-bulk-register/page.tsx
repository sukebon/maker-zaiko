import React from "react";
import CsvBulkArea from "./csv-bulk-area";

const CsvBulkPage = async () => {

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 150px)" }}
    >
        <CsvBulkArea />
    </div>
  );
};

export default CsvBulkPage;