/*
    Given
        https://dummy.restapiexample.com/api/v1/employees
    When
        User send GET Request to the URL
    Then
        Status code is 200
    And
        There are 24 employees
    And
        "Tiger Nixon" and "Garrett Winters" are among the employees
    And
        The greatest age is 66
    And
        The name of the lowest age is "[Tatyana Fitzpatrick]"
    And
        Total salary of all employees is 6,644,770
    */

    describe("GET Request method",()=>
    {
        it("should verify status code, number of employee names, oldest and the youngest employees,salary", function()
        {
            //i)Set the url
            const pathParam1 = "/api";
            const pathParam2 = "/v1";
            const pathParm3 = "/employees";

            cy.fixture().as("expectedData").as("expectedData");

            cy.request({
                method: "GET",
                //url: ${pathParam1}${pathParam2}${pathParam3},
            }).then((response)=>
            {
                expect(response.status).to.eq(this.expectedData.statusCode);

                expect(response.body.data).to.have.lenght(this.expectedData.numberOfEmployees);

                expect(response.body.data((item)=>item.empoyee_name)).to.include.members(this.expectedData.namesOFExpectedEmployees);

                let listOfAges =expect(response.body.data((item)=>item.empoyee_age));
                listOfAges = listOfAges((a,b)=> a-b);
                expect(listOfAges[listOfAges.length-1]).to.eq(this.expectedData.maxAge);

                let theYoungestAge = listOfAges[0];
                let theYoungestEmployee = response.body.data.filter((item)=>item.employee_age === theYoungestAge).map((item)=>item.empoyee_name);

                expect(theYoungestEmployee).to.i(this.expectedData.namesOFExpectedEmployees);

                let totalSalary= response.body.data.reduce((sum,employee) => sum + employee.employee_salary,0);

                expect(totalSalary).to.eq(this.expectedData.expectedTotalSalary)
            });
        });
    });
// Dakika: 01:02:12 
