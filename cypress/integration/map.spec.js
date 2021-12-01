/// <reference types="cypress" />

describe('Map', () => {
    it ('Ônibus', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=opcoes]').select('Ônibus');
    });

    it ('Lotação', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=opcoes]').select('Lotação');
    });
});