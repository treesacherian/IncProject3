import React from "react";
import ItemStructure from "./ItemStructure";
import { BrowserRouter } from "react-router-dom";

describe("<ItemStructure />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <ItemStructure />
      </BrowserRouter>
    );
  });
});
