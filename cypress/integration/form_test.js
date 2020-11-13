describe("Users app", () => {
    beforeEach(() => {
        // arbitrary code you want running before your tests start: setup
        cy.visit("http://localhost:3000/pizza");
      });

    const fnameInput = () => cy.get("input[name='fname']");
    const lnameInput = () => cy.get("input[name='lname']");
    const specialInstructions = () => cy.get("input[name='specialInstructions']");
    const pepperoni = () => cy.get("input[name='pepperoni']");
    const sausage = () => cy.get("input[name='sausage']");
    const spicySausage = () => cy.get("input[name='spicySausage']");
    const submitButton = () => cy.get("#submitBtn");
    const sauce = () => cy.get("input[name='sauce']");
    const size = () => cy.get("select[name='size']");

  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("checks functionality of all text inputs", () => {
    fnameInput().should("have.value", "");
    specialInstructions().should("have.value", "");
    lnameInput().should("have.value", "");
    fnameInput().type("george");
    lnameInput().type("bush");
    specialInstructions().type("napkins please")
    fnameInput().should("have.value", "george");
    lnameInput().should("have.value", "bush");
    specialInstructions().should("have.value", "napkins please");
  });

  it("checks that you can select multiple toppings", () => {
    pepperoni().should("exist");
    pepperoni().should("not.be.checked");
    pepperoni().check();
    pepperoni().should("be.checked");

    sausage().should("exist");
    sausage().should("not.be.checked");
    sausage().check();
    sausage().should("be.checked");

    spicySausage().should("exist");
    spicySausage().should("not.be.checked");
    spicySausage().check();
    spicySausage().should("be.checked");
  });

  it("checks that you can submit the form", () => {
    submitButton().should("exist");
    submitButton().should("be.disabled");
    fnameInput().type("george");
    lnameInput().type("bush");
    submitButton().should("be.disabled");
    sauce().check();
    submitButton().should("be.disabled");
    size().should("exist");
    size().select('small');
    submitButton().should("not.be.disabled");
  });
});
