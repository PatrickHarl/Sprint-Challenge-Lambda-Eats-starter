import React from 'react'

const url = 'http://localhost:3000/pizza'

describe('Users Form', () => {

    it('Can navigate to the site', () => {


        cy.visit(url)
        


    })

    it('Can add text to the box', () => {


        cy.get('input[name="name"]')
            .type('Test')
            .should('have.value', 'Test')
        


    })

    it('Can select multiple toppings', () => {


        cy.get('input[name="pepperoni"]')
            .check()
            .should('have.checked')

        cy.get('input[name="sausage"]')
            .check()
            .should('have.checked')
        
        cy.get('input[name="bellpeppers"]')
            .check()
            .should('have.checked')

        cy.get('input[name="redonions"]')
            .check()
            .should('have.checked')
    })

    it ('Can submit the form', () => {


        cy.get('[cySubmitBtn="mainSubmit"]')
            .click()

        cy.get('[cyDiv="cyTest"]')
            .contains('Test')
            



    })
})