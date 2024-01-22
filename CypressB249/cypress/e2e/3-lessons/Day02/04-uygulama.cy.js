describe('Uygulama-02', () => {
    it('Temel Fonksiyonlarin Kullanimi-Amazon Örneği', () => {
        // https://www.amazon.com sitesine git
                // Arama sonuç sayfasında 'iphone' kelimesinin arandığını doğrula        
        cy.visit('https://www.amazon.com');

                // Arama motorunda 'iphone' kelimesini ara
        cy.get('#twotabsearchtextbox').type('iphone');
        cy.get('#nav-search-submit-button').click();
        

        // arama sonuç sayfasında'iphone  case '
        cy.get('.a-color-state').should('contain','iphone');
    });
});