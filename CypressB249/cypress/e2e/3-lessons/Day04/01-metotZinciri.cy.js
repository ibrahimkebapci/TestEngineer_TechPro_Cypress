/*
https://automationteststore.com sitesine git
'Contact Us' bağlantısına tıkla
Kayıt formunu tamamla
Kaydın gerçekleştiğini doğrula
*/

describe('Metot Zinciri', ()=>
{
    it('Metot Zinciri Kullanimi', ()=>
    {
        cy.visit('https://automationteststore.com');

        
        cy.get('.info_links_footer').contains('Contact us').click();

        cy.get('#ContactUsFrm').within(()=>
        {
            cy.get('#ContactUsFrm_first_name').type('ibrahim');
            cy.get('#ContactUsFrm_email').type('ibrahim@mail.com');
            cy.get('#ContactUsFrm_enquiry').type('Selamlar');
            cy.get('[title="Submit"]').click()
        })

        cy.get('.mb40').find('p').should('not exist').and('be visable');
        //Formun içine girmek için within
   
        
    });
});