import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import BonmaxArea from "./bonmax-area";
import { PrismaClient } from "@prisma/client";

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
  const prisma = new PrismaClient();
  const data = await prisma.bonmax.findMany();
  return data;
};

export default async function Bonmax() {
  const catalogFaceMix = await getCatalog("lh4sypndh");
  const catalogOfficeSS = await getCatalog("vcxclo8y7");
  const catalogOfficeAW = await getCatalog("kt05evuki");
  const catalogLifemax = await getCatalog("qx2zikli7");
  const catalogRocky = await getCatalog("vlatytlxs");

  const data = await getData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <BonmaxArea data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogFaceMix} />
        <Catalog catalogData={catalogOfficeSS} />
        <Catalog catalogData={catalogOfficeAW} />
        <Catalog catalogData={catalogLifemax} />
        <Catalog catalogData={catalogRocky} />
      </CatalogArea>
    </main>
  );
}
