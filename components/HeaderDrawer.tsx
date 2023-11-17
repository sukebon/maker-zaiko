"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Providers } from "@/app/providers";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { links } from "@/utils/links";
import { signOut, useSession } from "next-auth/react";

export const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const session = useSession();
  const signOutHandler = () => {
    signOut();
  };

  return (
    <>
      <Providers>
        <Flex
          w="100%"
          justify="flex-end"
          display={{ base: "flex", lg: "none" }}
        >
          <IoMenu onClick={onOpen} color="white" size="24px" cursor="pointer" />
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              {links.map(({ title, link, blank }) => (
                <Link
                  key={title}
                  href={link}
                  onClick={onClose}
                  target={blank ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <Box my={2} _hover={{ textColor: "blue" }}>
                    {title}
                  </Box>
                </Link>
              ))}

              <Link
                className="text-sm cursor-pointer"
                href="https://myuni.vercel.app/catalog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box my={2} _hover={{ textColor: "blue" }}>
                  マイユニポータル
                </Box>
              </Link>

              {session.data?.user.uid && (
                <div
                  className="flex items-centertext-sm cursor-pointer"
                  onClick={signOutHandler}
                >
                  <Box my={2} _hover={{ textColor: "blue" }}>
                    ログアウト
                  </Box>
                </div>
              )}
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                閉じる
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Providers>
    </>
  );
};
