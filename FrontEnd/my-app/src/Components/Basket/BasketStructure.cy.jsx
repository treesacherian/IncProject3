import React from "react";
import BasketStructure from "./BasketStructure";

describe("<BasketStructure />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BasketStructure />);
  });
});
