describe('Eylem Metodu',()=>
{
    it('scrollIntoView() Metodu',()=>
    {
        cy.get('#actions').scrollIntoView()

        cy.get('#action').scrollIntoView({duration:2000})
        
    });
});