describe('Visitor views post', () => {
  specify('and sees content', () => {
    cy.visit('/')

    cy.get('div')
      .last()
      .within(() => {
        cy.contains('February 09, 2014')
        cy.contains('The developer’s blog is a time-honored…')
        cy.contains('Hello World!')
      })
      .click()

    cy.url().should('eq', 'http://localhost:8000/hello-world/')
  })
})
