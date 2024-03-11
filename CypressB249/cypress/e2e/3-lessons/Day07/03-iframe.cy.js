//support dosyasında e2e bölümünde bir eklenti eklemen lazım
describe('Iframe', () => {
    it("Iframe eklentisi ile calismak", () => {
      cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.get('h3').should('have.text','An iFrame containing the TinyMCE WYSIWYG Editor')  

        cy.frameLoaded('#mc_0_ifr') //frameLoaded()
        cy.iframe().find('p').clear() //iframe() metodu ile yukarıda tanımlanan iframe icerisine girilir
        cy.iframe().find('p').clear().type('Cypress');

        cy.get()
    });
});