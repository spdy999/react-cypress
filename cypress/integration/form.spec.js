describe('Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('it focuses the input', () => {
    cy.focused().should('have.class', 'form-control');
  });
});
