describe('Alert', ()=>
{
    it('invoke() Metyodunu ile mouseover', ()=>
    {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('[onclick="JsAlert()"]').click()
        cy.on('Window:alert', (mesaj)=>
        {
            expect(mesaj).to.equal('I am a JS Alert')
        })
    });

});    
