"use client";
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import useDebounce from "../hooks/useDebounce";
import Result from "../interfaces/Result";
import axios from "axios";
import { isMobile } from "react-device-detect";

// const useStyles = makeStyles(() =>
//   createStyles({
//     root: {
//       display: "flex",
//       alignItems: "center",
//     },
//     textField: {
//       marginRight: "1rem",
//     },
//   })
// );

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "CAD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const SearchBar: React.FC = () => {
  // State for the search bar component
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Result[]>([]);
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
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          className="mr-4"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      {results.length === 0 && hasFetched && searchTerm.trim() !== "" && (
        <div className="flex">
          <h1 className="flexjustify-center text-2xl mx-auto my-3">
            Zero Results
          </h1>
        </div>
      )}
      <div
        style={
          isMobile
            ? {
                margin: "0 auto",
                marginTop: "7vh",
                display: "flex",
                justifyContent: "center",
                padding: "12px",
              }
            : {
                margin: "0 auto",
                marginTop: "7vh",
                display: "flex",
                justifyContent: "center",
                padding: "12px",
                maxWidth: "35vw",
              }
        }
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>School</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
            {results.map((result: Result) => (
              <TableRow key={result.School + result.Name + result.Salary}>
                <TableCell>{result.School}</TableCell>
                <TableCell>
                  {result.Name.split(",")[1].trim() +
                    " " +
                    result.Name.split(",")[0]}
                </TableCell>
                <TableCell>{formatter.format(result.Salary)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SearchBar;
