// https://www.kitapyurdu.com/

describe('Uygulama-01', ()=>
{
    it('Temel Fonksiyonları Kullanımı',()=>
    {
        // siteye git
        cy.visit('https://www.kitapyurdu.com/');
        
        //üye ola tıkla
        cy.get('.register > a').click();

        // kayıt formunda bir isim yaz ve doğrula

        cy.get('#register-name').type('ibrahim').should('have.value','ibrahim');
        
    });
});