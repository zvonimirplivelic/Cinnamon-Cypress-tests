describe('Testing Open application form on Cinnamon website', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/careers')
    })

    it('Fill the Open application form on Cinnamon website with correct credentials', () => {
        cy.get('[name="FirstName"]').type('FakeFname')
        cy.get('[name="FirstName"]').should('have.value', 'FakeFname')

        cy.get('[name="LastName"]').type('FakeLname')
        cy.get('[name="LastName"]').should('have.value', 'FakeLname')
        
        cy.get('[name="PhoneNumber"]').type('+385991234567')
        cy.get('[name="PhoneNumber"]').should('have.value', '+385991234567')

        cy.get('[name="Email"]').type('fake@email.com')
        cy.get('[name="Email"]').should('have.value', 'fake@email.com')
        
        cy.get('[name="SocialLinks"]').type('fakesociallink.com')
        cy.get('[name="SocialLinks"]').should('have.value', 'fakesociallink.com')
        
        cy.get('select').first().within(() => {
            cy.contains('Github')
        }).select('github').should('have.value', 'github')
        cy.get('select').eq(0).contains('Github')

        cy.get('select').eq(1).within(() => {
            cy.contains('Cinnamon website')
        }).select('cinnamonwebsite').should('have.value', 'cinnamonwebsite')
        cy.get('select').last().contains('Cinnamon website')

        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})
        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('button').should('be.visible')
        })

        cy.get('.e1wnkp8s3').first().click({force: true})
        cy.get('.e1wnkp8s1').first().should('be.visible')

        cy.get('.e1wnkp8s3').last().click({force: true})
        cy.get('.e1wnkp8s1').last().should('be.visible')

        cy.get('#formApplyButton').contains('Apply').click({force: true})
        cy.location("pathname").should('contain', '/thank-you/openApplication')
    })
})
