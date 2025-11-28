/// <reference types="cypress" />

context('Funcionalidade Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('renan.felix.f@gmail.com')
        cy.get('#password').type('34D@rigaz')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválidos', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('rean.felix.f@gmail.com')
        cy.get('#password').type('34D@rigaz')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })
    it('Deve exibir uma mensagem de erro ao inserir usuario ou senha inválidos', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('renan.felix.f@gmail.com')
        cy.get('#password').type('34D@rigz')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail renan.felix.f@gmail.com está incorreta. Perdeu a senha?')
    })
})   