import { baseUrl, fetchOptions } from "./config";

export const fetchTvSerieByName = async (name: string | null) => {
  const url = baseUrl + `/search/shows?q=${name}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2000);

  try {
    const res = await fetch(url, {
      ...fetchOptions("GET", "application/json"),
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tv-serie");
    }

    const json = await res.json();
    return json;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Your connection is very slow. Please try again.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};
