import React from "react";
import { Container } from "./search-list.styles";
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
        return <p>test</p>;
      })}
    </Container>
  );
};

export default SearchList;
