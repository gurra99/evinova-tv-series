describe("search page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("correct url", () => {
    cy.visit("http://localhost:3000/");
  });

  it("header contains correct text", () => {
    cy.get("h1").contains("Evinova Tv-Series");
  });

  it("should display the input field on the page", () => {
    cy.get("input").should("be.visible");
  });

  it("displays a message when no TV series match the search", () => {
    cy.get('[data-cy="search-input"]').type("ddddereererwewe");
    cy.get("div").contains("No results found");
  });

  it("click on a tv-serie card takes you to tv-serie detail page", () => {
    cy.get('[data-cy="search-input"]').type("Life Tracker Lee Jae Goo");
    cy.get('[data-cy="grid-card-link"]').first().click();
    cy.location("pathname").should("eq", "/tv-serie/42540");
  });
});
