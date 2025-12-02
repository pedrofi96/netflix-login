
describe('Login Netflix' , ()=>{
    it('Login Com Sucesso', ()=>{
        cy.visit('https://www.netflix.com')
        cy.get('button[aria-label="Close"]').click()
        cy.contains('a', 'Sign In').click()

        cy.get('input[name="userLoginId"]').type(Cypress.env('login_netflix'))
        cy.get('input[name="password"]').type(Cypress.env('senha_netflix'))
        cy.get('button[data-uia="sign-in-button"]').click()

        //Assert
        cy.contains('a', 'Gerenciar perfis').should('be.visible')
    })
})