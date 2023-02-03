const faker = require('faker-br')
import Login from "../support/pages/login";
const login = new Login()
var pass = 'secret_sauce'

describe('LoginTest',()=> {
beforeEach(()=>{
    login.visit()
})
it('successLogin',()=>{
    login.fillname('standard_user')
    login.fillpass(pass)
})
it('errorMessage',()=>{
    errorLogin()
})
it('MsgValidation',()=>{
    login.validateIncorrectPass()
})
})

function errorLogin(){
    login.fillname('standard_user')
    login.fillpass('afsd')
    login.pressbtn()
    login.msgError('Epic sadface: Username and password do not match any user in this service')

}
