///<reference types = "Cypress"/>

describe('verify the differnt tarnsverse method', function () {

    it('To get children of DOM elements, use the .children() command.', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)

    })

    it('To get the first DOM element within elements, use the .first() command', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')

    })


    it('To get the last DOM element within elements, use the .last() command', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text', 'Sugar')

    })


    it('To get the  DOM element within elements, use the .eq() command', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(1).should('have.text', 'Tea')

    })
    it('To get the next sibling DOM element within elements, use the .next() command', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').next().should('have.text', 'Tea')

    })
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextAll().should('have.length', 4)

    })
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#espresso').should('have.length', 2)

    })

    it.only('To remove DOM element(s) from the set of elements, use the .not() command.', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#espresso').should('have.length', 2)

    })

})
