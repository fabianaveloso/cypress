function criarTarefa(tarefa){
    cy.get('.new-todo').type(tarefa).type('{enter}')
    cy.get('.view>label').contains(tarefa).should('be.visible').should('have.text', tarefa)
}

function ValidarNExiste(tarefa){
    cy.get('.view>label').contains(tarefa).should('not.exist')
}

function ValidarNotchecked(){
    cy.get('.toggle').should('not.checked')
}

describe('firstTask', ()=> { 
    beforeEach(() => {
        cy.visit(Cypress.env("todoMVC"))
    })

    it('NewItem', ()=>{
        criarTarefa('Teste da função')
        criarTarefa('Registro 1')
        criarTarefa('Registro 2')
        
        /*cy.get('.new-todo').type('Item1{enter}')
        cy.get('.new-todo').type('Item2{enter}') 
        cy.get('.view').should('have.text', "Item1Item2")*/
        cy.get('.toggle').then(($value)=> {
            const togLen= $value.length
            cy.log('toggle value is'+ togLen)
            cy.get('strong').then(($value2) => {
            const str= parseInt($value2.text())
            cy.log('strong value is'+ str)
            expect(togLen).to.eq(str)
            
            if(str>1) {
                cy.get('.todo-count').should('have.text', str+" items left")
            } else {
                cy.get('.todo-count').should('have.text', str+" item left")
            }             
           
        })      

        })
    })


    it('Completed filter', ()=>{
        cy.get('.new-todo').type ('Item1{enter}') 
        cy.get('.new-todo').type ('Item2{enter}')
        cy.get('.view>label').contains('Item2').prev().check()
        //cy.get('.selected').should('have.text', "Completed").click()
        cy.contains('a', 'Completed').click()
        cy.get('.toggle').should('be.checked')
        //cy.get('.view>label').contains('Item1').should('not.be.visible')
        cy.get('.view>label').contains('Item1').should('not.exist')
        //cy.get('.toggle').should('unchecked').and('not.exist')
        
    }) 
    it.only('Active filter', ()=> {
        criarTarefa('Teste da função')
        criarTarefa('Registro 1')
        criarTarefa('Registro 2')
   
        cy.get('.view>label').contains('Registro 2').prev().check()
        cy.contains('a',"Active").click()
        ValidarNExiste('Registro 2')
        ValidarNotchecked() 

        //cy.get('.view>label').contains('Item2').should('not.exist')
    })

it('All Filter', ()=>{
    cy.get('.new-todo').type ('Item1{enter}') 
    cy.get('.new-todo').type ('Item2{enter}')
    cy.get('.new-todo').type ('Item3{enter}') 
    cy.get('.view>label').contains('Item2').prev().check()
    cy.get('.view>label').contains('Item2').prev().should('be.checked')
    cy.get('.view>label').contains('Item1').should('not.checked')
    cy.get('.view>label').contains('Item3').should('not.checked')
  
})

})
