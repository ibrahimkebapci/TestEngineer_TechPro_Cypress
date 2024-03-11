describe('uygulama 06', () => {
    it('tool Shop - Geçerli verilerle kayıt olunabilmeli', () => {
     cy.visit('https://www.kitapyurdu.com/index.php?route=account/register')
        cy.get('[data-test = "nav-sign-in"]').click();
        cy.get('[data-test = "nav-sign-in"]').click();
        let email=faker.internet.email()
        cy.writeFile()
        

        cy.get('#city').type(faker.location.city());

        //cy.get(select(faker.number.int({ faker min:0, max:60}))))
        cy.get('button').click()

            it('',()=>
            {

            })
    });
});