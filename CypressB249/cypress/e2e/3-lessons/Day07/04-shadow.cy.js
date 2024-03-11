describe('Shadow root Sorununu Yonetme', () => {
    it("shadow()ve find() metodlarini kullanarak shadow root", () => {
      cy.on('uncaughtexpaction',(err,runnable)=>{return false})
      cy.visit('https://www.mercedes-benz.co.uk/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE')
    
    cy.get('[settings-ic="fp"]')
    
    });
});