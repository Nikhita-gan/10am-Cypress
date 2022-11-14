///<reference types = "cypress"/>

describe('verify the kitchen api examples',function(){

    it('verify the Get comment API',function(){

        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(function(res){
           // cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    
    it('verify the POST comment API',function(){
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name": "Using+POST+in+cy.intercept()",
                "email": "hello%40cypress.io",
                "body": "You+can+change+the+method+used+for+cy.intercept()+to+be+GET%2C+POST%2C+PUT%2C+PATCH%2C+or+DELETE"
            }
        }).then(function(res){
           // cy.log(res)
            expect(res.status).to.eq(201)
        })
        
    })


    it('verify the Update comment API',function(){

        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name": "Using+POST+in+cy.intercept()",
                "email": "hello%40cypress.io",
                "body": "You+can+change+the+method+used+for+cy.intercept()+to+be+GET%2C+POST%2C+PUT%2C+PATCH%2C+or+DELETE"
            }
        }).then(function(res){
           // cy.log(res)
            expect(res.status).to.eq(200)
        })
        
    })

    




})y8