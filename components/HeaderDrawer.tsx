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

export const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const list = [
    { title: "大丸白衣", link: "/" },
    { title: "ALPHA PIER　FELLOWS", link: "/chikuma" },
    { title: "KIRAKU", link: "/tombow" },
    { title: "UNITE/Arbe", link: "/chitose" },
  ];

  return (
    <>
      <Providers>
        <Flex w="full" justify="flex-end">
          <Button
            display={{ base: "block", lg: "none" }}
            variant="solid"
            size="sm"
            colorScheme="blue"
            onClick={onOpen}
          >
            menu
          </Button>
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              {list.map(({ title, link }) => (
                <Link key={title} href={link} onClick={onClose}>
                  <Box my={2} _hover={{textColor:"blue"}}>{title}</Box>
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
