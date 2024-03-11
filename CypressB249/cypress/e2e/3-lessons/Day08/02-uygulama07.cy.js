describe('uygulama 06', () => {
    it('Tool Shop - Gecerli veriler'()
    
        cy.visit('https://www.kitapyurdu.com/index.php?route=account/register');

        cy.get('[data-test = "nav-sign-in"]').click();

        cy.readFile('dosyalar\email.txt').then((email)=>
        {
            cy.get('#email').type(email)
        })

        cy.readFile('dosyalar\sifre.txt').then((sifre)=>
        {
            cy.get('#password').type(sifirla)
        })

       cy.get('[data-test = password-error]') 
    
        cy.get('[data-test = "register-from"]')

    cy.readFile('dosyalar/email.txt').then((email)=>
    {
        cy.get('#email').type()
    })
    
    it('Favori bir ürün eklendiğinde favori sayfasında görüntüleme',())
    {
        cy.visit('https://practicesoftwaretesting.com/');
        cy.get('.col').should('exist').and('include','There')
        
    }    


});