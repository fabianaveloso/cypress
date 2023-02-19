class Input {
    fieldNumber = "[type='number']"
    
    visitPageInput(){
    cy.visit(Cypress.env("herokuapp")+'/inputs')
    }

    increaseNumber(numberUser,numvezes){
        const contador1 = []
        contador1.length = numvezes
        cy.get(this.fieldNumber).type(numberUser)
        cy.wrap(contador1).each(() => {
            cy.get("[type='number']").type('{upArrow}')
        })
        cy.get(this.fieldNumber).should('have.value', parseInt(numberUser)+parseInt(numvezes))//have.value = valor do campo
        
    }
    decreaseNumber(numberUser){
        cy.get(this.fieldNumber).type(numberUser)
        cy.get("[type='number']").type('{downArrow}{downArrow}')
        
    }

}
export default Input 
