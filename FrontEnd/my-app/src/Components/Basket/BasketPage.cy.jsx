import React from 'react'
import BasketPage from './BasketPage'

describe('<BasketPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BasketPage />)
  })
})