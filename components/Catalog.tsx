/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  catalogData: any;
};

export const Catalog: FC<Props> = ({ catalogData }) => {
  return (
    <div className="w-11/12 lg:w-[calc(80px)]"> 
      <Link href={catalogData?.link} target="_blank" rel="noopener noreferrer">
        <img
          src={catalogData?.image?.url}
          max-width="80px"
          max-height={200}
          alt={catalogData?.maker}
        />
      </Link>
    </div>
  );
};
