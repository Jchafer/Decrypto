/// <reference types="cypress" />

it('Comprobar que carga el primer elemento de la tabla', () =>{
    cy.visit('http://localhost:4200');

    cy.get('tbody > :nth-child(1) > :nth-child(1)');
})

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
   
})