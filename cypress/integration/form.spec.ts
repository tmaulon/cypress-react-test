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

  // it("takes a screenshot", () => {
  //   // screenshot will be saved as
  //   // cypress/screenshots/users.spec.js/my tests -- takes a screenshot.png
  //   cy.screenshot();
  // });

  it("viewport-screenshot", () => {
    // https://on.cypress.io/viewport

    cy.viewport(320, 480);
    cy.screenshot("viewport/my-todo-app-320x480");
    cy.wait(200);

    cy.viewport(2999, 2999);
    cy.screenshot("viewport/my-todo-app-2999x2999");
    cy.wait(200);

    cy.viewport("macbook-15");
    cy.screenshot("viewport/my-todo-app-macbook-15");
    cy.wait(200);

    cy.viewport("macbook-13");
    cy.screenshot("viewport/my-todo-app-macbook-13");
    cy.wait(200);

    cy.viewport("macbook-11");
    cy.screenshot("viewport/my-todo-app-macbook-11");
    cy.wait(200);

    cy.viewport("ipad-2");
    cy.screenshot("viewport/my-todo-app-ipad-2");
    cy.wait(200);

    cy.viewport("ipad-mini");
    cy.screenshot("viewport/my-todo-app-ipad-mini");
    cy.wait(200);

    cy.viewport("iphone-6+");
    cy.screenshot("viewport/my-todo-app-ipad-6-plus");
    cy.wait(200);

    cy.viewport("iphone-6");
    cy.screenshot("viewport/my-todo-app-ipad-6");
    cy.wait(200);

    cy.viewport("iphone-5");
    cy.screenshot("viewport/my-todo-app-ipad-5");
    cy.wait(200);

    cy.viewport("iphone-4");
    cy.screenshot("viewport/my-todo-app-ipad-4");
    cy.wait(200);

    cy.viewport("iphone-3");
    cy.screenshot("viewport/my-todo-app-ipad-3");
    cy.wait(200);

    cy.viewport("ipad-2", "portrait");
    cy.screenshot("viewport/my-todo-app-ipad-2-portrait");
    cy.wait(200);

    cy.viewport("iphone-4", "landscape");
    cy.screenshot("viewport/my-todo-app-iphone-4-landscape");
    cy.wait(200);
  });
});
