describe("POST Request Method",()=>
{
    it("should create new data",function()
    {
        constpathParam="/todos";
        cy.fixture("postTodosPayload").as("payload");

        cy.get("@payload").then((payload) =>{

            cy.request({
                method: "POST",
                url: '$'
            })
        }).then((response)=>
        {

        })
    })
})