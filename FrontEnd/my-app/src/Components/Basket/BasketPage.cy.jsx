import React from "react";
import BasketPage from "./BasketPage";
import { BrowserRouter } from "react-router-dom";
describe("<BasketPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <BasketPage />
      </BrowserRouter>
    );
  });
});
