"use client";
import { links } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div
      className="sticky w-[calc(300px)] bg-blue-900 hidden lg:block"
      style={{ minHeight: "calc(100vh)", top: 0 }}
    >
      <div className="px-5 py-3 text-lg text-white">大丸白衣 WEB在庫</div>
      <div className="flex flex-col gap-2 px-3 mt-3">
        <Link
          className="text-white text-sm cursor-pointer"
          href="https://myuni.vercel.app/catalog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full bg-transparent hover:bg-blue-700 text-sm text-white font-semibold hover:text-white py-1 px-4 border border-white-500 rounded">
            マイユニポータル
          </button>
        </Link>
        {links.map(({ title, link }) => (
          <Link key={title} href={link}>
            <div
              className={`py-1 px-3 text-white rounded hover:bg-blue-700 ${
                pathname === link ? "bg-blue-700" : ""
              }`}
            >
              {title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
