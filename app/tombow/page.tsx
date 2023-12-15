import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import TombowArea from "./tombow-area";
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
  const data = await prisma.tombow.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};


export default async function Tombow() {
  const catalog = await getCatalog("pecptt28f");
  const data = await getData();

  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <TombowArea data={data} />
      <CatalogArea>
        <Catalog catalogData={catalog} />
      </CatalogArea>
    </main>
  );
}
