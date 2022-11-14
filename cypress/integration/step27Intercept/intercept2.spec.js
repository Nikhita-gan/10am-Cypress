///<reference types = "cypress"/>


describe('verify the  grt podt update of intercept', function () {

    it('Tc-01 verify the UI for get comments', function () {
        cy.intercept({
            method: "GET",
            url: " https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComments')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComments')
        cy.get('.network-comment').should('contain', "laudantium enim quasi est quidem magnam")
    })

    it('Tc-02 verify the GET method on xhl for get comments', function () {
        cy.intercept({
            method: "GET",
            url: " https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComments')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComments').then(function ({ response, request }) {
            //cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eqls(200)
            expect(response.body).to.have.keys("postId", "id", "name", "email", "body")
            expect(request.method).to.eqls('GET')
            cy.get('.network-comment').should('have.text', response.body.body)
        })

    })
    it('Tc-03 verify the GET method on XHL by mocking the data for get comments', function () {
        cy.intercept({
            method: "GET",
            url: " https://jsonplaceholder.cypress.io/comments/1"
        }, {
                StatusCode: 401,
                body: {
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "Hello",
                    "nameC": "Nikhita"

                }
            }).as('getComments')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComments').then(function ({ response, request }) {
            //cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eqls(200)
            expect(response.body).to.have.keys(["postId", "id", "name", "email", "body","nameC"])
            expect(request.method).to.eqls('GET')
            cy.get('.network-comment').should('have.text', response.body.body)
        })

    })
    it('Tc-04 verify the POST method for XML UI on get comments', function () {
        cy.intercept({
            method: "POST",
            url: " https://jsonplaceholder.cypress.io/comments"
        }).as('postComments')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Post Comment').click()
        cy.wait('@postComments').then(function ({ response, request }) {
            //cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eqls(201)
            expect(response.body).to.have.keys(["id", "name", "email", "body"])
            expect(request.method).to.eqls('POST')
            cy.get('.network-post-comment').should('have.text', 'POST successful!')
        })
    })
    it('Tc-05 verify the POST method for XML to mock the dataUI on get comments', function () {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('UpdateComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Update Comment').click()
        cy.wait('@UpdateComment').then(function ({ response, request }) {
            // cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eql(200)
            expect(response.body).to.have.keys("id", "name", "email", "body")
            expect(request.method).to.eqls('PUT')

        })
    })
})