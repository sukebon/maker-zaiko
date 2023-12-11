"use client";
import React, { FC } from "react";
import CsvRegisterForm from "./csv-register-form";
import { useStore } from "@/store";
import LoadingSpinner from "@/components/spinner";

const CsvRegisterArea: FC = () => {
  const isLoading = useStore((state) => state.isLoading);

  return (
    <div className="relative">
      <div className="w-full  absolute flex items-center justify-center">
        {isLoading && <LoadingSpinner />}
      </div>
      <CsvRegisterForm />
    </div>
  );
};

export default CsvRegisterArea;
