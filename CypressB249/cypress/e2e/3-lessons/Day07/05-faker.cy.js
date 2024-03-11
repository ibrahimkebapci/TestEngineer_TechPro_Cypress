const{faker} = require("@faker-js/faker");

let fakerName = faker.person.firstName()
let fakerLastName = faker.person.lastName()
let fakerEmail = faker.internet.email()
let fakerPassword = faker.internet.password()

describe('FakerJS Kullanimi', () => {
    it("FakerJS ile Ornek Test", () => {
     cy.visit('https://www.kitapyurdu.com/index.php?route=account/register')

    cy.get('#register-form').within(()=>
    {
        cy.get('#register-name').type(fakerName)
        cy.get('#register-lastname').type(fakerPassword)
        cy.get('#register-email').type(fakerLastName)
    })
    });

    it("Eposta Validation", () => {
        cy.visit('https://www.automationexceise.com/login')
   
       cy.get('#register-form').within(()=>
       {
           cy.get(['#register-name']).type(fakerName)
           cy.get(['#register-name']).type(fakePassword)
           
       })
       });

});