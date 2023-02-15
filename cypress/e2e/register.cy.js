import Register from "../support/pages/registerTests/formElements"
const register = new Register()
const faker = require('faker-br')

describe('registerTests',()=>{
    beforeEach(()=>{
        register.visitPage()
    })

    it('Sucess Registration',()=>{
        cy.log("Passei por aqui")
        register.inputFirstname(faker.name.firstName())
        register.inputLastname(faker.name.lastName())
        register.inputAddress(faker.address.address())
        register.inputEmailAddress(faker.internet.email())
        register.inputPhone(faker.phone.phone())
        register.inputGender("male")
        register.inputHobbies("Cricket")
        register.inputHobbies("Movies")

        
    })




})