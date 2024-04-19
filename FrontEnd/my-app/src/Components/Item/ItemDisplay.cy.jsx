import React from 'react'
import ItemDisplay from './ItemDisplay'
import { BrowserRouter } from 'react-router-dom'
describe('<ItemDisplay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <ItemDisplay />
      </BrowserRouter>
    );
  })
})