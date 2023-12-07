"use client";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CatalogArea: FC<Props> = ({ children }) => {
  return (
    <div className="mt-6 w-full sm:w-[calc(300px)] lg:w-auto">
      <div className="flex flex-col lg:flex-row gap-6 py-6 items-center justify-end">
        {children}
      </div>
    </div>
  );
};
