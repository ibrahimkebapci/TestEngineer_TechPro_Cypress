describe("GET Request Method",()=>
{
    it("should verify meta data details" , ()=>
    {
        const pathParam1 = "/public";
        const pathParam2 = "/v1";
        const pathParam3 = "/users";

    })

    cy.fixture("goRestMetaTestData").as("expectedData");

    const expectedData{
        "pagination":{
            "total": 2871,
            "pages": 288,
            "page": 1,
            "limit":10,,

        }
    }

    cy.request({
        method:"GET",
        url: ""
    })
    })
    // 54. dk