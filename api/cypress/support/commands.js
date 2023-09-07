Cypress.Commands.add('fetchAPIResponse', ({ method, endpoint, body }) => {
    const url = Cypress.env('url') + endpoint
    cy.api({
        url: url,
        method: method,
        body: body,
        failOnStatusCode: false
    })
})