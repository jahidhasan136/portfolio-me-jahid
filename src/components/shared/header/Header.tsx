"use client";

import Image from "next/image";
import React, { useState } from "react";
import headerName from "../../../assets/header-name.svg";
import Link from "next/link";

const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("jh3495689@gmail.com");
      setCopied(true);

      // Reset back after 1 second
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image src={headerName} alt="Logo" width={197} height={31} />
      </Link>
      <div className="flex items-center gap-10 text-base">
        <Link href="/services">Services</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/skills">Skills</Link>
      </div>
      <div
        className="bg-grayDark px-4 py-2 rounded-full cursor-pointer"
        onClick={handleCopy}
      >
        <p className="font-medium text-white text-base">
          {copied ? "Copied!" : "jh3495689@gmail.com"}
        </p>
      </div>
    </div>
  );
};

export default Header;
