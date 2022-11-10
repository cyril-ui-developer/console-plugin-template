  describe('Example page plugin test', () => {
    before(() => {
      cy.login().then(()=> cy.visit('/example')      );
     // 
      });

  it('Verify the url', () => {
  cy.url().should(
        'include',
        '/example',
      );
    });
  it('Verify the example page title', () => {
    cy.byTestID('example-page-title').should('contain', 'Hello, Plugin!');
  });

    after(() => {
     cy.logout();
    });
  });