///<refrence type ="cypress"/>

describe('verify the  API for kinches example',function(){

    it('Tc-01 verify the UI for get comments',function(){
        cy.intercept({
            method:"GET",
            url:" https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComments')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComments')
        cy.get('.network-comment').should('contain',"laudantium enim quasi est quidem magnam")
    })
    it('Tc-02 verify the UI for get comments',function(){
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('PostComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Post Comment').click()
        cy.wait('@PostComment')
        cy.get('.network-post-comment').should('have.text',"POST successful!")
    })
})