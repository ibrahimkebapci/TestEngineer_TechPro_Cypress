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
            const pathParam1 = "/public";
            const pathParam2="/v1";
            const pathParam3="/users";
            const pathParam4="/5886275";
        })
    })
});