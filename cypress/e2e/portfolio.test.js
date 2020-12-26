/// <reference types="Cypress" />

describe("Portfolio", () => {
  it("Portfolio filtering is working", () => {
    cy.visit("/#portfolio")
    cy.get('[data-test=portfolio-list]').children().its('length').should('eq', 4)
    cy.get('[data-test=portfolio-navigation] > :nth-child(1)').click()
    cy.wait(300)
    cy.url().should('eq', `${Cypress.config().baseUrl}/?kategoria=zabawki#portfolio`)
    cy.get('[data-test=portfolio-list]').children().its('length').should('eq', 2)
    cy.get('[data-test=portfolio-navigation] > :nth-child(1)').click()
    cy.wait(300)
    cy.url().should('eq', `${Cypress.config().baseUrl}/#portfolio`)
    cy.get('[data-test=portfolio-list]').children().its('length').should('eq', 4)
  })
})
