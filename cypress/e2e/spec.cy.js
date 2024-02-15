describe('Visit Cinnamon services website', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('finds fixed navigation Projects link', () => {
    cy.getFixedNavElement(/Projects/i)
  })

  it('finds bottom navigation Projectslink', () => {
    cy.getBottomNavElement(/Projects/i)
  })

  it('clicks fixed navigation Projects link', () => {
    cy.getFixedNavElement(/Projects/i).click({force:true})
    cy.url().should('include', '/projects')
  })

  it('clicks bottom navigation Projects link', () => {
    cy.getBottomNavElement(/Projects/i).click({force:true})
    cy.url().should('include', '/projects')
  })

  it('finds fixed navigation Services link', () => {
    cy.getFixedNavElement(/Services/i)
  })
  
  it('finds bottom navigation Services link', () => {
    cy.getBottomNavElement(/Services/i)
  })
  
  it('clicks fixed navigation Services link', () => {
    cy.getFixedNavElement(/Services/i).click({force:true})
    cy.url().should('include', '/services')
  })

  it('clicks bottom navigation Services link', () => {
    cy.getBottomNavElement(/Services/i).click({force:true})
    cy.url().should('include', '/services')
  })

  it('finds fixed navigation About Us link', () => {
    cy.getFixedNavElement(/About Us/i)
  })
  
  it('finds bottom navigation About Us link', () => {
    cy.getBottomNavElement(/About Us/i)
  })
  
  it('clicks fixed navigation About Us link', () => {
    cy.getFixedNavElement(/About Us/i).click({force: true} )
    cy.url().should('include', '/about')
  })
  
  it('clicks bottom navigation About Us link', () => {
    cy.getBottomNavElement(/About Us/i).click({force: true} )
    cy.url().should('include', '/about')
  })

  it('finds fixed navigation Careers link', () => {
    cy.getFixedNavElement(/Careers/i)
  })

  it('finds bottom navigation Careers link', () => {
    cy.getBottomNavElement(/Careers/i)
  })

  it('clicks fixed navigation Careers link', () => {
    cy.getFixedNavElement(/Careers/i).click({force: true} )
    cy.url().should('include', '/careers')
  })

  it('clicks bottom navigation Careers link', () => {
    cy.getBottomNavElement(/Careers/i).click({force: true} )
    cy.url().should('include', '/careers')
  })
  
  it('finds fixed navigation Blog link', () => {
    cy.getFixedNavElement(/Blog/i)
  })

  it('finds bottom navigation Blog link', () => {
    cy.getBottomNavElement(/Blog/i)
  })
  
  it('clicks fixed navigation Blog link', () => {
    cy.getFixedNavElement(/Blog/i).click({force: true} )
    cy.url().should('include', '/blog')
  })
  
  it('clicks bottom navigation Blog link', () => {
    cy.getBottomNavElement(/Blog/i).click({force: true} )
    cy.url().should('include', '/blog')
  })
  
  it('clicks fixed navigation Play button', () => {
    cy.get('.eqnon3u1').click({force: true})
  })
  
  it('finds fixed navigation Contact Us link', () => {
    cy.get('.e12xm54s5').contains(/Contact Us/i)
  })

  it('clicks fixed navigation Contact Us link', () => {
    cy.get('.e12xm54s5').contains("Contact Us").click({force: true} )
    cy.url().should('include', '/contact')
  })

  it('finds subscribe form, fills the email credentials and clicks subscribe button', () => {
    cy.get('[name="email"]').type('fake@email.com')
  
    cy.get('[name="email"]').should('have.value', 'fake@email.com')
  
    cy.get('#subscribeNewsletterButton').contains('Subscribe').click({force: true})
  })

  it('finds subscribe form, fills the email credentials and submits the form', () => {
    cy.get('[name="email"]').type('fake@email.com')
  
    cy.get('[name="email"]').should('have.value', 'fake@email.com')
  
    cy.get('#subscribeForm').submit()
    })
})
