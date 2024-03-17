describe('listelerle Çalışmak',()=>
{
    it('Kitap Yurdu - each() ve Wrap()',()=>
    {
        let arananKelime='Java'
        cy.get('#search-input').type()
         cy.get('product-list')
            cy.wrap($urunAdi).invoke('text').then((listedekiBaslik)=>
            {
                expect(listedekiBaslik.toLowerCase()).to.include('Java')
            })
        });
});