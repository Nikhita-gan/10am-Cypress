///<reference types = "cypress"/>

describe('Veify the date calender ',function(){

Cypress.on('uncaught:exception',function(err,runnable){
    return false
})

it('verify the date which we have to enter ',function(){

    let date = new Date()
    date.setDate(date.getDate() + 100)
    let date2 = date.getDate()
    let year = date.getFullYear()
    let month = date.toLocaleString('default',{month:'long'})
    cy.log(date2)
    cy.log(month)
    cy.log(year)

    cy.visit('https://demo.automationtesting.in/Datepicker.html')
    cy.get('#datepicker2').click()

    // cy.get('.datepick-month-year').last().select('option[value="10/2023"]').click()
    // cy.get('option[value="10/2023"]').click()

    cy.get('.datepick-month-year').last().each(function(el){
        let year = el.text()
        cy.log(year)
        if(year == 2023){
            cy.wrap(el).click()
        }
   })




})


})