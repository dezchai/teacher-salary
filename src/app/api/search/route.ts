import { NextResponse } from "next/server";
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
  const startTime = performance.now();
  const { query } = await request.json();
  const result = fuse.search(query).slice(0, 50);
  const endTime = performance.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  return NextResponse.json({ speed: duration, results: result });
};
