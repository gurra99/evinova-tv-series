export const baseUrl = "https://api.tvmaze.com";

export function fetchOptions(
  method: string,
  accept: "application/json",
  signal?: AbortSignal,
) {
  return {
    method: method,
    headers: {
      accept: accept,
    },
    signal: signal,
  };
}
