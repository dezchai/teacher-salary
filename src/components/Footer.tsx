import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-center rounded-xl w-60 flex-shrink-0 mb-1">
      <a
        href="/about"
        className="text-center dark:text-white light:text-black m-2 hover:text-blue-500"
      >
        About
      </a>
      <a
        href="https://github.com/dezchai/teacher-salary"
        className="text-center dark:text-white light:text-black m-2 hover:text-blue-500"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/desmond-chai-538963260/"
        target="_blank"
        className="text-center dark:text-white light:text-black m-2 hover:text-blue-500"
      >
        Contact
      </a>
    </footer>
  );
};

export default Footer;
