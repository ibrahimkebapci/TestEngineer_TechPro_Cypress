/*
    Given
        https://restful-booker.herokuapp.com/booking
    And
        {
            "firstname": "Selim",
            "lastname": "Ak",
            "totalprice": 11111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-09-09",
                "checkout": "2021-09-21"
            }
        }
    When
        I send POST Request to the Url
    Then
        Status code is 200
        And response body should be like    {
                                                "bookingid": 11,
                                                "booking": {
                                                                "firstname": "Selim",
                                                                "lastname": "Ak",
                                                                "totalprice": 11111,
                                                                "depositpaid": true,
                                                                "bookingdates": {
                                                                                    "checkin": "2020-09-09",
                                                                                    "checkout": "2020-09-21"
                                                                                }
                                                            }
                                            }
*/
describe("POST Request method",()=>
{
    it("should create new data", function())
    {
        const pathParam = "/booking";

        cy.fixture("postBookingPayload").as("payload");

        
        cy.get("@payload").then((payload) ={
            cy.request({
                method: "POST",
                url:{pathParam}
                body: this.payload
            })
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.booking.firstname).to.eq(payload.firstname);
            expect(actualData.lastname).to.eq(payload.lastname);
            expect(actualData.totalprice).to.eq(payload.totalprice);
            expect(actualData.bookingdates.checkin).to.eq(payload.bookingdates.checkin);
            expect(avtualData.bookingdates.checout).to.eq(payload.bookingdates.checout)
        })
    }
})