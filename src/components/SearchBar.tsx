"use client";
import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import Result from "../interfaces/Result";
import axios from "axios";
import DarkModeSwitcher from "@components/DarkModeSwitcher";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "CAD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [searchSpeed, setSearchSpeed] = useState(0);
  const [hasFetched, setHasFetched] = useState(false);
  const debouncedValue = useDebounce<string>(searchTerm, 500);

  const fetchAPI = async () => {
    if (searchTerm.trim().length === 0) return;
    console.log(`Searching for: ${searchTerm}`);
    const resp = await axios.post("/api/search", { query: searchTerm });
    if (resp.data.results.length === 0) {
      setHasFetched(true);
      setResults([]);
      return;
    }
    setResults(resp.data.results.map((r: any) => r.item));
    setSearchSpeed(resp.data.speed);
    setHasFetched(true);
  };

  useEffect(() => {
    fetchAPI();
  }, [debouncedValue]);

  // Method to handle changes to the search term
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Method to handle the search form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform the search using the search term from the state
    fetchAPI();
  };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-center">
        <DarkModeSwitcher />
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex items-center justify-center p-2"
        >
          <div className="form-group relative">
            <input
              type="text"
              id="search"
              className="form-field border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 w-full"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Search
          </button>
        </form>
      </div>
      {results.length === 0 && hasFetched && searchTerm.trim() !== "" && (
        <h1 className="text-center">Zero Results</h1>
      )}
      {results.length !== 0 && hasFetched && (
        <h1 className="text-center">
          Found {results.length} {results.length === 1 ? "result" : "results"}{" "}
          in {searchSpeed} seconds
        </h1>
      )}
      <div className="flex justify-center ">
        <table className="max-w-[90%] md:max-w-[90%] md:w-full lg:max-w-[35%] lg:w-full items-center justify-center">
          <tbody className="m-2">
            <tr className="">
              <th className="border px-4 py-2">School</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Salary</th>
            </tr>
            {results.map((result: Result) => (
              <tr key={result.School + result.Name + result.Salary}>
                <td className="border px-2 py-2 text-center">
                  {result.School}
                </td>
                <td className="border px-2  py-2 text-center">
                  {result.Name.split(",")[1].trim() +
                    " " +
                    result.Name.split(",")[0]}
                </td>
                <td className="border px-2 py-2  text-center">
                  {formatter.format(result.Salary)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
