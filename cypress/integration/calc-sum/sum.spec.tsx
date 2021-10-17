/// <reference types="cypress" />
import "cypress-react-selector";

//Change tests timeout
//Cypress.config('defaultCommandTimeout', 150000)
describe("Sum integration tests", () => {
  const p = [{ a: 3, b: 3, res: 6 }];
  // Simple parametrized test
  p.forEach((e) => {
    it(`should type ${e.a} and ${e.b} and get ${e.res}`, () => {
      // Given
      cy.visit("/");
      cy.waitForReact();
      // When
      // Get react components by id (inputs both), clear and type digits to add
      cy.get("#num1").clear();
      cy.get("#num1").type(e.a.toString());
      cy.get("#num2").clear();
      cy.get("#num2").type(e.b.toString());
      // Get react component with contains text [Calcular] and click it
      cy.contains("Calcular").click();
      // Check if there is a text [res] on screen
      // Then
      cy.react("Badge").should("contain.text", e.res.toString());
      // get React component named [Badge] and get props
      cy.react("Badge", { props: { count: e.res } }).should("exist");
    });
  });
});
