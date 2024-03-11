describe('Ekran Görüntüsü Alma', () => {
    it("Element veya Web sayfasının görüntüsünü alma", () => {
      cy.visit('https://www.webdiriveruniversity.com/');
      cy.screenshot();


      cy.get('#login-portal').invoke('removeAttr','target').click();

      cy.get('.from').screenshot().find('#text').type('Gürkay');
      cy.get('.from').screenshot()
    });
});