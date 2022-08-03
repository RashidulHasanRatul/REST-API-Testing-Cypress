/// <reference types="Cypress" />

describe("Update the User", () => {
  let UniqueEmail = "test" + Math.random() + "@gmail.com";
  let name = "Rashidul Hasan";
  let UpdateName = "Rashidul Hasan Updated2";
  let userID = "";
  let updateEmail = "updateEmail" + Math.random() + "@gmail.com";
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
      cy.writeFile("cypress/fixtures/createdUser.json", response.body);

      //cy.log(JSON.stringify(response));
      expect(response.status).to.eq(201);
      expect(response.body.email).to.eq(UniqueEmail);
      expect(response.body.name).not.to.eq(undefined);
      expect(response.body.name).to.eq(name);
      expect(response.body.status).to.eq("active");
      expect(response).to.have.property("headers");
      userID = response.body.id;
      cy.log(userID);
      //cy.wrap(userID).as("userID");
    });
  });

  it("Update the User", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("API_URL") + "/users",
      headers: {
        Authorization: "Bearer " + Cypress.env("API_TOKEN"),
      },
      body: {
        name: UpdateName,
        email: updateEmail,
        gender: "female",
        status: "active",
      },
    }).then((response) => {
      cy.writeFile("cypress/fixtures/createdUser.json", response.body);

      //cy.log(JSON.stringify(response));
      expect(response.status).to.eq(201);
      cy.log(response.body.name);
      userID = response.body.id;
      cy.log(userID);
      //cy.wrap(userID).as("userID");
    });
  });

  it("Should Get the newly Created user and validate", () => {
    cy.log("userID: " + userID);
    cy.request({
      method: "GET",
      url: Cypress.env("API_URL") + "/users/" + userID,
      headers: {
        Authorization: "Bearer " + Cypress.env("API_TOKEN"),
      },
    }).then((response) => {
      cy.log(response.body.id);
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(UpdateName);
      cy.log(response.body.name);
    });
  });
});
