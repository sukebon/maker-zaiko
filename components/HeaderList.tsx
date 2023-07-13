"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
export const HeaderList: FC = () => {
  const pathname = usePathname();
  const buttonEL = (title: string, link: string) => (
    <button
      style={{ backgroundColor: pathname === link ? "rgb(29 78 216)" : "" }}
      className="bg-transparent hover:bg-blue-700 text-sm text-white font-semibold hover:text-white py-1 px-4 border border-white-500 rounded"
    >
      {title}
    </button>
  );
  const list = [
    { title: "大丸白衣", link: "/" },
    { title: "ALPHA PIER　FELLOWS", link: "/chikuma" },
    { title: "KIRAKU", link: "/tombow" },
    { title: "UNITE/Arbe", link: "/chitose" },
  ];

  return (
    <>
      {list.map(({ title, link }, index) => (
        <Link key={index} href={link}>
          {buttonEL(title, link)}
        </Link>
      ))}
    </>
  );
};
