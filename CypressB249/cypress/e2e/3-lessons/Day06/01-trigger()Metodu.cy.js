describe('Eylem Metotlari - select() Metodu', ()=>
{
    it('trigger() Metyodunu kullanimi', ()=>
    {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#mousehover').trigger('mouseover')
        cy.wait(3000);

        cy.get('[href = "#top"]').click({force:true});
    });
});

it('trigger() Metodunun Kullanimi - Amazon Sitesi,() =>')
{
    cy.visit('https://www.amazon.com/');

    cy.get()

}