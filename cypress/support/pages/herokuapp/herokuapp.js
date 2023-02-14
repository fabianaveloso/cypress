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
  clickRemoveButton(){
        cy.get(this.remove).each(buttons=>{
            cy.get(buttons).click()
        })
    }
}
export default AutomationTest

