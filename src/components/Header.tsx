import React from "react";
import Image from "next/image";
import Logo from "@public/logo.svg";

const Header = () => {
  return (
    <a
      href="/"
      className="flex flex-row items-center justify-center my-4 flex-shrink-0"
    >
      <Image src={Logo} alt="Logo " width={50} height={50} className="" />
      <h1 className="text-5xl font-bold ml-2 text-center hover:text-blue-500">
        Teacher Salary
      </h1>
    </a>
  );
};

export default Header;
