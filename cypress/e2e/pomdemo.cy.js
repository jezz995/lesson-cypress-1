import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All login test', () => {

    beforeEach(function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/')

    })

    it('Login with correct credentials', () => {

       
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Performance').click()

    })

    it('Login with invalid password', () => {

        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin133')
        loginPage.clickLogin()
        cy.contains('Performance').click()

    })
})

it('Login with invalid username', () => {

        
    loginPage.enterUsername('Admin11')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.contains('Performance').click()

})