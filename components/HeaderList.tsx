import Link from "next/link";
import React, { FC } from "react";
export const HeaderList: FC = () => {
  const buttonEL = (title: string, link: string) => (
    <Link href={link}>
      <button className="bg-transparent hover:bg-blue-500 text-sm text-white font-semibold hover:text-white py-1 px-4 border border-white-500 hover:border-transparent rounded">
        {title}
      </button>
    </Link>
  );
  const list = [
    { title: "大丸白衣", link: "/" },
    { title: "ALPHA PIER　FELLOWS", link: "/chikuma" },
    { title: "KIRAKU", link: "/tombow" },
  ];

  return <>{list.map(({ title, link }) => buttonEL(title, link))}</>;
};
