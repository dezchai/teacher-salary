import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-center rounded-xl w-60 flex-shrink-0 mb-3">
      <Link
        href="/about"
        className="text-center dark:text-white light:text-black m-2 hover:text-blue-500"
      >
        About
      </Link>
      <Link
        href="https://github.com/dezchai/teacher-salary"
        className="text-center dark:text-white light:text-black m-2 hover:text-blue-500"
        target="_blank"
      >
        Github
      </Link>
      <Link
        href="https://www.linkedin.com/in/desmond-chai-538963260/"
        target="_blank"
        className="text-center dark:text-white light:text-black m-2 hover:text-blue-500"
      >
        Contact
      </Link>
    </footer>
  );
};

export default Footer;
