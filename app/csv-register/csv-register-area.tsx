"use client";
import React, { FC, useEffect } from "react";
import CsvRegisterForm from "./csv-register-form";

type Props = {
  data: any;
};

const CsvRegisterArea: FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <div>
      <CsvRegisterForm />
    </div>
  );
};

export default CsvRegisterArea;
