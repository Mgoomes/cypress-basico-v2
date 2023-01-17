Cypress.Commands.add('fillMandatoryFieldsandSubmit', function () {
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Gomes')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#open-text-area').type('Quero ficar bom no Cypress', { delay: 0 })
    cy.contains('button', 'Enviar').click()
})