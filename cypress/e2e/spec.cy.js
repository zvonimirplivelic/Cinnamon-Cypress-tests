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

describe('Find Cinnamon Projects link', () => {
  it('finds Cinnamon Projects navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.contains('Projects')
  })
})

describe('Click Cinnamon Projects link', () => {
  it('clicks the Cinnamon "Projects" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Projects").click({force: true} )
    cy.url().should('include', '/projects')
  })
})

// Query for the Services Navigation link 

describe('Find Cinnamon Services link', () => {
  it('finds Cinnamon Services navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.contains('Services')
  })
})

describe('Click Cinnamon Services link', () => {
  it('clicks the Cinnamon "Services" link', () => {
    cy.visit('https://cinnamon.services/')
    

    cy.get('.e62olcv2').contains("Services").click({force: true} )
    cy.url().should('include', '/services')
  })
})

// Query for the About Us Navigation link 

describe('Find Cinnamon About Us link', () => {
  it('finds Cinnamon About Us navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.contains('About Us')
  })
})

describe('Click Cinnamon About Us link', () => {
  it('clicks the Cinnamon "About Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("About Us").click({force: true} )
    cy.url().should('include', '/about')

  })
})

// Query for the Careers Navigation link 

describe('Find Cinnamon Careers link', () => {
  it('finds Cinnamon Projects navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.contains('Careers')
  })
})

describe('Click Cinnamon Careers link', () => {
  it('clicks the Cinnamon "Careers" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Careers").click({force: true} )
    cy.url().should('include', '/careers')

  })
})

// Query for the Blog Navigation link 

describe('Find Cinnamon Blog link', () => {
  it('finds Cinnamon Blog navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.contains('Blog')
  })
})

describe('Click Cinnamon Blog link', () => {
  it('clicks the Cinnamon "Blog" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e62olcv2').contains("Blog").click({force: true} )
    cy.url().should('include', '/blog')

  })
})

// Query for the Contact Us Navigation link 

describe('Find Cinnamon Contact Us link', () => {
  it('finds Cinnamon Contact Us navigation link"', () => {
    cy.visit('https://cinnamon.services')

    cy.contains('Contact Us')
  })
})

describe('Click Cinnamon Contact Us link', () => {
  it('clicks the Cinnamon "Contact Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('.e12xm54s5').contains("Contact Us").click({force: true} )
    cy.url().should('include', '/contact')

  })
})

// Enter Subscription e-mail via clicking the Subscribe button (getting by Subscribe text on button)

describe('Subscribe to newsletter', () => {
  it('finds subscribe form, fills the email credentials and clicks subscribe button successfully', () => {
    cy.visit('https://cinnamon.services/')

    // Get an input, type into it
    cy.get('[name="email"]').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('[name="email"]').should('have.value', 'fake@email.com')

    cy.contains('Subscribe').click()
  })
})

// Does the same but submits the form (getting by form id)

describe('Subscribe to newsletter', () => {
  it('finds subscribe form, fills the email credentials and submits the form successfully', () => {
    cy.visit('https://cinnamon.services/')

    cy.get('[name="email"]').type('fake@email.com')

    cy.get('[name="email"]').should('have.value', 'fake@email.com')

    cy.get('#subscribeForm').submit()
  })
})


