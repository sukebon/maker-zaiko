"use client";
import React, { FC } from "react";
import { HeaderList } from "./HeaderList";
import { HeaderDrawer } from "./HeaderDrawer";
import { signOut, useSession } from "next-auth/react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Header: FC = () => {
  const session = useSession();
  const signOutHandler = () => {
    signOut();
  };
  return (
    <div className="px-3 flex sticky top-0 bg-blue-900 h-12 z-10 flex items-center">
      {/* <div className='ml-3 text-white'>大丸白衣</div> */}
      <div className="w-full hidden lg:flex gap-3 justify-between mx-3">
        <div className="flex gap-3 items-center">
          <HeaderList />
        </div>
        <Flex align="center" gap={26}>
          <div>
            <Link
              className="text-white text-sm cursor-pointer"
              href="https://myuni.vercel.app/catalog"
              target="_blank"
              rel="noopener noreferrer"
            >
              マイユニポータル
            </Link>
          </div>
          {session.data?.user.uid && (
            <div
              className="flex items-center text-white text-sm cursor-pointer"
              onClick={signOutHandler}
            >
              ログアウト
            </div>
          )}
        </Flex>
      </div>

      <HeaderDrawer />
    </div>
  );
};
