import React from 'react'
import PageForItem from './PageForItem'

describe('<PageForItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PageForItem />)
  })
})