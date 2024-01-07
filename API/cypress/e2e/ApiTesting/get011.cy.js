/*
Given
        https://restful-booker.herokuapp.com/booking/2
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that firstname is Mark
    And
        Assert that lastname is Ericsson
    And 
        Assert that total price is 217
    And
        Assert that deposit paid is true
    And 
        Assert that checkin date is "2023-06-28"
    And
        Assert that checkin date is "2023-07-28"
*/
describe("GET Request method", ()=> 
{
    it("",function()
    {
        //Set the URL
        const patParam1 = "/booking";
        const patParam2 = "/2";

        cy.fixture("bookingUniqueTestData").as("expectedData");

        cy.request(
            {
                method: "GET",
                url:`${pathParam1}${pathParam2}`

            }
        ).then((response)=>{
            const actualData = response.body;

            expect(response.status).to.eq(this.expectedData.statusCode);
            expect(actualData.firstname).to.eq(this.expectedData.firstname);
            expect(actualData).to.have.property("lastname",this.expectedData.lastname);
            expect(actualData.bookingdates.checkin).to.eq(this.expectedData)
        })
     });
});