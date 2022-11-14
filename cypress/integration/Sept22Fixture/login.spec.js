///<reference types = "cypress"/>

import obj1 from '../../fixtures/contactus.json'
import multUser from '../../fixtures/multiple.json'

describe("verify the login Page using Fixture data",function(){
    let obj3;
   
    beforeEach(function(){
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    })
    before(()=>{
        cy.fixture('contactus').then((obj)=>{
                obj3 = obj;
        })

    })
    let info = {
        firstName : "Nikhita",
        lastName:"Ganvir",
        email:"nikhitajanm@gamil.com",
        message:"I am learning typescript"

    }
    it("Tc-01 verify the login page using object",function(){
       //first way---by creating the object
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })
    it("Tc-01 verify the login page using object",function(){
        //second way----by importing the fixture file
        cy.get('input[name="first_name"]').type(obj1.firstName)
        cy.get('input[name="last_name"]').type(obj1.lastName)
        cy.get('input[name="email"]').type(obj1.email)
        cy.get('textarea[name="message"]').type(obj1.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
        
    })
    it("Tc-01 verify the login page using object",function(){
        //thirs way----import by cy.fixture 
        cy.fixture('contactus').then(function(obj2){
            cy.get('input[name="first_name"]').type(obj2.firstName)
            cy.get('input[name="last_name"]').type(obj2.lastName)
            cy.get('input[name="email"]').type(obj2.email)
            cy.get('textarea[name="message"]').type(obj2.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
        })
        
    })
    it("Tc-01 verify the login page using object",function(){
        //fourth way----by using in the before block like globally
        cy.get('input[name="first_name"]').type(obj3.firstName)
        cy.get('input[name="last_name"]').type(obj3.lastName)
        cy.get('input[name="email"]').type(obj3.email)
        cy.get('textarea[name="message"]').type(obj3.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
        
    })
    it.only("Tc-01 verify the login page using object",function(){
        //bad aaproch
        //fourth way----acessing the multiple data from fixture file
        cy.log(multUser)
        multUser.forEach(function(el){
           
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
        })
        
        
    })
    multUser.forEach(function(el,index){
        it(`c-01 verify the login page using object------${index}`,function(){
            //fourth way----acessing the multiple data from fixture file
            
                cy.get('input[name="first_name"]').type(el.firstName)
                cy.get('input[name="last_name"]').type(el.lastName)
                cy.get('input[name="email"]').type(el.email)
                cy.get('textarea[name="message"]').type(el.message)
                cy.get('input[type="submit"]').click()
                cy.get('h1').should('have.text','Thank You for your Message!')
            })
            
    })

})