describe('Eylem Metotları - click() Metodu')
    it('click',()=>
    {
        // cy.get('#onetap').click();

        // cy.get('#opentab').click('topLeft');
        // cy.get('#opentab').click('top');
        // cy.get('#opentab').click('topright');
        // cy.get('#opentab').click('left');
        // cy.get('#opentab').click('center');
        // cy.get('#opentab').click('right');
        // cy.get('#opentab').click('bottomLeft');
        // cy.get('#opentab').click('bottom');
        // cy.get('#opentab').click('bottomRight');

        // cy.get('#opentab').click(-20,-20,{force:true});

        // Birden çok elemente tıklama

        // cy.get('[type = "checkbox"][name="cars"]').click()
    
        cy.get('#mousehover').click({scrollBehavior:'center'})
        })