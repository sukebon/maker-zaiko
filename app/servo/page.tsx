import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import ServoArea from "./Servo-area";
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
  const data = await prisma.servo.findMany();
  return data;
};

export default async function Chitose() {
  const catalogServo = await getCatalog("slnkyzgbe");
  const catalogFood = await getCatalog("ou46diqi9");
  const catalogMedical = await getCatalog("7k0eahxnu");
  const catalogGrowSS = await getCatalog("sgpxjslir");
  const catalogGrowAW = await getCatalog("zp_lkbf3a");
  const catalogLand = await getCatalog("abqpa4-l0");

  const data = await getData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ServoArea data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogServo} />
        <Catalog catalogData={catalogFood} />
        <Catalog catalogData={catalogMedical} />
        <Catalog catalogData={catalogGrowSS} />
        <Catalog catalogData={catalogGrowAW} />
        <Catalog catalogData={catalogLand} />
      </CatalogArea>
    </main>
  );
}
