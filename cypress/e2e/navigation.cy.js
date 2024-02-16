describe('Visit Cinnamon services website', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('/')
  })

  it('finds fixed navigation Projects link', () => {
    cy.getFixedNavElement(/Projects/i)
  })

  it('finds bottom navigation Projects link', () => {
    cy.getBottomNavElement(/Projects/i)
  })

  it('clicks fixed navigation Projects link', () => {
    cy.getFixedNavElement(/Projects/i).click()
    cy.location("pathname").should('contain', '/projects')
  })

  it('clicks bottom navigation Projects link', () => {
    cy.scrollTo('bottom') 
    cy.getBottomNavElement(/Projects/i).click({force:true})
    cy.location("pathname").should('contain', '/projects')
  })

  it('finds fixed navigation Services link', () => {
    cy.getFixedNavElement(/Services/i)
  })
  
  it('finds bottom navigation Services link', () => {
    cy.getBottomNavElement(/Services/i)
  })
  
  it('clicks fixed navigation Services link', () => {
    cy.getFixedNavElement(/Services/i).click({force:true})
    cy.location("pathname").should('contain', '/services')
  })

  it('clicks bottom navigation Services link', () => {
    cy.getBottomNavElement(/Services/i).click({force:true})
    cy.location("pathname").should('contain', '/services')
  })

  it('finds fixed navigation About Us link', () => {
    cy.getFixedNavElement(/About Us/i)
  })
  
  it('finds bottom navigation About Us link', () => {
    cy.getBottomNavElement(/About Us/i)
  })
  
  it('clicks fixed navigation About Us link', () => {
    cy.getFixedNavElement(/About Us/i).click({force: true} )
    cy.location("pathname").should('contain', '/about')
  })
  
  it('clicks bottom navigation About Us link', () => {
    cy.getBottomNavElement(/About Us/i).click({force: true} )
    cy.location("pathname").should('contain', '/about')
  })

  it('finds fixed navigation Careers link', () => {
    cy.getFixedNavElement(/Careers/i)
  })

  it('finds bottom navigation Careers link', () => {
    cy.getBottomNavElement(/Careers/i)
  })

  it('clicks fixed navigation Careers link', () => {
    cy.getFixedNavElement(/Careers/i).click({force: true} )
    cy.location("pathname").should('contain', '/careers')
  })

  it('clicks bottom navigation Careers link', () => {
    cy.getBottomNavElement(/Careers/i).click({force: true} )
    cy.location("pathname").should('contain', '/careers')
  })
  
  it('finds fixed navigation Blog link', () => {
    cy.getFixedNavElement(/Blog/i)
  })

  it('finds bottom navigation Blog link', () => {
    cy.getBottomNavElement(/Blog/i)
  })
  
  it('clicks fixed navigation Blog link', () => {
    cy.getFixedNavElement(/Blog/i).click({force: true} )
    cy.location("pathname").should('contain', '/blog')
  })
  
  it('clicks bottom navigation Blog link', () => {
    cy.getBottomNavElement(/Blog/i).click({force: true} )
    cy.location("pathname").should('contain', '/blog')
  })
  
  it('clicks fixed navigation Play button', () => {
    cy.get('.eqnon3u1').click({force: true})
  })
  
  it('finds fixed navigation Contact Us link', () => {
    cy.get('.e12xm54s5').contains(/Contact Us/i)
  })

  it('clicks fixed navigation Contact Us link', () => {
    cy.get('.e12xm54s5').contains("Contact Us").click({force: true} )
    cy.location("pathname").should('contain', '/contact')
  })
})
