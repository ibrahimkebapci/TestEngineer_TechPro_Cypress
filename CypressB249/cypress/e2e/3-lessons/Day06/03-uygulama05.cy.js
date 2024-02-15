describe('Eylem Komutları', ()=>
{
    it('invoke() Metyodunu ile mouseover', ()=>
    {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#mousehover').scrollIntoView()
        cy.get('[class = "mouse-hover-content"]').invoke('show')
        cy.get('[href = "#top"]').click()        
    });

    it('invoke() Metyodunu ile mouseover', ()=>
    {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#mousehover').scrollIntoView()
        cy.get('[class = "mouse-hover-content"]').invoke('show')
        cy.get('[href = "#top"]').click()     
    });
});
//1.43