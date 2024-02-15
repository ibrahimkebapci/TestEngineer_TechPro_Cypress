describe('CSS Selector', ()=>
{
    it('CSS Selector ile Konum Belirleme',()=>
    {
        cy.visit('https://www.kitapyurdu.com/');
        
        cy.get('#search-input');

        cy.get('.logo-icon');

        cy.get('[name = "search_keyword"]');
    
        cy.get('[classs= "top-menu fr"]');

        cy.get('input[name ="search_keyword"]');

        cy.get('input[name ="search_keyword"][type = "text"]');

    });
});