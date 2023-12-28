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
        const endPoint = "https://restful-booker.herokuapp.com/booking/3";
        // 2) Set the payload
        cy.request({
            method:"GET",
            url : url,
        }) .then((reponse)=>{
            console.log(response.body);
        });
        
    })
});
