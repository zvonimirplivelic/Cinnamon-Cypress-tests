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

describe('Click Cinnamon Projects link', () => {
  it('clicks the Cinnamon "Projects" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Projects').click({force: true})
  })
})

// Query for the Services Navigation link 

describe('Click Cinnamon Services link', () => {
  it('clicks the Cinnamon "Services" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Services').click({force: true})
  })
})

// Query for the About Us Navigation link 

describe('Click Cinnamon About Us link', () => {
  it('clicks the Cinnamon "About Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('About Us').click({force: true})
  })
})

// Query for the Careers Navigation link 

describe('Click Cinnamon Careers link', () => {
  it('clicks the Cinnamon "Careers" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Careers').click({force: true})
  })
})

// Query for the Blog Navigation link 

describe('Click Cinnamon Blog link', () => {
  it('clicks the Cinnamon "Blog" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Blog').click({force: true})
  })
})

// Query for the Contact Us Navigation link 

describe('Click Cinnamon Contact Us link', () => {
  it('clicks the Cinnamon "Contact Us" link', () => {
    cy.visit('https://cinnamon.services/')

    cy.contains('Contact Us').click({force: true})
  })
})
