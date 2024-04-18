import React from 'react'
import ItemDisplay from './ItemDisplay'

describe('<ItemDisplay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ItemDisplay />)
  })
})