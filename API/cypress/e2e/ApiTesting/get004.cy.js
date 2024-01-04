

describe("GET Request Method Testing" , () => 
{
    it("Request is JSON, number of data , title, userId",()=>
        {
            //i) Set the URL
            const pathParam = "/todos";//Base URL 'in sonuna eklemem  ve "/" başlayan eklentiye "Path Parameter"
            
            //ii)set the payload

            //iii)Send the GET Request
            cy.request({
                method:"GET",
                url: pathParam,
                headers:{
                    Accept: "application/json"
                }
            }).then((response)=>
            {
                //iv)Do Assertions
                //HTTP Status Code should be 200
                expect(response.status).to.eq(200);
                //status text is ok
                expect(response.statusText).to.eq("OK");
                //Response time is less than 300 ms
                expect(response.duration).to.be.lessThan(300);
                //Response format should be "appication/json
                expect(response.headers["content-type"]).to.include("application/json");
                //There should be 200 todos
                expect(response.body).to.have.lengthOf(200);
                //once tün tittleri topla
                const titles = response.body.map((item)=>item.title);
                expect(titles).to.include("quis eius est sint expicabo");

                const userIds = response.body.map((item)=>item.userId);
                expect(userIds).to.include.members([2,7,9]);
                
            })
        });
});