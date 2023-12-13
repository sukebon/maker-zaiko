import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import ChikumaArea from "./chikuma-area";
import { prisma } from "@/libs/prisma";

const getCatalog = async (id: string) => {
  const res = await axios.get(
    `https://daimaru-hakui.microcms.io/api/v1/catalog/${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
      },
    }
  );
  return res.data;
};

const getData = async () => {
  const data = await prisma.chikuma.findMany({
    orderBy: {
      row: "asc",
    },where :{
      productNumber: {
        notIn:[""]
      }
    }
  });
  return data;
};

export default async function Chikuma() {
  const catalogSS = await getCatalog("easbbej1r");
  const catalogAW = await getCatalog("8twgzvvvs");
  const catalogFL = await getCatalog("1hfh1ntic");

  const data = await getData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ChikumaArea data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSS} />
        <Catalog catalogData={catalogAW} />
        <Catalog catalogData={catalogFL} />
      </CatalogArea>
    </main>
  );
}
