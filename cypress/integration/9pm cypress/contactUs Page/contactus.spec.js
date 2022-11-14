///<reference types = "cypress"/>



describe('Verify the contacus us form', function () {

    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify the contactus form with valid creaditial', function () {
        cy.get('input[name="first_name"]').type('Nikhita')
        cy.get('input[name="last_name"]').type('Ganvir')
        cy.get('input[name="email"]').type('nikhitajambhulle@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning cypress')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')



    })
    it('verify the contactus form with invalid email id', function () {
        cy.get('input[name="first_name"]').type('Nikhita')
        cy.get('input[name="last_name"]').type('Ganvir')
        cy.get('input[name="email"]').type('nikhitajambhullegmail.com')
        cy.get('textarea[name="message"]').type('I am learning cypress')
        cy.get('input[type="submit"]').click()
        cy.contains('Error: Invalid email address').should('contain','Error')

    })
    it('verify the contactus from to reset the form', function () {

        cy.get('input[name="first_name"]').type('Nikhita')
        cy.get('input[name="last_name"]').type('Ganvir')
        cy.get('input[name="email"]').type('nikhitajambhulle@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning cypress')
        cy.get('input[type="reset"]').click()

        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")
        
    })
    it('verify the contactus title', function () {
        cy.get('h2[name="contactme"]').should('have.text','CONTACT US')

    })

})