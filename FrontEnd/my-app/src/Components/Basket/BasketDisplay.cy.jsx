import React from "react";
import BasketsDisplay from "./BasketDisplay";

describe("<BasketsDisplay />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BasketsDisplay />);
  });
});
