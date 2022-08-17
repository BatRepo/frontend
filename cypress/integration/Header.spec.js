/// <reference types="Cypress" /> 

describe('BatHeader', function() {
    this.beforeEach(function() {
        cy.visit('http://localhost:3000')
    })
    // it é o teste case
    it('Verifica o titulo da aplicação', function() {
        cy.title().should('be.equal', 'BatForms')
    })
    it('Clicka nos botões', function() {
      cy.get('#button1').click()
      cy.get('#button2').click()
      cy.get('#button3').click()
      cy.get('#button4').click()
      cy.get('#button5').click()
  })
  it('Verifica se Nome Logo está visivel', function() {
    cy.get('#titleLogo').should('be.visible')
  
  })
  });