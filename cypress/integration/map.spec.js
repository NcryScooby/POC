/// <reference types="cypress" />

describe('Map', () => {
    it ('Ônibus', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=opcoes]').select('Ônibus').should('have.value', 'Ônibus');
    });

    it ('Lotação', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=opcoes]').select('Lotação').should('have.value', 'Lotação');
    }); 
});