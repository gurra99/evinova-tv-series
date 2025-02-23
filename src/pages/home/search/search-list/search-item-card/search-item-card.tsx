import React from "react";
import { Container } from "./search-item-card.styles";
import { ITvSerie } from "../../../../../model/tv-series.model";

interface ISearchItemCard {
  show: ITvSerie;
}

const SearchItemCard = (props: ISearchItemCard) => {
  const { show } = props;

  return <Container to={`tv-serie/${show.id}`}></Container>;
};

export default SearchItemCard;
