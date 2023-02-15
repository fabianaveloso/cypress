class Input {
    fieldNumber = "[type='number']"
    


    visitPageInput(){
    cy.visit(Cypress.env("herokuapp")+'/inputs')
    }

    increaseNumber(numberUser){
        cy.get(this.fieldNumber).type(numberUser)
        cy.get("[type='number']").type('{upArrow}{upArrow}{upArrow}')
        
    }
    decreaseNumber(numberUser){
        cy.get(this.fieldNumber).type(numberUser)
        cy.get("[type='number']").type('{downArrow}{downArrow}')
        
    }

}
export default Input 

