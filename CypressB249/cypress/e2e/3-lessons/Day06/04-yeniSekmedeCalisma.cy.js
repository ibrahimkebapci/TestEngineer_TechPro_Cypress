describe('Yeni Sekmede Calisma', ()=> 
{
    it("target attribute'unu kaldirarak yeni sekmede calisma",()=>
    {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.get('#search').type('Cypress')
    })



});