import React from "react";
import EditItem from "./EditItem";
import { BrowserRouter } from "react-router-dom";
describe("<EditItem />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <EditItem />
      </BrowserRouter>
    );
  });
});
