import React from 'react'
import CreateItem from './CreateItem'



describe('<CreateItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateItem />)
  })
})