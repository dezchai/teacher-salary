import React from "react";
import "./App.css";
import SearchBar from "../components/SearchBar";

function App() {
  return (
    <>
      <div>
        <h1 className="font-roboto text-center text-5xl font-bold m-6">
          Teacher Salary
        </h1>
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;
