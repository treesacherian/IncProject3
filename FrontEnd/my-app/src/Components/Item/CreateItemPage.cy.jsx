import React from 'react'
import CreateItemPage from './CreateItemPage'

describe('<CreateItemPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateItemPage />)
  })
})