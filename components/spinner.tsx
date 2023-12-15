import React from "react";
import { Spinner } from "@chakra-ui/react";
import { Providers } from "@/app/providers";

const LoadingSpinner = () => {
  return (
    <Providers>
      <div className="fixed t-0 l-0 h-screen w-full flex justify-center items-center z-50">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    </Providers>
  );
};

export default LoadingSpinner;
