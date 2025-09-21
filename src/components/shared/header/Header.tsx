"use client";

import Image from "next/image";
import React, { useState } from "react";
// Images
import headerName from "../../../assets/header-name.svg";
import barIcon from "../../../assets/header/barIcon.svg";
import mailIcon from "../../../assets/header/mail.svg";
import Link from "next/link";
// Toaster
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const [, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("jh3495689@gmail.com");
      setCopied(true);
      toast.success("Email copied to clipboard!");
      // Reset back after 1 second
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image
          src={headerName}
          alt="Logo"
          className="w-[106px] h-[17px] md:w-[197px] md:h-[31px] md:flex"
        />
      </Link>
      <div className="flex items-center gap-10 text-base xs:hidden lg:flex">
        <Link href="/services">Services</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/skills">Skills</Link>
      </div>
      <div
        className="bg-grayDark px-4 py-2 rounded-full cursor-pointer xs:hidden lg:flex"
        onClick={handleCopy}
      >
        <p className="font-medium text-white text-base">jh3495689@gmail.com</p>
      </div>

      {/* Responsive */}
      <div className="cursor-pointer lg:hidden flex items-center xs:gap-2 md:gap-5">
        <Image
          onClick={handleCopy}
          src={mailIcon}
          alt="Mail Icon"
          width={20}
          height={17}
        />
        <div className="cursor-pointer bg-[#1C1C1C] p-[10px] rounded-[5px] lg:hidden">
          <Image src={barIcon} alt="Bar Icon" width={24} height={24} />
        </div>
      </div>

      {/* add toaster to show notification */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default Header;
