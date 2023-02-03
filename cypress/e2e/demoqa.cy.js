const fixture = require('../fixtures/example.json') //importando o conteudo do arquivo para uma variavel
const faker = require('faker-br') // importando uma biblioteca para gerar massas de teste

describe('Student Registration', ()=> {
  beforeEach(() => {
      cy.visit(Cypress.env("demoQA") + "automation-practice-form") //aqui está pegando a url salva em uma variavel global dentro do arquivo cypress.config.js. O + "automation-practice-form" é para adicionar esse texto na variavel assim entrando exatamente no form
  }) 

  it('StudentRegistration', ()=>{
      cy.viewport(1280, 1000) // altera a resolução da tela para solucionar aquele erro de não apertar o botão submit
      cy.get('#firstName').type(fixture.name) //preenche o campo com o "name" do arquivo examples.json 
      cy.get('#lastName').type(faker.name.lastName()) // utiliza o faker pra preencher um sobrenome aleatorio
      cy.get('#userEmail').type(faker.internet.email()) // utiliza o faker pra preencher um email aleatorio
      cy.get('.custom-control-label').contains("Male").click()
      cy.get('#userNumber').type(faker.random.number())
      inserirDataNascimento(/^1$/,"April", "1950") //aqui chama a função da linha 21.
      preencherCampoSubject("a", "Art") //aqui chama a função da linha 29. Primeiro texto "a" é que vai ser escrito no campo, o Art é a opção do auto complete que vai ser selecionada
      cy.get("#submit").click()
  })

  function inserirDataNascimento(dia, mes, ano) {
    cy.get('#dateOfBirthInput').click().then(() => {
      cy.get('.react-datepicker__year-select').select(ano)
      cy.get('.react-datepicker__month-select').select(mes)
      cy.get('.react-datepicker__day').contains(dia).click()
    })
  }

  function preencherCampoSubject(texto, subject){
    cy.get('#subjectsContainer').type(texto).then(() => {
      cy.get('.subjects-auto-complete__menu-list').contains(subject).click()
    })
  }
})