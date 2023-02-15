class Login {
   namefield = '#user-name'
   passfield = '#password'
   btnlogin =  '#login-button'
   msgVar = 'h3'

fillname(name){
    cy.get(this.namefield).type(name)
}
fillpass(pass){
    cy.get(this.passfield).type(pass)
}
pressbtn(){
    cy.get(this.btnlogin).click()
}
msgError(msg){
    cy.get(this.msgVar).should('have.text',msg).should('be.visible')
}
visit(){
    cy.visit(Cypress.env('sauceDemo'))
}

validateIncorrectPass(){
    this.fillname('standard_user')
    this.fillpass('afsd')
    this.pressbtn()
    this.msgError('Epic sadface: Username and password do not match any user in this service')
}
}

export default Login;
