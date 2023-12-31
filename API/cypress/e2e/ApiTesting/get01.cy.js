/*
Gherkin laguage
Given: Kelimesinden sonra o gereksinimler(prerequsite) yailir
        ornegin GET Metod'u icin endpoint bir prerequisite dir
        POST metodu icin endpoint ve payload prerequsite'dir

When: Kelimesinden sonra yapilacak is yazilir
        ornegin GET Request

Then: Istemem somucu yazilir
And: Yukaridaki 3 kelime icin birden fazla giris yapilacaksa ardından and yazilir

Ornek Test Case
    Given
        Https://restful-booker.herokuapp.com/booking/3
    When
        User send a GET Request
    Then
        HTTP Status text should be less than 300ms
    And
        Response time should be less than 
    And
        Response body should be JSON Data Type
*/

describe("GET Method Testing",() => {
    it("get01", ()=>{

        // 1) Set the Endpoint
        const url = "https://restful-booker.herokuapp.com/booking/3";
        // 2) Set the payload
        cy.request({
            method:"GET",
            url :url,
        }) .then((response)=>{
            console.log(response.body);

            //Response'i Cypress console'unda görelim
            cy.log(JSON.stringify(response.body));

            //iv) Dogrulamalara(Assertion) baslayalim
            //Assert that Status Code is 200
            expect(response.status).to.eq(200);
            //Assert that Status text is OK
            expect(response.statusText).to.eq("OK");

            expect(response.duration).to.be.lessThan(300);

            expect(response.headers["content-type"]).to.include("application/json")
        
        });
        
    })
});
