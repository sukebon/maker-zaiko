"use client"
import React from "react";
import CsvRegisterForm from "./csv-register-form";
import { useFetch } from "../hooks/useFetch";

const CsvRegisterArea = () => {
  const { data } = useFetch({
    url: "/api/selery/sqlite",
    queryKey: "selery",
  });
  console.log(data)
  return (
    <div>
      <CsvRegisterForm />
    </div>
  );
};

export default CsvRegisterArea;
