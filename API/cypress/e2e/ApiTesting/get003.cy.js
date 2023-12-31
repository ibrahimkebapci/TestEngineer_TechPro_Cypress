/*
Given
    https://jsonplaceholder.typicode.com/todos/198
When
    User sends a GET Request to then endpoint
Then
    Status code is 200
And
    Status text is OK
And
    Response time is less than 300 ms
And
    Response bodi is JSON data type
And
    "title" is "quis eius est sint explicabo"
And
    "completed" is "true"
And
    "userId" is "10"
*/

describe("",()=>
{
    it("Status code, text, response time, data type, body details,"()=>
    {
        const url = "https://jsonplaceholder.typicode.com/todos/198"

    }
 ).then(response)=>
 {
    console.log(response.body);
    

    expect(response.statusText).to.eq("OK");
    expect(response.duration).to.be.lessThan(300);
    expect(response.headers["contenct-type"]).to.include("application/json");
    expect(response.body.title).to.eq("quis eius est sint explicabo");
    expect(response.body.completed).to.eq(true);
    expect(response.body.userId).to.eq(10);
 })
})
});