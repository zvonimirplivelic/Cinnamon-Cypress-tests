describe('Visit Cinnamon services website', () => {

  it('visits Cinnamon services website', () => {
    cy.visit('https://cinnamon.services')
  })

  it('finds Projects navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('Projects')
  })

  it('clicks the fixed navigation Projects link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Projects").click({force:true})
    cy.url().should('include', '/projects')
  })

  it('clicks the bottom navigation "Projects" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("Projects").click({force:true})
    cy.url().should('include', '/projects')
  })

  it('clicks the bottom navigation "Projects" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("Projects").click({force:true})
    cy.url().should('include', '/projects')
  })

  it('clicks the fixed navigation "Services" link', () => {
    cy.visit('https://cinnamon.services/')
    
    cy.get('.e62olcv2').contains("Services").click({force:true})
    cy.url().should('include', '/services')
  })

  it('clicks the bottom navigation "Services" link', () => {
    cy.visit('https://cinnamon.services/')
    
    cy.get('.e62olcv0').contains("Services").click({force:true})
    cy.url().should('include', '/services')
  })

  it('clicks the bottom navigation "Services" link', () => {
    cy.visit('https://cinnamon.services/')
    
    cy.get('.e62olcv0').contains("Services").click({force:true})
    cy.url().should('include', '/services')
  })

  it('finds About Us navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('About Us')
  })
  
  it('clicks the fixed navigation "About Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("About Us").click({force: true} )
    cy.url().should('include', '/about')
  })
  
  it('clicks the bottom navigation "About Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("About Us").click({force: true} )
    cy.url().should('include', '/about')
  })

  it('finds Careers navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('Careers')
  })

  it('clicks the fixed navigation "Careers" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Careers").click({force: true} )
    cy.url().should('include', '/careers')
  })

  it('clicks the bottom navigation "Careers" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("Careers").click({force: true} )
    cy.url().should('include', '/careers')
  })
  
  it('finds Blog navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('Blog')
  })
  
  it('clicks the fixed navigation "Blog" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Blog").click({force: true} )
    cy.url().should('include', '/blog')
  })
  
  it('clicks the "Blog" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("Blog").click({force: true} )
    cy.url().should('include', '/blog')
  })
  
  it('clicks Play button in fixed navigation"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.eqnon3u1').click({force: true})
  })
  
  it('finds Contact Us navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e12xm54s5').contains('Contact Us')
  })

  it('clicks the "Contact Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e12xm54s5').contains("Contact Us").click({force: true} )
    cy.url().should('include', '/contact')
  })

  it('finds subscribe form, fills the email credentials and clicks subscribe button', () => {
      cy.visit('https://cinnamon.services/')
  
      // Get an input, type into it
      cy.get('[name="email"]').type('fake@email.com')
  
      //  Verify that the value has been updated
      cy.get('[name="email"]').should('have.value', 'fake@email.com')
  
      cy.get('#subscribeNewsletterButton').contains('Subscribe').click({force: true})
  })

  it('finds subscribe form, fills the email credentials and submits the form', () => {
      cy.visit('https://cinnamon.services/')
  
      cy.get('[name="email"]').type('fake@email.com')
  
      cy.get('[name="email"]').should('have.value', 'fake@email.com')
  
      cy.get('#subscribeForm').submit()
    })
})
