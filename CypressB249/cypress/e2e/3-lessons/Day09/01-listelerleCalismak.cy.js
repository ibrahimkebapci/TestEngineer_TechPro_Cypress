describe('listelerle Çalışmak',()=>
{
    it('Kitap Yurdu - each() ve Wrap()',()=>
    {
        cy.visit('https://www.kitapyurdu.com/?gad_source=1&gclid=Cj0KCQjwqdqvBhCPARIsANrmZhMv_vI7zktYraEeNlBnvbca5Kj_1qmlHlLzIS_LpUBQKk5JCpjHRTEaAt_KEALw_wcB')
        cy.get('.bestseller-cr').find('.name').each(($kitap)=> 
        {
            cy.log(index + "- " + $kitap.text()) // 1-Kitap adı
            cy.wrap($kitap).click()
            cy.go('back')
        })
    });

    it('Tool Shop - each',()=>
    {
        cy.visit('https://www.kitapyurdu.com/?gad_source=1&gclid=Cj0KCQjwqdqvBhCPARIsANrmZhMv_vI7zktYraEeNlBnvbca5Kj_1qmlHlLzIS_LpUBQKk5JCpjHRTEaAt_KEALw_wcB')

        cy.get('.col-md-9').find('.card-title').each(($urun)) =>
        {
            cy.log($urun.text())
            cy.wrap($urun)
            .invoke('text')
            .should('exist').and('have.length.gte',3)
        
        });
    });
});