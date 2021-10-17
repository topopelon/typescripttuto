/// <reference types="cypress" />
import "cypress-react-selector";
import { config } from "../../../src/core/config/constants";
import { mock } from "./mocks";

//Change tests timeout
//Cypress.config('defaultCommandTimeout', 150000)
describe("First cypress test", () => {
  before(() => {
    cy.log("Before!");
  });

  it("should show a list of titles with no children", () => {
    // Given
    mock.get(config.baseURL1 + "/todos", []).as("getTitles");
    cy.visit("/");
    cy.waitForReact();
    // When
    cy.wait(["@getTitles"]);
    // Then
    cy.get("ul").children().should("not.exist");
    cy.react("Alert", { props: { type: "error" } }).should("not.exist");
  });

  it("should show alert error", () => {
    // Given
    mock.get(config.baseURL1 + "/todos", [{ a: "sda" }]).as("getTitles");
    cy.visit("/");
    cy.waitForReact();
    // When
    cy.wait(["@getTitles"]);
    // Then
    //cy.get("ul").children().should("not.exist");
    cy.react("Alert", { props: { type: "error" } }).should("exist");
  });

  // Runs after all tests
  after(() => {
    cy.log("Finished!");
  });
});
