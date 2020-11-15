/// <reference types="Cypress" />

const sizes = ['iphone-se2', 'ipad-2', 'samsung-note9', [1350, 700], [1905, 1012]]

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })

  sizes.forEach((size) => {
    it(`Has no detectable accessibility violations on ${size}`, () => {
      cy.viewport(...(Cypress._.isArray(size) ? size : [size]))

      cy.checkA11y()
    })
  })
})
