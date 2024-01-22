describe('Temel Test Fonksiyonları', ()=>
{
    it('visit(), get(), click()',()=>
    {
        cy.visit('URL');
        //Visit() fonksiyonu bir URL'yi ziyaret etmek için kullanılır

        cy.get('locator').click();
        // get() fonksiyonu bir veya birden çok elementi seçmek için kullanılır
        // click() fonksiyonu belirli bir elemente tıklamak için kullanılır

        cy.get('locator').type('Metin').should('Doğrulaycı','Doğrulancak metin')
        //type() fonksiyonu belirli bir input veya textarea alanına
        //should() fonksiyonu belirli bir koşulu doğrulamak için kullanılır
    });       
});