// Successfull test

/* describe('Successfull test', () => {
  it('Does not do much!"', () => {
      expect(true).to.equal(true)
  })
}) */

// Failing test

/* describe('Failing test', () => {
  it('Does not do much!"', () => {
      expect(true).to.equal(false)
  })
}) */

// Visit Kitchen Sink

/* describe('Visit Kitchen Sink', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

// Visit Cinnamon webiste

describe('Visit Cinnamon services website', () => {
  it('visits Cinnamon services website', () => {
    cy.visit('https://cinnamon.services')
  })
})

// Query for an element

/* describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
}) */

// Query for the Projects Navigation link 

describe('Find Projects link', () => {
  it('finds Projects navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('Projects')
  })
})

describe('Click Projects fixed Navigation link', () => {
  it('clicks the fixed navigation Projects link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Projects").click({force: true} )
    cy.url().should('include', '/projects')
  })
})

describe('Click Projects bottom Navigation link', () => {
  it('clicks the bottom navigation "Projects" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("Projects").click({force: true} )
    cy.url().should('include', '/projects')
  })
})

// Query for the Services Navigation link 

describe('Find Services link', () => {
  it('finds Services navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('Services')
  })
})

describe('Click Services fixed navigation link', () => {
  it('clicks the fixed navigation "Services" link', () => {
    cy.visit('https://cinnamon.services/')
    
    cy.get('.e62olcv2').contains("Services").click({force: true} )
    cy.url().should('include', '/services')
  })
})

describe('Click Services bottom navigation link', () => {
  it('clicks the bottom navigation "Services" link', () => {
    cy.visit('https://cinnamon.services/')
    
    cy.get('.e62olcv0').contains("Services").click({force: true} )
    cy.url().should('include', '/services')
  })
})

// Query for the About Us Navigation link 

describe('Find About Us link', () => {
  it('finds About Us navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('About Us')
  })
})

describe('Click About Us fixed navigation link', () => {
  it('clicks the fixed navigation "About Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("About Us").click({force: true} )
    cy.url().should('include', '/about')
  })
})

describe('Click About Us bottom navigation link', () => {
  it('clicks the bottom navigation "About Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("About Us").click({force: true} )
    cy.url().should('include', '/about')
  })
})

// Query for the Careers Navigation link 

describe('Find Careers link', () => {
  it('finds Careers navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('Careers')
  })
})

describe('Click Careers fixed navigation link', () => {
  it('clicks the fixed navigation "Careers" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Careers").click({force: true} )
    cy.url().should('include', '/careers')
  })
})

describe('Click Careers bottom navigation link', () => {
  it('clicks the bottom navigation "Careers" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("Careers").click({force: true} )
    cy.url().should('include', '/careers')
  })
})

// Query for the Blog Navigation link 

describe('Find Blog link', () => {
  it('finds Blog navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e62olcv2').contains('Blog')
  })
})

describe('Click Blog fixed navigation link', () => {
  it('clicks the fixed navigation "Blog" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Blog").click({force: true} )
    cy.url().should('include', '/blog')
  })
})

describe('Click Blog bottom navigationlink', () => {
  it('clicks the "Blog" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv0').contains("Blog").click({force: true} )
    cy.url().should('include', '/blog')
  })
})

// Click the Play button
describe('Click Play button in fixed navigation', () => {
  it('clicks Play button in fixed navigation"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.eqnon3u1').click({force: true})
  })
})
// Query for the Contact Us Navigation link 

describe('Find Contact Us link', () => {
  it('finds Contact Us navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.get('.e12xm54s5').contains('Contact Us')
  })
})

describe('Click Contact Us link', () => {
  it('clicks the "Contact Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e12xm54s5').contains("Contact Us").click({force: true} )
    cy.url().should('include', '/contact')
  })
})

// Enter Subscription e-mail via clicking the Subscribe button (getting by Subscribe text on button)

describe('Subscribe to newsletter', () => {
  it('finds subscribe form, fills the email credentials and clicks subscribe button', () => {
    cy.visit('https://cinnamon.services/')

    // Get an input, type into it
    cy.get('[name="email"]').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('[name="email"]').should('have.value', 'fake@email.com')

    cy.get('#subscribeNewsletterButton').contains('Subscribe').click({force: true})
  })
})

// Does the same but submits the form (getting by form id)

describe('Subscribe to newsletter', () => {
  it('finds subscribe form, fills the email credentials and submits the form', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('[name="email"]').type('fake@email.com')

    cy.get('[name="email"]').should('have.value', 'fake@email.com')

    cy.get('#subscribeForm').submit()
  })
})


