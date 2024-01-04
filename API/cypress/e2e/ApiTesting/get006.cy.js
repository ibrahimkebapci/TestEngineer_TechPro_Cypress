desciribe("GET Request Method Testing",()=>
{
    it("Using multiple path parms", () =>{
        const pathParam1 = "/booking";
        const pathParam2 = "/4";
    })

    cy.request({
        method: 'GET',
        url: '$ {pathParm} ${pathParm2}'
    }).then((response)=>
    {
        expect(response.status).to.eq(200);
            //status text is ok
            expect(response.statusText).to.eq("OK");
            //Response time is less than 300 ms
            expect(response.duration).to.be.lessThan(300);
            //Response format should be "appication/json
            expect(response.headers["content-type"]).to.include("application/json");
            
            expect(response.body.firstname).to.eq("Mark");

            expect(response.body.lastname).to.eq("Jomes");

            expect(response.body.totalprice).to.eq(608);
            
            expect(response.body.bookingdates.checkin).to.eq("2015-06-06");
            
    })
})