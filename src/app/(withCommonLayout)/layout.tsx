import Header from "@/components/shared/header/Header";
import React, { ReactNode } from "react";
// import { Toaster } from "react-hot-toast";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Toaster /> */}
    </>
  );
};

export default CommonLayout;
