describe("Api Chaining", () => {
  it("Check The All Title of the api", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("API_URL") + "/users",
    })
      .then((response) => {
        return response.body;
      })
      .then((body) => {
        for (let i = 0; i < body.length; i++) {
          cy.log(body[i].name);
          expect(body[i].id).to.be.a("number");
          expect(body[i].name).to.be.a("string");
        }
      });
  });
});
