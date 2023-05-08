import { NextResponse } from "next/server";
import fs from "fs";
import Fuse from "fuse.js";
import data from "./db.json";

const searchOptions = {
  isCaseSensitive: false,
  shouldSort: true,
  findAllMatches: true,
  threshold: 0.2,
  useExtendedSearch: true,
  keys: ["Name"],
};

const fuse = new Fuse(data as Array<any>, searchOptions);

export const POST = async (request: Request) => {
  const { query } = await request.json();
  const result = fuse.search(query).slice(0, 50);
  return NextResponse.json({ results: result });
};
