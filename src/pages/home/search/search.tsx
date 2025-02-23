import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTvSerieByName } from "../../../api/tv-serie-api";

const Search = () => {
  const {
    data: tvSeries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tv-serie", "Star Wars"],
    queryFn: async () => {
      return await fetchTvSerieByName("Star Wars");
    },
  });

  console.log(tvSeries);

  return (
    <InputField
      value={null}
      data-cy="search-input"
      placeHolderValue="Search"
      onChangeHandler={() => {
        null;
      }}
    />
  );
};

export default Search;
