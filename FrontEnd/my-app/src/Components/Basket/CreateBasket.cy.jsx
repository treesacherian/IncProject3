import React from 'react'
import CreateBasket from './CreateBasket'

describe('<CreateBasket />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateBasket />)
  })
})