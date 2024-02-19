describe('Testing Open application form on Cinnamon website', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/careers')
    })

    it('Fill the Open application form on Cinnamon website with correct credentials', () => {

        // First Name
        cy.get('[name="FirstName"]').type("FakeFname")
        cy.get('[name="FirstName"]').should('have.value', 'FakeFname')

        // Last Name
        cy.get('[name="LastName"]').type('FakeLname')
        cy.get('[name="LastName"]').should('have.value', 'FakeLname')
        
        // Phone Number
        cy.get('[name="PhoneNumber"]').type('+385991234567')
        cy.get('[name="PhoneNumber"]').should('have.value', '+385991234567')

        // E-mail
        cy.get('[name="Email"]').type('fake@email.com')
        cy.get('[name="Email"]').should('have.value', 'fake@email.com')

        // Ad location dropdown
        cy.get('select').eq(1).within(() => {
            cy.contains('Cinnamon website')
        }).select('cinnamonwebsite').should('have.value', 'cinnamonwebsite')
        cy.get('select').last().contains('Cinnamon website')

        // Add cv
        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})
        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('button').should('be.visible')
        })

        // Consent checkbox
        cy.get('.e1wnkp8s3').first().click({force: true})
        cy.get('.e1wnkp8s1').first().should('be.visible')

        // Personal data checkbox
        cy.get('.e1wnkp8s3').last().click({force: true})
        cy.get('.e1wnkp8s1').last().should('be.visible')

        cy.get('#formApplyButton').contains('Apply').click({force: true})
        cy.location("pathname").should('contain', '/thank-you/openApplication')
    })


    it('Adding and deleting a social media link', () => {
                
        // Social Links
        cy.get('[name="SocialLinks"]').type('fakesociallink.com')
        cy.get('[name="SocialLinks"]').should('have.value', 'fakesociallink.com')
        
        // Social Dropdown
        cy.get('select').first().within(() => {
            cy.contains('Github')
        }).select('github').should('have.value', 'github')
        cy.get('select').eq(0).contains('Github')

        cy.get('.ev30vt00').should('not.exist')
        cy.get('.e18n6vwg0').click({force: true})

        cy.get('.ev30vt00').contains('fakesociallink.com')

        cy.get('.e1eaey1u4').click({force: true})
        cy.get('.ev30vt00').should('not.exist')

    })

    it('Adding and deleting a cv file', () => {

        cy.get('.e1eaey1u3').should('not.exist')
        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})

        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('.e1eaey1u4').should('exist')
        })

        cy.get('.e1eaey1u4').click({force: true})
    })

    it('Empty First name field validation', () => {

        cy.get('.e11geu340').should('not.exist')

        // First Name
        cy.get('[name="FirstName"]').should('not.have.value')

        // Last Name
        cy.get('[name="LastName"]').type('FakeLname')
        cy.get('[name="LastName"]').should('have.value', 'FakeLname')

        // Phone Number
        cy.get('[name="PhoneNumber"]').type('+385991234567')
        cy.get('[name="PhoneNumber"]').should('have.value', '+385991234567')

        // E-mail
        cy.get('[name="Email"]').type('fake@email.com')
        cy.get('[name="Email"]').should('have.value', 'fake@email.com')

        // Ad location dropdown
        cy.get('select').eq(1).within(() => {
            cy.contains('Cinnamon website')
        }).select('cinnamonwebsite').should('have.value', 'cinnamonwebsite')
        cy.get('select').last().contains('Cinnamon website')

        // Add cv
        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})
        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('button').should('be.visible')
        })

        // Consent checkbox
        cy.get('.e1wnkp8s3').first().click({force: true})
        cy.get('.e1wnkp8s1').first().should('be.visible')

        // Personal data checkbox
        cy.get('.e1wnkp8s3').last().click({force: true})
        cy.get('.e1wnkp8s1').last().should('be.visible')

        cy.get('#formApplyButton').contains('Apply').click({force: true})

        // First name field validation

        cy.get('.ev30vt06').eq(0).within(() => {
            cy.get('.e1lph2lf2').first().within(() => {
                cy.get('[name="FirstName"]').should('be.empty')
            })            
            cy.get('.e11geu340').should('be.visible').contains('This field is required')
        })
    })


    it('Empty Last name field validation', () => {

        cy.get('.e11geu340').should('not.exist')

        // First Name
        cy.get('[name="FirstName"]').type("FakeFname")
        cy.get('[name="FirstName"]').should('have.value', 'FakeFname')

        // Last Name
        cy.get('[name="LastName"]').should('not.have.value')

        // Phone Number
        cy.get('[name="PhoneNumber"]').type('+385991234567')
        cy.get('[name="PhoneNumber"]').should('have.value', '+385991234567')

        // E-mail
        cy.get('[name="Email"]').type('fake@email.com')
        cy.get('[name="Email"]').should('have.value', 'fake@email.com')

        // Ad location dropdown
        cy.get('select').eq(1).within(() => {
            cy.contains('Cinnamon website')
        }).select('cinnamonwebsite').should('have.value', 'cinnamonwebsite')
        cy.get('select').last().contains('Cinnamon website')

        // Add cv
        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})
        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('button').should('be.visible')
        })

        // Consent checkbox
        cy.get('.e1wnkp8s3').first().click({force: true})
        cy.get('.e1wnkp8s1').first().should('be.visible')

        // Personal data checkbox
        cy.get('.e1wnkp8s3').last().click({force: true})
        cy.get('.e1wnkp8s1').last().should('be.visible')

        cy.get('#formApplyButton').contains('Apply').click({force: true})

        // Last name field validation

        cy.get('.ev30vt06').eq(0).within(() => {
            cy.get('.e1lph2lf2').last().within(() => {
                cy.get('[name="LastName"]').should('be.empty')
            })            
            cy.get('.e11geu340').should('be.visible').contains('This field is required')
        })

    })

    it('Invalid phone field format validation', () => { 

        cy.get('.e11geu340').should('not.exist')

        // First Name
        cy.get('[name="FirstName"]').type("FakeFname")
        cy.get('[name="FirstName"]').should('have.value', 'FakeFname')

        // Last Name
        cy.get('[name="LastName"]').type('FakeLName')
        cy.get('[name="LastName"]').should('have.value', 'FakeLName')

        // Phone Number
        cy.get('[name="PhoneNumber"]').type('randomstring')
        cy.get('[name="PhoneNumber"]').should('have.value', 'randomstring')

        // E-mail
        cy.get('[name="Email"]').type('fake@email.com')
        cy.get('[name="Email"]').should('have.value', 'fake@email.com')

        // Ad location dropdown
        cy.get('select').eq(1).within(() => {
            cy.contains('Cinnamon website')
        }).select('cinnamonwebsite').should('have.value', 'cinnamonwebsite')
        cy.get('select').last().contains('Cinnamon website')

        // Add cv
        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})
        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('button').should('be.visible')
        })

        // Consent checkbox
        cy.get('.e1wnkp8s3').first().click({force: true})
        cy.get('.e1wnkp8s1').first().should('be.visible')

        // Personal data checkbox
        cy.get('.e1wnkp8s3').last().click({force: true})
        cy.get('.e1wnkp8s1').last().should('be.visible')

        cy.get('#formApplyButton').contains('Apply').click({force: true})

        // Wrong phone number format field validation

        cy.get('.ev30vt06').eq(1).within(() => {
            cy.get('.e1lph2lf2').first().within(() => {
                cy.get('[name="PhoneNumber"]').should('be.have.value', 'randomstring')
            })            
            cy.get('.e11geu340').should('be.visible').contains('Invalid phone')
        })
    })


 it('Empty Email field validation', () => {

        cy.get('.e11geu340').should('not.exist')

        // First Name
        cy.get('[name="FirstName"]').type("FakeFname")
        cy.get('[name="FirstName"]').should('have.value', 'FakeFname')

        // Last Name
        cy.get('[name="LastName"]').type('FakeLName')
        cy.get('[name="LastName"]').should('have.value', 'FakeLName')

        // Phone Number
        cy.get('[name="PhoneNumber"]').type('+385991234567')
        cy.get('[name="PhoneNumber"]').should('have.value', '+385991234567')

        // E-mail
        cy.get('[name="Email"]').should('not.have.value')

        // Ad location dropdown
        cy.get('select').eq(1).within(() => {
            cy.contains('Cinnamon website')
        }).select('cinnamonwebsite').should('have.value', 'cinnamonwebsite')
        cy.get('select').last().contains('Cinnamon website')

        // Add cv
        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})
        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('button').should('be.visible')
        })

        // Consent checkbox
        cy.get('.e1wnkp8s3').first().click({force: true})
        cy.get('.e1wnkp8s1').first().should('be.visible')

        // Personal data checkbox
        cy.get('.e1wnkp8s3').last().click({force: true})
        cy.get('.e1wnkp8s1').last().should('be.visible')

        cy.get('#formApplyButton').contains('Apply').click({force: true})

        // Empty e-mail field validation

        cy.get('.ev30vt06').eq(1).within(() => {
            cy.get('.e1lph2lf2').last().within(() => {
                cy.get('[name="Email"]').should('be.empty')
            })            
            cy.get('.e11geu340').should('be.visible').contains('This field is required')
        })
    })

    it('Empty Email field validation', () => {

        cy.get('.e11geu340').should('not.exist')

        // First Name
        cy.get('[name="FirstName"]').type("FakeFname")
        cy.get('[name="FirstName"]').should('have.value', 'FakeFname')

        // Last Name
        cy.get('[name="LastName"]').type('FakeLName')
        cy.get('[name="LastName"]').should('have.value', 'FakeLName')

        // Phone Number
        cy.get('[name="PhoneNumber"]').type('+385991234567')
        cy.get('[name="PhoneNumber"]').should('have.value', '+385991234567')

        // E-mail
        cy.get('[name="Email"]').should('not.have.value')

        // Ad location dropdown
        cy.get('select').eq(1).within(() => {
            cy.contains('Cinnamon website')
        }).select('cinnamonwebsite').should('have.value', 'cinnamonwebsite')
        cy.get('select').last().contains('Cinnamon website')

        // Add cv
        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})
        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('button').should('be.visible')
        })

        // Consent checkbox
        cy.get('.e1wnkp8s3').first().click({force: true})
        cy.get('.e1wnkp8s1').first().should('be.visible')

        // Personal data checkbox
        cy.get('.e1wnkp8s3').last().click({force: true})
        cy.get('.e1wnkp8s1').last().should('be.visible')

        cy.get('#formApplyButton').contains('Apply').click({force: true})

        // Empty e-mail field validation

        cy.get('.ev30vt06').eq(1).within(() => {
            cy.get('.e1lph2lf2').last().within(() => {
                cy.get('[name="Email"]').should('be.empty')
            })            
            cy.get('.e11geu340').should('be.visible').contains('This field is required')
        })
    })

    it('Invalid e-mail format validation', () => {

        cy.get('.e11geu340').should('not.exist')

        // First Name
        cy.get('[name="FirstName"]').type("FakeFname")
        cy.get('[name="FirstName"]').should('have.value', 'FakeFname')

        // Last Name
        cy.get('[name="LastName"]').type('FakeLName')
        cy.get('[name="LastName"]').should('have.value', 'FakeLName')

        // Phone Number
        cy.get('[name="PhoneNumber"]').type('+385991234567')
        cy.get('[name="PhoneNumber"]').should('have.value', '+385991234567')

        // E-mail
        cy.get('[name="Email"]').type('randomstring')
        cy.get('[name="Email"]').should('have.value', 'randomstring')

        // Ad location dropdown
        cy.get('select').eq(1).within(() => {
            cy.contains('Cinnamon website')
        }).select('cinnamonwebsite').should('have.value', 'cinnamonwebsite')
        cy.get('select').last().contains('Cinnamon website')

        // Add cv
        cy.get('input[type=file]').first().selectFile('cypress/fixtures/test.pdf', {force: true})
        cy.get('.e1eaey1u3').first().within(() => {
            cy.get('button').should('be.visible')
        })

        // Consent checkbox
        cy.get('.e1wnkp8s3').first().click({force: true})
        cy.get('.e1wnkp8s1').first().should('be.visible')

        // Personal data checkbox
        cy.get('.e1wnkp8s3').last().click({force: true})
        cy.get('.e1wnkp8s1').last().should('be.visible')

        cy.get('#formApplyButton').contains('Apply').click({force: true})

        // Wrong e-mail format validation
        cy.get('.ev30vt06').eq(1).within(() => {
            cy.get('.e1lph2lf2').last().within(() => {
                cy.get('[name="Email"]').should('have.value', 'randomstring')
            })            
            cy.get('.e11geu340').should('be.visible').contains('Invalid E-mail format')
        })
    })

    xit('Job advert dropdown validation', () => {


    })

    xit('CV file validation', () => {


    })

    xit('Terms of service validation', () => {


    })

    
})
