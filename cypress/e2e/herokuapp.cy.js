import AutomationTest from "../support/pages/herokuapp/herokuapp"
const automationTest = new AutomationTest()

describe('Click buttons',()=>{
    beforeEach(()=>{
        automationTest.visitAddRemove()
    })
    
    it('Click on add and remove each', ()=>{
        criarVariasTarefasAleatórias(9,8)
        cy.get('[onclick="deleteElement()"]').should('be.visible')
    })

    it('Click on ALL buttons',()=>{
        criarVariasTarefasAleatórias(9,0)
        automationTest.clickRemoveAllButton()
        cy.get('[onclick="deleteElement()"]').should('not.exist')
    })
})

function criarVariasTarefasAleatórias(quantidade1, quantidade2) {
    const contador1 = []
    const contador2 = []
    contador1.length = quantidade1
    contador2.length = quantidade2
    
    cy.wrap(contador1).each(() => {
        automationTest.clickaddbutton()
    })
    cy.wrap(contador2).each(() => {
        automationTest.clickRemoveBtn()

    })

}