import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter } from "react-router-dom";
describe("<ProtectedRoutes />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <ProtectedRoutes />
      </BrowserRouter>
    );
  });
});
