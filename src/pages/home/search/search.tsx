import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTvSerieByName } from "../../../api/tv-serie-api";
import InputField from "../../../components/fragments/input-field/input-field";
import { LoadingSpinner } from "../../../components/fragments/loading-spinner/loading-spinner";
import { ErrorMessage } from "../../../components/fragments/error-message/error-message";
import SearchList from "./search-list/search-list";

const Search = () => {
  const { setSearchValue, searchValue } = useContext(DataContext);
  const searchDebouncedValue = useDebounce<string>(searchValue);

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
    {isLoading && <LoadingSpinner />}


    {error && <ErrorMessage text={error.message} />}

    <SearchList data={tvSeries} />
  );
};

export default Search;
