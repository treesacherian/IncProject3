import React from "react";
import CreateItem from "./CreateItem";
import { BrowserRouter } from "react-router-dom";


describe("<CreateItem />", () => {
  it("renders", () => {

    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <CreateItem />
      </BrowserRouter>
    );
  });
});
