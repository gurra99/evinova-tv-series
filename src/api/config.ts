export const baseUrl = "https://api.tvmaze.com";

export function fetchOptions(method: string, accept: "application/json") {
  return {
    method: method,
    headers: {
      accept: accept,
    },
  };
}
