it('should be able to fetch new data when an user scroll to the bottom', () => {
  cy.visit('/')
  cy.get('[data-testid=repo-card]').should('have.length', 10)
  cy.scrollTo('bottom')
  cy.get('[data-testid=repo-card]').should('have.length', 20)
})
