/// <reference types="Cypress" />

describe("Get The User API Test", () => {
  it("Get the User", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/posts",
    }).then((response) => {
      cy.log(response.body[0].id);
      expect(response.status).to.eq(200);
      expect(response.body[0].user_id).to.eq(2786);
    });
  });
});
