describe('Testing Subscription form', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('test subscribe form', () => {
      //  cy.contains()
    })

    it('fills the email credentials and clicks subscribe button', () => {
        cy.get('.e1lph2lf3').type('fake@email.com')
    
        cy.get('.e1lph2lf3').should('have.value', 'fake@email.com')
        cy.get('#subscribeNewsletterButton').contains('Subscribe').click({force: true})
    })

    it('fills the email credentials with invalid e-mail data and clicks subscribe button', () => {
        cy.get('.e1lph2lf3').type('fakefakefake')
        cy.get('.e1lph2lf3').should('have.value', 'fakefakefake')
        cy.get('#subscribeNewsletterButton').contains('Subscribe').click({force: true})
        cy.get('.e11geu340').should('contain', 'Invalid E-mail format')
    })

    it('finds subscribe form, fills the email credentials and submits the form', () => {
        cy.get('[name="email"]').type('fake@email.com')
        cy.get('[name="email"]').should('have.value', 'fake@email.com')
        cy.get('#subscribeForm').submit()
    })

    it('finds subscribe form, fills the email credentials and submits the form', () => {
        cy.get('[name="email"]').type('fakefakefake')
        cy.get('[name="email"]').should('have.value', 'fakefakefake')
        cy.get('#subscribeForm').submit()
    })
})