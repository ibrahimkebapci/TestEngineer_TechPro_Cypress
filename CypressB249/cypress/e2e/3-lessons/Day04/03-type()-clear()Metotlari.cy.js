describe('Eylem Metodlari-type() ve clear() metodlari')

    it('type() veclear()metod kullanimi', ()=>
    {
        cy.visit('https://www.letskodeit.com/practice');

        // cy.get('#disable-button').click()
        // cy.get('#enable-example-input').type('Techpro',{force: true})

        cy.get('#enable-example-input').type('asdaf{selectAll}{bakspace}',{delay:1000});

        it('Kitap Yurdu Arama Motorunda Sequemce Kullanimi', ()=>
        {
            cy.visit('https://www.kitapyurud.com/');
            cy.get('#search-input').type('Cypress{Enter}');
            sdsadas
        })
    })