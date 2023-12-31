/*
Given
https://restful-booker.herokuappçcom/booking/2024
When
user sends a GET Request to the endpoint
Then
Status code is "404"
And
Status text is "Not Found"
And
Response body includes"Not Found:
And
Response body does not include "TechPro Education"
And
Header Serverr is "Cowboy"
and
Header Connection is "Keep-alive"
*/

describe("GET Methpd Testing",()=>{
    it("Status code, text, body,header will be tested",()=>{
        //i)Set the URL
        const url = "https://resful-booker.herokuapp.com/booking/2024"; 
        //ii)Set the playload

        //iii)Send the GET Request
        cy.request({
            method:"GET",
            url: url,
            failOnStatusCode: false //4xx status code'larda testin otomatik olarak fail etmesini engelledim
            }).then((response)=>{
                //Developer console'a response body'i yazdirin
                console.log(response.body);
            })

        //iv)Do Assertions
        //Assert that Status code is "404"
        expect(response.status).to.eq(404);
        //Assert that Status text is "Not Found"
        expect(response.statusText).to.eq("Not Found");
        //Assert that Response body includes "Not Found"
        expect(response.body).to.include("Not Found");
        //Assert that Response body does not include "TechPro Education"
        expect(response.body).not.to.include("TechPro Education");
        //Assert that Hader server is "Cowboy"
        expect(response.hears["server"]).to.eq("Cowboy");
        //Assert that Header
        expect(response.headers["connection"]).to.eq("keep-alive");
    });
});
