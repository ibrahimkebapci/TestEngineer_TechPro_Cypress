describe('Eylem Metodlari-select file')

    it('SelectFile() Metodu kullanimi', ()=>
    {
        cy.visit('https://www.letskodeit.com/practice');

        // Dosya sec butonu ile ekleme
        cy.get('#myFile').selectFile('package.json');
        // Surukle-Birak ile ekleme yapma
        cy.get('#myFile').selectFile('package.json');

    })