class AutomationTest{
    add = "[onclick='addElement()']"
    remove = '[onclick="deleteElement()"]'

    visitMainPage(){
        cy.visit(Cypress.env("herokuapp"))
    }
    visitAddRemove(){
        cy.visit(Cypress.env("herokuapp")+"/add_remove_elements/")//Concatenando a string da variavel com o restante
    }
    clickaddbutton(){
        cy.get(this.add).click()
    }

    clickRemoveBtn(){
        cy.get(this.remove).first().click()
    }

    clickRemoveAllButton(){
        cy.get(this.remove).each((buttons)=>{
            cy.get(buttons).click()
        })    
        cy.get('[onclick="deleteElement()"]').should('not.exist')
    }

    clickRemoveEachButton(){
        cy.get(this.remove).then((buttons)=>{
            cy.get(buttons).last().click()
        }
    )}
}
export default AutomationTest

