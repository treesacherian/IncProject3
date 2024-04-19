import React from "react";
import CreateBasket from "./CreateBasket";
import { BrowserRouter } from "react-router-dom";
describe("<CreateBasket />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <CreateBasket />
      </BrowserRouter>
    );
  });
});