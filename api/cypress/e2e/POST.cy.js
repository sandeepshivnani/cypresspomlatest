const { faker } = require('@faker-js/faker');
describe('POST API', () => {


    it.skip("Test1 Post request ", function () {
        cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
            .its('body.0') // yields the first element of the returned list
        // make a new post on behalf of the user
        cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
            title: 'Cypress',
            body: 'Automation Tool',
        })
    })

    it('Validate creation of new pet', () => {
        const id = faker.random.numeric(5);
        const name = faker.animal.dog();

        const requestBody = {
            "id": `${id}`,
            "category": {
                "id": `102`,
                "name": "dog"
            },
            "name": `${name}`,
            "photoUrls": [
                "xyz"
            ],
            "tags": [
                {
                    "id": 101,
                    "name": "string"
                }
            ],
            "status": "available"
        }
        cy.fetchAPIResponse({ method: 'POST', endpoint: '/v2/pet', body: requestBody }).then((response) => {
            expect(response.status).to.eq(200)
            cy.wait(5000)
            cy.fetchAPIResponse({ method: 'GET', endpoint: `/v2/pet/${id}`, body: '{}' }).then((response) => {
                expect(response.body.id).to.eq(Number(requestBody.id))
            })
        })
    })
})