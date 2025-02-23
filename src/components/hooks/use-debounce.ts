import { useEffect, useState } from "react";

// Custom hook to debounce a value, delaying updates to prevent excessive re-renders or API requests.
export const useDebounce = <T>(value: T, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
      setDebouncedValue(null);
    };
  }, [value, delay]);

  return debouncedValue;
};
