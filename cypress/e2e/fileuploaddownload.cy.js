/// <reference types ="cypress" />

it('file upload demo',()=>{

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')

})

it('file download test',()=>{

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})