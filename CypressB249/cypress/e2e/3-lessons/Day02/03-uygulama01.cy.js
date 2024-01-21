// https://www.kitapyurdu.com/

describe('Uygulama-01', ()=>
{
    it('Temel Fonksiyonları Kullanımı',()=>
    {
        // siteye git
        cy.visit('https://www.kitapyurdu.com/');
        
        //üye ola tıkla
        cy.get('.register > a').click();

    })
})