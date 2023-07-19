import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import Link from "next/link";
import React from "react";

export default async function Toms() {
  const getCatalog = async (id: string) => {
    const res = await axios.get(
      `https://daimaru-hakui.microcms.io/api/v1/catalog/${id}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": "3c62454d-9a98-4e3d-aee1-d337c3bbdf7e",
        },
      }
    );
    return res.data;
  };

  const catalog = await getCatalog("u3mn6bmy_ss");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <Link
        href="https://tomsj.com/brand/stock/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mt-12 p-6 text-white rounded-md bg-blue-800 hover:bg-blue-700 cursor-pointer">
          Printstar 在庫
        </div>
      </Link>
      <CatalogArea>
        <Catalog catalogData={catalog} />
      </CatalogArea>
    </main>
  );
}
