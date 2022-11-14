///<reference types = "Cypress"/>

describe("Verify the the iframe in the document", function () {

    this.beforeEach(function () {
        cy.visit("http://www.webdriveruniversity.com/IFrame/index.html")
    })
    it("TC -01 check iframe using Jquery", function () {

        cy.get('#frame').then(function ($el) {
            let body = $el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find("a[href='products.html']").should('have.text', 'Our Products')
        })

    })
    it.only("TC -02 check iframe using Javascript", function () {

        cy.get('#frame').then(function (el) {
            let body = el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find(".sub-heading").first().should('have.text', 'Who Are We?')
        })

    })

})