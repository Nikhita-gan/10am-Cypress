///<reference types ="cypress"/>



describe('veify the calender', function () {

    Cypress.on("uncaught:exception", function (err, runnable) {
        return false
    })
    it('TC- 01 verify the date in the calender after 100 days', function () {
        // select 15 aug 2024
        let date = new Date()
        date.setDate(date.getDate() + 678)
        let date2 = date.getDate()
        let month = date.toLocaleString('default', { month: "long" })
        let year = date.getFullYear()
        cy.log(year)
        cy.log(month)
        cy.log(date2)

        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker1').click()
        function selectMonthAndYear() {
            cy.get('.ui-datepicker-year').then(function(el){
                if(!el.text().includes(year)){
                    cy.get('.ui-icon.ui-icon-circle-triangle-e').click()
                    selectMonthAndYear()
                }
            })

            cy.get('.ui-datepicker-month').then(function(el){
                if(!el.text().includes(month)){
                    cy.get('.ui-icon.ui-icon-circle-triangle-e').click()
                    selectMonthAndYear()
                }
            })


        }
        selectMonthAndYear()

        function selectDate(){
            cy.contains(date2).click()
        }
        selectDate()
    })
})