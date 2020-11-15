/// <reference types="Cypress" />

describe("Interactions", () => {
  it("Navigation anchor links are working", () => {
    cy.visit("/")
    cy.scrollTo('top')
    cy.get('[data-test=menu] > :nth-child(1)').click()
    cy.wait(300)
    cy.window().then(($window) => {
      expect($window.scrollY).to.be.greaterThan(0)
    })
    cy.scrollTo('top')
  })

  it("Logo link points to home page", () => {
    cy.visit("/portfolio/przeplotki/")

    cy.get('[data-test=logo]').click()
    
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  it("Navigation points to correct sections", () => {
    cy.visit("/portfolio/przeplotki/")
    cy.get('[data-test=menu] > :nth-child(3)').click()

    cy.wait(300)
    cy.url().should('eq', Cypress.config().baseUrl + '#kontakt')
    cy.window().then(($window) => {
      expect($window.scrollY).to.be.greaterThan(300)
    })
  })
})
