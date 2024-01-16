/*
    Given
        url https://api.github.com/users/
    And
        GitHub token
    And 
        GitHub username
    When 
        User sends GET Request to the given URL
    Then 
        Status code is 200
    And
        Response body has login property with the username value
    And 
        Response body has id property
    And 
        Response body has url property
    And 
        Location equals New York
*/

describe("Using GitHub API with real token", ()=>
{

    it("Fetches user info"()=>
    {
        cy.request({
            method:"GET",
            url:
            headers:
            {
                Authorization: 'token'
            },
        })
    }).then((response)=>
    {
        expect(response.Authorization)
    })
});
