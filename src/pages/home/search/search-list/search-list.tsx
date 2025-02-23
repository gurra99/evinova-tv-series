import React from "react";
import { Container } from "./search-list.styles";
import SearchItemCard from "./search-item-card/search-item-card";
import { ITvSerieResult } from "../../../../model/tv-series.model";

interface ISearchList {
  data: ITvSerieResult[];
}

const SearchList = (props: ISearchList) => {
  console.log("data");
  console.log(props.data);
  return (
    <Container>
      {props.data.map((item, index) => {
        return <SearchItemCard show={item.show} key={index} />;
      })}
    </Container>
  );
};

export default SearchList;
