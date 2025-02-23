import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Search from "../pages/home/search/search";
import {
  customRender,
  waitForSearchResults,
} from "../utilities/test-config/test-setup";

test("h2 should be in search page", () => {
  customRender(<Search />);
  const headerElement = screen.getByRole("heading", { level: 2 });
  expect(headerElement).toBeInTheDocument();
});

it("renders input field correctly", () => {
  customRender(<Search />);
  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
});

test("should navigate to the correct TV series page when a search result is clicked", async () => {
  customRender(<Search />);

  const input = screen.getByPlaceholderText("Search");

  await user.click(input);
  await user.keyboard("Star Wars Andor");
  await waitForSearchResults();

  const link = screen.getByRole("link");
  await user.click(link);

  screen.logTestingPlaygroundURL();
  expect(global.window.location.pathname).toContain("/tv-serie/52341");
});

it("should show results after typing in the search input", async () => {
  customRender(<Search />);
  const input = screen.getByPlaceholderText("Search");

  await user.click(input);
  await user.keyboard("Life Tracker Lee Jae Goo");
  await waitForSearchResults();

  const tvSeries = await screen.findAllByText(/Life Tracker Lee Jae Goo/i);
  expect(tvSeries.length).toBeGreaterThan(0);
});
