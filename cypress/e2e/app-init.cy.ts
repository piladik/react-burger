describe("App initialization", () => {
  it("loads ingredients on homepage", () => {
    cy.seedAndVisit();

    cy.get("[data-test='Булки'] > div").should("have.length", 2);
    cy.get("[data-test='Соусы'] > div").should("have.length", 4);
    cy.get("[data-test='Начинки'] > div").should("have.length", 9);
  });
});
