/// <reference types="Cypress" />

describe("Create User API Test", () => {
  let UniqueEmail = "test" + Math.random() + "@gmail.com";
  let name = "Rashidul Hasan";
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
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(201);
      expect(response.body.email).to.eq(UniqueEmail);
      expect(response.body.name).not.to.eq(undefined);
      expect(response.body.name).to.eq(name);
      expect(response.body.status).to.eq("active");
      expect(response).to.have.property("headers");
    });
  });
});
