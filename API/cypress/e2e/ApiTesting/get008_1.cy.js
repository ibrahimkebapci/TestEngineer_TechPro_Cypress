describe("GET Request method",()=>{
it("should verify response body details and headers",()=>
{
    const pathParam1="/todos";
    const pathParam2 = "/2";

    //ii)set the expected data

    const expectedData = 
    {
        statusCode: 200,
        userId: 1,
        title:"quis ut nam facilis et officia qui",
        completed: false,
        via: "1.1 vegur",
        server: "cloudflare"
    }

    cy.request
    {
        method:"GET",
        url:`${pathParam1}${pathParam2}`,
        
    }).then((response)=>
    {
        expect(response.status).to.eq(expectedData.statusCode);
        expect(response.body.userId).to.eq(expectedData.userId);
        expect(response.body.title).to.eq(expectedData.title);
        expect(response.body.completed).to.eq(expectedData.completed);
        expect(response.headers.via).to.eq(expectedData.via);
        
    });
});

