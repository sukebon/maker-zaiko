"use client";
import React, { FC } from "react";
import { HeaderDrawer } from "./HeaderDrawer";
import { signOut, useSession } from "next-auth/react";

export const Header: FC = () => {
  const session = useSession();

  const signOutHandler = () => {
    signOut();
  };

  return (
    <div
      className="px-3 flex sticky top-0 bg-blue-900 h-12 flex items-center z-100"
      style={{ boxShadow: "0px 1px 5px 2px rgba(0,0,0,0.2)" }}
    >
      <div className="w-full text-white lg:hidden">大丸白衣 WEB在庫</div>
      <div className="w-full hidden lg:flex gap-3 justify-end mx-3">
        <div>
          {session.data?.user.uid && (
            <div
              className="flex items-center text-white text-sm cursor-pointer"
              onClick={signOutHandler}
            >
              ログアウト
            </div>
          )}
        </div>
      </div>
      <HeaderDrawer />
    </div>
  );
};
