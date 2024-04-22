import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
});
