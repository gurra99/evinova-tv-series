import React from "react";
import { Container, Header } from "./home.styles";
import Search from "./search/search";

const Home = () => {
  return (
    <Container>
      <Header className="primary-heading">Evinova Tv-Series</Header>
      <Search />
    </Container>
  );
};

export default Home;
