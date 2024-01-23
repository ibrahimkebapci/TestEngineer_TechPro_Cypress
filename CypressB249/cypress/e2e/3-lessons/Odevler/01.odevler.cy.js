describe('Odev-01', ()=>
{
    it('CSS Selector KUllanimi',()=>
    {
       cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        
       cy.get('[name="first_name"]').type('ibrahim');
       cy.get('[name="last_name"]').type('Birinci');
       
        cy.get('[name="message"]').type('hello World');

        cy.get('[value=SUBMIT]').click();

        cy.get('h1').should('have.text','Thank you');
        //have.text vir elemente ait metinin elemente ait metinin
    });
});