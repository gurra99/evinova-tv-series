import { baseUrl, fetchOptions } from "./config";

export const fetchTvSerieByName = async (name: string | null) => {
  const url = baseUrl + `/search/shows?q=${name}`;

  const res = await fetch(url, {
    ...fetchOptions("GET", "application/json"),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tv-serie");
  }

  const json = await res.json();
  return json;
};
