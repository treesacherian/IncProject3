import React from 'react'
import CreateItemPage from './CreateItemPage'
import { BrowserRouter } from 'react-router-dom'
describe('<CreateItemPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <CreateItemPage />
      </BrowserRouter>
    );
  })
})