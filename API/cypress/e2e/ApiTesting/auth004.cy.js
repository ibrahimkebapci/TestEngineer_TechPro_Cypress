/*
    Given
        Users url https://api.github.com/users/
    And
        Repo Name is "testRepo"
    And
        GitHub token
    And 
        GitHub username
    When 
        User sends POST Request to the url
    Then 
        Status code is 201
    And
        Response body has name property with the name value
    And 
        Response body has private property with the private value
*/


describe("GitHub repo creation with token" ()=>
{
    const repoPostUrl = Cypress.env("GIT_HUB_API_REPO_POST_URL");
    const GitHubToken = Cypress.env("GIT_HUB_TOKEN");
    const postPayload = 
    {
        name: "testRepo",
        describe: "This is a test respository",
        private: false,
    };
});