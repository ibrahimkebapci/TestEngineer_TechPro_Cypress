describe("GET Request method",()=> function(){
it("should verify response body details and headers",()=>
{
    const pathParam1="/todos";
    const pathParam2 = "/2";

    //ii)set the expected data
    cy.fixture("todosTestData").as("expectedData");
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
        expect(response.status).to.eq(this.expectedData.statusCode);
        expect(response.body.userId).to.eq(this.expectedData.userId);
        expect(response.body.title).to.eq(this.expectedData.title);
        expect(response.body.completed).to.eq(this.expectedData.completed);
        expect(response.headers.via).to.eq(this.expectedData.via);
    });
});

