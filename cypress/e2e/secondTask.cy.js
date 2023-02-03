const fixture = require('../fixtures/example.json') //importando o conteudo do arquivo para uma variavel
const faker = require('faker-br') // importando uma biblioteca para gerar massas de teste

describe('secondTest',() => {
    beforeEach(()=>{
     cy.visit(Cypress.env('phpTravels'))
    })


it('sumTest',()=>{
    sumElements()
    fakerNames()
        cy.get('@variavel_global').then(numbersArray =>{
        var sumResult = parseInt(numbersArray[0]) + parseInt(numbersArray[1])
        cy.get('#number').type(sumResult,{force:true})
        cy.get('#demo').click({force:true})
        cy.get('#colored').should('be.visible')
        cy.get('p.text-center.cw').should('have.text',fixture.textResult)   
    })
    })
       
    it('testNull', ()=>{
        fakerNames()
        cy.get('#demo').click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please input result number') 

        })
    })
   
    it('errorTest',()=>{
       fakerNames()
       sumElements()
   
       cy.get('@variavel_global').then(numbersArray =>{
       var sumResult = parseInt(numbersArray[0]) - parseInt(numbersArray[1])
       })
    })
 })

 function fakerNames(){
    fillForm(faker.name.firstName(), faker.name.lastName(), faker.name.lastName(), faker.internet.email())
 }

function fillForm(name, last_name, business_name, email){
    cy.get('.first_name.input.mb1').click({ force: true }).type(name)
    cy.get('.last_name.input.mb1').click({ force: true }).type(last_name)
    cy.get('.business_name.input.mb1').click({ force: true }).type(business_name)
    cy.get('.email.input.mb1').click({ force: true }).type(email)
}

function sumElements(){
    cy.get('.df').then((classElements) => {
        var numbersArray = []
        numbersArray[0] = classElements.find('#numb1').text()
        numbersArray[1] = classElements.find('#numb2').text()
        cy.wrap(numbersArray).as('variavel_global')
})
}