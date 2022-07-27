/// <reference types="Cypress" />

describe("Get The User API Test", () => {
  it("Get the User", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("API_URL") + "/posts",
    }).then((response) => {
      cy.log(response.body[0].id);
      expect(response.status).to.eq(200);
      
    });
  });
});
