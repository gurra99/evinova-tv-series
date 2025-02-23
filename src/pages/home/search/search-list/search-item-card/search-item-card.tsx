import React from "react";
import {
  Container,
  Image,
  CardTitle,
  TextContainer,
} from "./search-item-card.styles";
import { ITvSerie } from "../../../../../model/tv-series.model";

interface ISearchItemCard {
  show: ITvSerie;
}

const SearchItemCard = (props: ISearchItemCard) => {
  const { show } = props;

  return (
    <Container to={`tv-serie/${show.id}`} data-cy="grid-card-link">
      <Image src={show.image?.original} alt="tv-serie-image" />
      <TextContainer>
        <CardTitle>{show.name}</CardTitle>
      </TextContainer>
    </Container>
  );
};

export default SearchItemCard;
