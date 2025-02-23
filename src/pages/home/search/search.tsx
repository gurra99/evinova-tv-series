import React, { useContext, useState } from "react";
import { Container, Header } from "./search.styles";
import InputField from "../../../components/fragments/input-field/input-field";
import { useQuery } from "@tanstack/react-query";
import { fetchTvSerieByName } from "../../../api/tv-serie-api";
import { useDebounce } from "../../../components/hooks/use-debounce";
import SearchList from "./search-list/search-list";
import { ErrorMessage } from "../../../components/fragments/error-message/error-message";
import { LoadingSpinner } from "../../../components/fragments/loading-spinner/loading-spinner";
import { EmptyListMessage } from "../../../components/fragments/empty-list-message/empty-list-message";
import DataContext from "../../../context/data-context";
import { ITvSerieResult } from "../../../model/tv-series.model";

const Search = () => {
  const [isConnectionSlow, setIsConnectionSlow] = useState<boolean>(false);
  const { setSearchValue, searchValue } = useContext(DataContext);
  const searchDebouncedValue = useDebounce<string>(searchValue);

  const {
    data: tvSeries,
    isLoading,
    error,
  } = useQuery<ITvSerieResult[], Error>({
    queryKey: ["tv-serie", searchDebouncedValue],
    queryFn: async () => {
      setIsConnectionSlow(false);
      // Set a timeout to mark the connection as slow if the request takes too long
      const slowTimeout = setTimeout(() => setIsConnectionSlow(true), 1500);
      try {
        return await fetchTvSerieByName(searchDebouncedValue);
      } finally {
        // Clear the timeout once the request is complete
        clearTimeout(slowTimeout);
      }
    },
    // Ensures the query is only triggered if there is a non-empty debounced search value.
    enabled: !!searchDebouncedValue,
  });

  const isNoResultsFound =
    !isLoading && !error && searchDebouncedValue && tvSeries?.length === 0;

  console.log("Search");
  console.log(tvSeries);
  console.log(searchValue);

  return (
    <Container>
      <Header className="secondary-heading">Search Tv-series</Header>
      <InputField
        value={searchValue}
        data-cy="search-input"
        placeHolderValue="Search"
        onChangeHandler={(event) => {
          setSearchValue(event.target.value);
        }}
      />

      {isLoading && <LoadingSpinner />}

      {isConnectionSlow && !error && (
        <ErrorMessage text="⚠️ Your internet seems slow..." />
      )}

      {error && <ErrorMessage text={error.message} />}

      {isNoResultsFound && <EmptyListMessage text="No results found" />}

      {/* Show results only if data is available */}
      {!isLoading && tvSeries && !error && tvSeries?.length > 0 && (
        <SearchList data={tvSeries} />
      )}
    </Container>
  );
};

export default Search;
