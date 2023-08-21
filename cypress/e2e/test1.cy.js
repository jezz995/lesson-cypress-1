/// <reference types ="cypress" />

it ('google search', () =>{

     cy.visit('https://google.com/')

     cy.get('#APjFqb').type('Geten efek gitar{Enter}')
     //cy.contains('Penelusuran Google').click()
     cy.wait(3000)
     cy.contains('Shopping').click()
})