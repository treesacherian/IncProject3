import React from 'react'
import EditItem from './EditItem'

describe('<EditItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EditItem />)
  })
})