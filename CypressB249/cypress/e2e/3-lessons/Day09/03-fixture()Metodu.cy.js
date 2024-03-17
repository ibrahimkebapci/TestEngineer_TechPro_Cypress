describe('Fixture()Metodu ',()=>
{
    it('Kitap Yurdu - Fixture()',()=>
    {
        cy.fixture('KitapYurdu').then((veriDosyasi)=> 
        {
            cy.get('#search-input').type(veriDosyasi.kelime)
        
        
        })
       
        });
});