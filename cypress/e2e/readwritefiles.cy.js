/// <reference types ="cypress" />

before(function(){
  
    cy.fixture('example.json').as('test_data')
})

it('read files using fixture', function(){

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.name)

})

it('read file using readfile',()=>{

    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})

it('write file demo',()=>{

    cy.writeFile('sample.txt','Hello Bangkit is testing\n')
    cy.writeFile('sample.txt','testing the write file',{flag:'a+'})
})
