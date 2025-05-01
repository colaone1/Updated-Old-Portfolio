describe('Portfolio Website', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the homepage successfully', () => {
    cy.get('h1').should('contain', 'Developer & Designer');
  });

  it('has working navigation', () => {
    cy.get('.nav-button').contains('Projects').click();
    cy.url().should('include', '/projects.html');
    
    cy.get('.nav-button').contains('About').click();
    cy.url().should('include', '/about-page.html');
    
    cy.get('.nav-button').contains('Contact').click();
    cy.url().should('include', '/contact-us.html');
  });

  it('has accessible skip link', () => {
    cy.get('a[href="#main-content"]').click();
    cy.focused().should('have.attr', 'id', 'main-content');
  });

  it('displays project cards correctly', () => {
    cy.get('.projects-section article').should('have.length.at.least', 1);
    cy.get('.projects-section article').first().should('be.visible');
  });

  it('handles reduced motion preferences', () => {
    cy.window().then((win) => {
      cy.stub(win, 'matchMedia').returns({
        matches: true,
        addListener: () => {},
        removeListener: () => {},
      });
    });
    
    cy.reload();
    cy.get('.animate-fadeInUp').should('have.css', 'animation', 'none');
  });

  it('has working social media links', () => {
    cy.get('footer a[href*="github.com"]').should('have.attr', 'target', '_blank');
    cy.get('footer a[href*="linkedin.com"]').should('have.attr', 'target', '_blank');
    cy.get('footer a[href^="mailto:"]').should('have.attr', 'href').and('include', 'mailto:');
  });
}); 