///<reference types ="Cypress"/>

describe('Verify the localstorage for app', function () {

    this.beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/')

    })

    it('check the operation on loaclstorage of window', function () {
        cy.window().then(function (win) {
            //console.log(win)
            expect(win.localStorage.length).to.eqls(0)
            win.localStorage.setItem('id','1')
            win.localStorage.setItem('username','nikhita')
            expect(win.localStorage.length).to.eqls(2)

            expect(win.localStorage.getItem('username')).to.eql('nikhita')

        })
    })
    it('clearning the local storage using cypress command',function(){
        cy.clearLocalStorage()
        cy.window().then(function(win){
            expect(win.localStorage.length).to.eqls(0)
        })


    })
    it('verify the title of the page',function(){
        cy.document().then(function(doc){
            let docTitle= doc.title
            expect(docTitle).to.eqls('WebDriverUniversity.com')
        })

    })
    it('verify the title of the page using cypress command',function(){
       cy.title().should('eq','WebDriverUniversity.com')

    })
    it('verify the title of the page using cypress command',function(){
        cy.title().then(function(til){
            expect(til).to.eqls('WebDriverUniversity.com')
        })
 
    })
    it.only('verify the operation on Cookies',function(){
        //set
        cy.setCookie('username','nikhita')
        cy.setCookie('Password','nikhita123')
        cy.setCookie('Id','121')
        //get
        cy.getCookie('username')
        //update
        cy.setCookie('Password','Nik123')

        cy.clearCookie('Password')

        cy.clearCookies()


 
    })


})