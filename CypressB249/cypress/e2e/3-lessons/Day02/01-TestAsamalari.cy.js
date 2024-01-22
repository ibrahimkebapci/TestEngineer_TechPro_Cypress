describe('Test Aşamaları', () => {
    it('Temel Komutlar', () => {
        cy.visit('https://www.kitapyurdu.com')// Given ile site ziyaret edilir
        cy.contains('Üye Ol').click() // When --> Eylemi gerçekleştirme
        cy.url().should('contain', 'account/register')
    });
});