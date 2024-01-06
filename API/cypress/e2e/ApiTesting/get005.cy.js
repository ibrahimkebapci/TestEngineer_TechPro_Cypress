
describe("GET Request Method Testing", ()=>
{
    it("Testing with query parameters",()=>
    {
        const pathParm="/booking";
        const queryParm={
            firstname: "Susan",
            lastname:"Brown"
        }
        //Deneme
        //iii)Send the Get Request
        cy.request({
            method:'GET',
            url: pathParm,
            qs: queryParam
        }).then((response)=>
        {
            //iv) Do
            expect(response.status).to.eq(200);
            //status text is ok
            expect(response.statusText).to.eq("OK");
            //Response time is less than 300 ms
            expect(response.duration).to.be.lessThan(300);
            //Response format should be "appication/json
            expect(response.headers["content-type"]).to.include("application/json");
            
            const responseBody = Array.isArray(response.body)
             ? response.body 
             : [response.body];

            expect(responseBody).to.deep.include.members([{bookingid: 4}]);
        });
    });
});