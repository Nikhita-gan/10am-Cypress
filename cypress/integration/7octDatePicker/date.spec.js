///<reference types = "cypress"/>

describe('Verify the date calender', function () {


    it('calculate the date after the 200days', function () {
        let date = new Date()
        
        // let year = date.getFullYear()
        // cy.log(year)
        // let todayDate= date.getDate()
        // cy.log(todayDate)
        // let month = date.getMonth()
        // cy.log(month)

       date.setDate(date.getDate() +200)
        let date2 = date.getDate()
        //cy.log(date2)

        let month = date.toLocaleString('defalut',{month:"long"})
        //cy.log(month)

        let year = date.getFullYear()
        //cy.log(year)
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        function selectMonthandYear(){
            cy.get('.datepicker-switch').first().then(function(el){
                if(!el.text().includes(year)){
                    cy.get('.next').first().click()
                    selectMonthandYear()
                }
            })
        

        } selectMonthandYear()

        function selectMonthandYear(){
            cy.get('.datepicker-switch').first().then(function(el){
                if(!el.text().includes(month)){
                    cy.get('.next').first().click()
                    selectMonthandYear()
                }
            })
        

        } selectMonthandYear()


        function selectDate(){
            cy.contains(date2).click()
        }
        selectDate()
    })
   

})