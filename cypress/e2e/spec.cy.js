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
  it('finds the Cinnamon "Projects" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Projects')
  })
})

// Query for the Services Navigation link 

describe('Find Cinnamon Services link', () => {
  it('finds the Cinnamon "Services" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Services')
  })
})

// Query for the About Us Navigation link 

describe('Find Cinnamon About Us link', () => {
  it('finds the Cinnamon "About Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('About Us')
  })
})

// Query for the Careers Navigation link 

describe('Find Cinnamon Careers link', () => {
  it('finds the Cinnamon "Careers" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Careers')
  })
})

// Query for the Blog Navigation link 

describe('Find Cinnamon Blog link', () => {
  it('finds the Cinnamon "Blog" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Blog')
  })
})

// Query for the Contact Us Navigation link 

describe('Find Cinnamon Contact Us link', () => {
  it('finds the Cinnamon "Contact Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Contact Us')
  })
})
