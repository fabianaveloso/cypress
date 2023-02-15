class Register {
    firstName = "[placeholder='First Name']"
    lastName = "[placeholder='Last Name']"
    address = "[ng-model='Adress']"
    emailAddress = "[type='email']"
    phone = "[ng-model='tel']"
    radioGender = "[name='radiooptions']"
    hobbies = "[type='checkbox']"

inputFirstname(name){
    cy.get(this.firstName).type(name)
}
inputLastname(name){
    cy.get(this.lastName).type(name)
}
inputAddress(address){
    cy.get(this.address).type(address)
}
inputEmailAddress(email){
    cy.get(this.emailAddress).type(email)
}
inputPhone(phone){
    cy.get(this.phone).type(phone)
}
inputGender(gender){
    cy.get(this.radioGender).contains(gender).check()

}
inputHobbies(hobby){
    cy.get(this.hobbies).contains(hobby).check()
}
visitPage(){
    cy.visit(Cypress.env("demoAut"))
}

}
export default Register
