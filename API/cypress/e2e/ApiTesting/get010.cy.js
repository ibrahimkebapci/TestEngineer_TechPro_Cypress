/*
Given
        https://gorest.co.in/public/v1/users/5850619
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that Response body is not null
    And
        Assert that id is 5850619
    And 
        Assert that email is "verma_rameshwar@baumbach.example"
    And
        Assert that gender is "male"
    And 
        Assert that status is "active"
*/

desctibe("GET Request methods",()=>
{
    it("should verify response body details", ()=>
    {
        it("should verify response body details", () =>
        {
            //i)Set the yrl
            const pathParam1 = "/public";
            const pathParam2="/v1";
            const pathParam3="/users";
            const pathParam4="/5886275";
        
            //ii)Set the expected data
            cy.fixture("goRestUniqueTestData")

            cy.request({
                method: "GET",
                url: ${pathParam1}${pathParam2}${pathParam3}${pathParam4}
            }).then((response)=>
            {
                const actualData = response.body.data;
                expect(response.status).to.eq(this.expectedData.statusCode);
                expect(response.body).to.not.to.be.null;
                expect(actualData).to.have.property(this.expectedData.id);
                //property hem idi yi hem de eşitliği kontrol eder
            })

            expect(actualData).to.include({
                id:this.expectedData.id,
                email: this.expectedData.email,

            })
        })
    })
});