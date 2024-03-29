import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import DaimaruArea from "./Daimaru-area";

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
  const catalog1 = await getCatalog("liraxh-nnw");
  const catalog2 = await getCatalog("4szieql4_v");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <DaimaruArea />
      <CatalogArea>
        <Catalog catalogData={catalog1} />
        <Catalog catalogData={catalog2} />
      </CatalogArea>
    </main>
  );
}
