import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import TombowArea from "./components/tombow-area";

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
  const catalog = await getCatalog("pecptt28f");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <TombowArea/>
      <CatalogArea>
        <Catalog catalogData={catalog} />
      </CatalogArea>
    </main>
  );
}