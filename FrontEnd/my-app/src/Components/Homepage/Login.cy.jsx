
import React from "react";
import LoginPage from "./Login";
import { BrowserRouter } from "react-router-dom";
describe("<LoginPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
  });
});

