/// <reference types="Cypress" />

describe("Delete the User", () => {
  let UniqueEmail = "test" + Math.random() + "@gmail.com";
  let name = "Rashidul Hasan";
  let userID = "";
  it("Create the User", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("API_URL") + "/users",
      headers: {
        Authorization: "Bearer " + Cypress.env("API_TOKEN"),
      },
      body: {
        name: name,
        email: UniqueEmail,
        gender: "female",
        status: "active",
      },
    }).then((response) => {
      userID = response.body.id;
      cy.log(userID);
      //cy.wrap(userID).as("userID");
    });
  });

  it("Delete the User and validate", () => {
    cy.request({
      method: "DELETE",
      url: Cypress.env("API_URL") + "/users/" + userID,
      headers: {
        Authorization: "Bearer " + Cypress.env("API_TOKEN"),
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      // assert value is not present in the response body
      expect(response.body.name).to.not.eq(name);
    });
  });
});
