/*
https://automationteststore.com adresini ziyaret et
Login ol
Login Name = techpro
Password = techpro!
"Login" butonuna tıkla
Edit account details butonuna tıkla
Formdaki dolu olan alanları temizle
*/
describe('Odev-02',()=>
{
    cy.visit('https://automationteststore.com');

    cy.contains('Login or Register');

    cy.get('#loginFrm').within(()=>
    {
        cy.get('#id=loginFrm_loginname').type('techpro')
        cy.get('#loginFrm_password').type('techpro!')
        cy.get('button').click()
    })
});