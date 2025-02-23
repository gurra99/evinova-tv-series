import React from "react";
import { AppContainer } from "./App.styles";
import Header from "./components/fragments/header/header";
import { Layout } from "./components/structure/layout/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import TvSerie from "./pages/tv-serie/tv-serie";

function App() {
  return (
    <AppContainer>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-serie/:id" element={<TvSerie />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </AppContainer>
  );
}

export default App;
