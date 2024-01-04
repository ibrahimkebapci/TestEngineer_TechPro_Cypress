describe("GET Request Testing", ()=>
{
    it("Testing with number of data", ()=>
    {
        //i)Set the URL
        const pathParam  ="/todos";
        //ii)Set the payload

        //iii)Send the GET Request

        cy.request({
            method:"GET",
            url:pathParam,
        }).then((response) =>
        {
expect (response.status).to.eq(200);

            //Oncelikle ID'si 190 dan buyuk olanlari bir varible'in icinde koyalim
            const idsGreateThan190 = response.body.filter((item)=>item.id>190);
            expect(idsGreaterThan190).to.have.lengthOf(10);

            //Oncelikle id'si 5 den kucuk olan datalari bir varible'in icine koyalim
            const idsLessThan5= response.body.filter((item)=> item.id<5);
            expect(idsLessThan5).to.have.lengthOf(4);

            //id si 5 ten küçük olanların titlelerini al ve bir variable in icine koy
            const titlesWhoseIdLessThan5 = response.body.filter((item)=>item.id<5).map((item)=>item.title);
            expect(titlesWhoseIdLessThan5).to.include("delectus aut autem ")
        })
    })
})