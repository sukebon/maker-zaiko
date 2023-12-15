"use client";
import React, { FC, useEffect, useState } from "react";
import { HeaderDrawer } from "./HeaderDrawer";
import { signOut, useSession } from "next-auth/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";

export const Header: FC = () => {
  const session = useSession();
  const uid = session.data?.user.uid;
  const [isAuthority, setIsAuthority] = useState(false);

  useEffect(() => {
    if (!session) return;
    const getUser = async () => {
      const docRef = doc(db, "users", `${uid}`);
      const snapShot = await getDoc(docRef);
      if (!snapShot.exists()) return;
      setIsAuthority(true);
    };
    getUser();
  }, [uid,session]);

  const signOutHandler = () => {
    signOut();
  };

  return (
    <div
      className="px-3 flex sticky top-0 bg-blue-900 h-12 flex items-center z-50"
      style={{ boxShadow: "0px 1px 5px 2px rgba(0,0,0,0.2)" }}
    >
      <div className="w-full text-white lg:hidden">大丸白衣 WEB在庫</div>
      <div className="w-full hidden lg:flex gap-3 justify-end mx-3">
        <div>
          {isAuthority && (
            <Link href="/csv-bulk-register">
              <button className="text-white">在庫登録</button>
            </Link>
          )}
        </div>
        <div>
          {session.data?.user.uid && (
            <button
              className="flex items-center text-white text-smr"
              onClick={signOutHandler}
            >
              ログアウト
            </button>
          )}
        </div>
      </div>
      <HeaderDrawer />
    </div>
  );
};
