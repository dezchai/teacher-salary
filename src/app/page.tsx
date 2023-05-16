import React from "react";
import "./App.css";
import SearchBar from "../components/SearchBar";
import Image from "next/image";
import Logo from "@public/logo.svg";
function App() {
  {
    /* <div className="flex flex-row items-center justify-center my-4">
    <Image
      src={Logo}
      alt="Logo "
      width={50}
      height={50}
      className="hidden sm:block"
    />
    <h1 className="text-5xl font-bold ml-2 text-center">Teacher Salary</h1>
  </div> */
  }
  return (
    <div className="w-full">
      <SearchBar />
    </div>
  );
}

export default App;
