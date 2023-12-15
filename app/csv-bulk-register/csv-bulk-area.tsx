"use client";
import React, { FC } from "react";
import { useStore } from "@/store";
import LoadingSpinner from "@/components/spinner";
import CsvBulkForm from "./csv-bulk-form";

const CsvBulkArea: FC = () => {
  const isLoading = useStore((state) => state.isLoading);

  return (
    <div className="w-full max-w-[600px] relative">
      <div className="w-full  absolute flex items-center justify-center">
        {isLoading && <LoadingSpinner />}
      </div>
      <CsvBulkForm />
    </div>
  );
};

export default CsvBulkArea;