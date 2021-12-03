/// <reference types="cypress" />

describe('Map', () => {
    it ('Ônibus', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=options]').select('Ônibus').should('have.value', 'Ônibus');
    });

    it ('Lotação', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=options]').select('Lotação').should('have.value', 'Lotação');
    }); 
});