import React from "react";
import { useParams } from "react-router";
import {
  DescriptionContainer,
  DescriptionName,
  DescriptionValue,
  Header,
  Container,
  MovieContainer,
  TextContainer,
  Image,
} from "./tv-serie.styles";
import { LoadingSpinner } from "../../components/fragments/loading-spinner/loading-spinner";
import { ErrorMessage } from "../../components/fragments/error-message/error-message";
import { fetchTvSerieById } from "../../api/tv-serie-api";
import { useQuery } from "@tanstack/react-query";
import { RowContainer, RowName, RowValue } from "../../App.styles";
import { ITvSerie } from "../../model/tv-series.model";
import { removeTags } from "../../utilities/string-utils";

const TvSerie = () => {
  const { id } = useParams();

  const {
    data: tvSerie,
    isLoading,
    error,
  } = useQuery<ITvSerie>({
    queryKey: ["tv-serie-by-id", id],
    queryFn: () => fetchTvSerieById(id),
  });

  return (
    <Container>
      {!isLoading ? (
        <MovieContainer>
          <Image src={tvSerie?.image?.original} alt="movie" />
          <TextContainer>
            <Header className="secondary-heading">
              {tvSerie?.name || "Unknown"}
            </Header>
            <RowContainer>
              <RowName>Rating:</RowName>
              <RowValue>{tvSerie?.rating?.average || "Unknown"}</RowValue>
            </RowContainer>
            <RowContainer>
              <RowName>Status:</RowName>
              <RowValue>{tvSerie?.status || "Unknown"}</RowValue>
            </RowContainer>
            <RowContainer>
              <RowName>Language:</RowName>
              <RowValue>{tvSerie?.language || "Unknown"}</RowValue>
            </RowContainer>
            <RowContainer>
              <RowName>Type:</RowName>
              <RowValue>{tvSerie?.type || "Unknown"}</RowValue>
            </RowContainer>
            <DescriptionContainer>
              <DescriptionName>Summary:</DescriptionName>
              <DescriptionValue>
                {removeTags(tvSerie?.summary || "Unknown")}
              </DescriptionValue>
            </DescriptionContainer>
          </TextContainer>
        </MovieContainer>
      ) : (
        <LoadingSpinner />
      )}
      {!isLoading && error && <ErrorMessage text={error.message} />}
    </Container>
  );
};

export default TvSerie;
