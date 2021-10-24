/// <reference types="Cypress" />
const portfolioSource = require("../../src/portfolioRoutes.json")

const portfolioItemsCount = portfolioSource.length
const portfolioToyItems = portfolioSource.filter(({ tags }) =>
  tags.includes("zabawki")
).length

describe("Portfolio", () => {
  it("filters items", () => {
    cy.visit("/#portfolio")
    cy.get("[data-test=portfolio-list]")
      .children()
      .its("length")
      .should("eq", portfolioItemsCount)
    cy.get("[data-test=portfolio-navigation] > :nth-child(1) a").should(
      "not.have.class",
      "active"
    )
    cy.get("[data-test=portfolio-navigation] > :nth-child(1) a").click()
    cy.get("[data-test=portfolio-navigation] > :nth-child(1) a").should(
      "have.class",
      "active"
    )
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/?kategoria=zabawki#portfolio`
    )
    cy.get("[data-test=portfolio-list]")
      .children()
      .its("length")
      .should("eq", portfolioToyItems)
  })

  it("can disable filter", () => {
    cy.visit("/?kategoria=zabawki#portfolio")
    cy.get("[data-test=portfolio-navigation] > :nth-child(1) a").should(
      "have.class",
      "active"
    )
    cy.get("[data-test=portfolio-navigation] > :nth-child(1) a").click()
    cy.get("[data-test=portfolio-navigation] > :nth-child(1) a").should(
      "not.have.class",
      "active"
    )
    cy.url().should("eq", `${Cypress.config().baseUrl}/#portfolio`)
    cy.get("[data-test=portfolio-list]")
      .children()
      .its("length")
      .should("eq", portfolioItemsCount)
  })

  it("can change filter", () => {
    cy.visit("/?kategoria=zabawki#portfolio")
    cy.get("[data-test=portfolio-navigation] > :nth-child(1) a").should(
      "have.class",
      "active"
    )
    cy.get("[data-test=portfolio-navigation] > :nth-child(2) a").should(
      "not.have.class",
      "active"
    )
    cy.get("[data-test=portfolio-navigation] > :nth-child(2) a").click()
    cy.get("[data-test=portfolio-navigation] > :nth-child(1) a").should(
      "not.have.class",
      "active"
    )
    cy.get("[data-test=portfolio-navigation] > :nth-child(2) a").should(
      "have.class",
      "active"
    )
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/?kategoria=ilustracja#portfolio`
    )
  })

  it("allows to navigate to next item in a loop", () => {
    cy.visit(`/portfolio/${portfolioSource[portfolioSource.length - 2].link}`)
    cy.get('[data-test-id="nextPortfolioItem"]').click()
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/portfolio/${portfolioSource[portfolioSource.length - 1].link}/`
    )
    cy.get('[data-test-id="nextPortfolioItem"]').click()
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/portfolio/${portfolioSource[0].link}/`
    )
  })
})
