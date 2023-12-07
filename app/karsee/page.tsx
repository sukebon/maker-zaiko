import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import KarseeArea from "./karsee-area";

const getCatalog = async (id: string) => {
  const res = await axios.get(
    `https://daimaru-hakui.microcms.io/api/v1/catalog/${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY
      },
    }
  );
  return res.data;
};

export default async function Tombow() {
  const catalogEnjoySS = await getCatalog("cgczlza8z");
  const catalogEnjoyAW = await getCatalog("53qaflfz1");
  const catalogNoir = await getCatalog("avp-i33uhr");
  const catalogCarean = await getCatalog("f653gvyki");
  const catalogHeartGreen= await getCatalog("ppud4o2fi");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <KarseeArea />
      <CatalogArea>
        <Catalog catalogData={catalogEnjoySS} />
        <Catalog catalogData={catalogEnjoyAW} />
        <Catalog catalogData={catalogNoir} />
        <Catalog catalogData={catalogCarean} />
        <Catalog catalogData={catalogHeartGreen} />
      </CatalogArea>
    </main>
  );
}