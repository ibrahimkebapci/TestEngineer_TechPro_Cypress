  /*
       URL: https://dummy.restapiexample.com/api/v1/create
       HTTP Request Method: POST Request
       Request body: {
                        "employee_name": "Tom Hanks",
                        "employee_salary": 111111,
                        "employee_age": 23,
                        "profile_image": "Perfect image"
                     }
       Test Case: Type by using Gherkin Language
       Assert:
                i) Status code is 200
                ii) Response body should be like the following
                    {
                        "status": "success",
                        "data": {
                            "employee_name": "Ali Can",
                            "employee_salary": 111111,
                            "employee_age": 23,
                            "profile_image": "Perfect image",
                            "id": 6344
                        },
                        "message": "Successfully! Record has been added."
  */
 describe("POST Request method", ()=>
 {
    it("should create a new data",function()
    {
        const pathParam1 ="/api";
        const pathParam2 ="/v1";
        const pathParam3 ="/create";
        
        cy.fixture("postDummyPayload").as("payload");
        cy.fixture("postDummyResponse").as("expectedData");

        cy.get("@payload").then((payload)=>
        {
            cy.get("@expectedData").then((expectedData)=>
            {
                cy.request({
                    method: "POST",
                    url: $,
                    body:payload,
                    headers:{
                        "Content-Type": "application/json",
                    
                    expect(response.status).to.eq(200)
                    }
                })
            })
        })
    });

 });         