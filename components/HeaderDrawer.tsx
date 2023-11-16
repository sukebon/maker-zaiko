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
import { HeaderList } from "./HeaderList";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const list = [
    { title: "大丸白衣", link: "/", blank: false },
    { title: "ALPHA PIER　FELLOWS", link: "/chikuma", blank: false },
    { title: "KIRAKU", link: "/tombow", blank: false },
    { title: "UNITE/Arbe", link: "/chitose", blank: false },
    { title: "Printstar", link: "/toms", blank: true },
  ];

  return (
    <>
      <Providers>
        <Flex w="100%" justify="flex-end" display={{ base: "flex", lg: "none" }}>
          <IoMenu onClick={onOpen} color="white" size="24px" cursor="pointer" />
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              {list.map(({ title, link, blank }) => (
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
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Providers>
    </>
  );
};
