///<reference types = "cypress"/>



describe("Verify the Gorest API", function () {

    let accesToken = "2cf71a349ad5c5ead3e630afe4eb309170740383698cf2286ea49d4ef7babcc4"

    it("Check the Gorest GET request", function () {

        cy.request({

            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            Headers:
            {
                Authorization: `Bearer {$accesToken}`
            }
        }).then(function (res) {
            //cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body.id).not.to.null
            expect(res.body.length).to.eql(10)
            res.body.forEach(element => {
                expect(element).to.have.all.keys(["id", "name", "email", "gender", "status"])
            });

        })

    })
    it("verify the POST request of Grest API", function () {
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                'Authorization':`Bearer ${accesToken}`
            },
            body:{

                name: "Sakhi Verma",
                gender: "female",
                email: "sakhi.verma48ncgfgbnfhf78@gmail.com",
                status: "active"
            }

        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.body.id).not.to.null
            expect(res.body).to.have.all.keys("name",'id',"email","status","gender")
        })

    })
    it("verify the PUT request of Grest API", function () {
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/7866",
            headers:{
                'Authorization':`Bearer ${accesToken}`
            },
            body:{

                name: "Sakhi Verma",
                gender: "female",
                email: `sakhi.verma${Math.floor(Math.random()*100000000)}@gmail.com`,
                status: "active"
            }

        }).then(function(res){
             //cy.log(res)

             expect(res.status).to.eql(200)
        })
    })
    it.only("verify the PUT request of Grest API", function () {
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/7866",
            headers:{
                'Authorization':`Bearer ${accesToken}`
            },
            

        }).then(function(res){
            //cy.log(res)
            
            expect(res.status).to.eq(204)
        })
    })

})