import React from 'react'
import ItemStructure from './ItemStructure'

describe('<ItemStructure />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ItemStructure />)
  })
})