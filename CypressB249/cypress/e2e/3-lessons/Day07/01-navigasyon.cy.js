describe('Navigasyon', () => {
    it("Browser'da Geri, Ileri ve Yenile butonlarinin Kullanimi", () => {
        cy.visit('https://www.webdriveruniversity.com/'); // Anasayfa
        cy.url().should('include','https://https://www.webdriveruniversity.com/')

        cy.get('#contact-us').invoke('removeAttr','target').click();
        cy.url().should('include','Contact us')

        cy.go('back')
        cy.url().should('include','Contact-Us')

        
        cy.get('#contact-us').invoke('removeAttr','target')

    });
});