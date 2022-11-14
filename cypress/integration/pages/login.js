export class Login {


    element={

        inputUserName :'#user-name',
        inputPasswoord :'#password',
        buttonLogin:'#login-button',
        buttonError:'.error-button'
    }
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }
    login(){
        cy.get(this.element.inputUserName).type('standard_user')
        cy.get(this.element.inputPasswoord).type('secret_sauce')
        cy.get(this.element.buttonLogin).click()
    }
    inValidlogin(){
        cy.get(this.element.inputUserName).type('standard_user')
        cy.get(this.element.inputPasswoord).type('secret_sauce123')
        cy.get(this.element.buttonLogin).click()
    }
    erroMessge(){
        cy.get(this.element.buttonError).should('be.visible')
    }
    dashbord(){
        cy.url().should('contain','inventory')
    }



}