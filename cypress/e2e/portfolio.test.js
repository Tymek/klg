/// <reference types="Cypress" />

describe("Portfolio", () => {
  it("filters items", () => {
    cy.visit("/#portfolio")
    cy.get('[data-test=portfolio-list]').children().its('length').should('eq', 5)
    cy.get('[data-test=portfolio-navigation] > :nth-child(1) a').should('not.have.class', 'active')
    cy.get('[data-test=portfolio-navigation] > :nth-child(1) a').click()
    cy.get('[data-test=portfolio-navigation] > :nth-child(1) a').should('have.class', 'active')
    cy.url().should('eq', `${Cypress.config().baseUrl}/?kategoria=zabawki#portfolio`)
    cy.get('[data-test=portfolio-list]').children().its('length').should('eq', 2)
  })

  it("can disable filter", () => {
    cy.visit("/?kategoria=zabawki#portfolio")
    cy.get('[data-test=portfolio-navigation] > :nth-child(1) a').should('have.class', 'active')
    cy.get('[data-test=portfolio-navigation] > :nth-child(1) a').click()
    cy.get('[data-test=portfolio-navigation] > :nth-child(1) a').should('not.have.class', 'active')
    cy.url().should('eq', `${Cypress.config().baseUrl}/#portfolio`)
    cy.get('[data-test=portfolio-list]').children().its('length').should('eq', 5)
  })

  it("can change filter", () => {
    cy.visit("/?kategoria=zabawki#portfolio")
    cy.get('[data-test=portfolio-navigation] > :nth-child(1) a').should('have.class', 'active')
    cy.get('[data-test=portfolio-navigation] > :nth-child(2) a').should('not.have.class', 'active')
    cy.get('[data-test=portfolio-navigation] > :nth-child(2) a').click()
    cy.get('[data-test=portfolio-navigation] > :nth-child(1) a').should('not.have.class', 'active')
    cy.get('[data-test=portfolio-navigation] > :nth-child(2) a').should('have.class', 'active')
    cy.url().should('eq', `${Cypress.config().baseUrl}/?kategoria=ilustracja#portfolio`)
  })
})
