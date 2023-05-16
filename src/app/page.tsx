import React from "react";
import "./App.css";
import SearchBar from "../components/SearchBar";

function App() {
  return (
    <div className="">
      <h1 className="font-roboto text-center text-5xl font-bold m-6">
        Teacher Salary
      </h1>
      <div className="">
        <SearchBar />
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
