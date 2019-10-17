it('visit google.com', () => {
  cy.visit('https://google.com')
  cy.contains(/google/i)
})

it('visit main page', () => {
  cy.visit('/')
  cy.contains(/repo/i)
})
