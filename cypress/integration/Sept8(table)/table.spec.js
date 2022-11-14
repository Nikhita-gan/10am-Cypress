///<reference types ="Cypress"/>
describe('Verify the operation on the table', function () {

    this.beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('calculating the sum of age of contents of first table', function () {
        let sum = 0
        cy.get('#t01').find('tr').each(function(el,index){
            //cy.log(el)
            if(index !=0){
                cy.log(el)
               sum = sum + Number(el.children('td').last().text())
            
            }

        }).then(function(){
            cy.log(sum)

            expect(sum).to.eqls(159)
        })

    })
    it('calculating the sum of age of contents of second table',function(){

        
    })

})