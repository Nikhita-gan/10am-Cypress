///<reference types = "cypress"/>

describe('Verify the difernt alerts',function(){

    

    it('verify the prompt alert in cypress',function(){
        Cypress.on("uncaught:exception").then(function(err,runnable){
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
        cy.stub(win,'prompt').returns('hello')
        cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: hello')
    })
})` `