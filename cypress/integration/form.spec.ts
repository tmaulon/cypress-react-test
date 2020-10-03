//@ts-ignore

describe("Form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("it focuses the input", () => {
    cy.focused().should("have.class", "form-control");
  });

  it("accepts input", () => {
    const value = "Learn about Cypress";
    cy.get(".form-control").type(value).should("have.value", value);
  });

  it("displays list of todo", () => {
    cy.get("li").should("have.length", 2);
  });

  it("add new todo", () => {
    const value = "Learn about Cypress";
    cy.get(".form-control")
      .type(value)
      .type("{enter}")
      .get("li")
      .should("have.length", 3);
  });

  it("remove todo", () => {
    cy.get("li")
      .first()
      .find("button")
      .click()
      .get("li")
      .should("have.length", 1);
  });

  it("deletes all todo", () => {
    cy.get("li")
      .first()
      .find(".btn-danger")
      .click()
      .get("li")
      .first()
      .find(".btn-danger")
      .click()
      .get(".no-task")
      .should("have.text", "All of your tasks are complete. Nicely done!");
  });
});
