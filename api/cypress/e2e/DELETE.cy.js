const { faker } = require('@faker-js/faker');
describe('DELETE API', () => {


    it('Validate delete of new pet', () => {
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
            cy.fetchAPIResponse({ method: 'GET', endpoint: `/v2/pet/${id}`, body: '{}' }).then((response) => {
                expect(response.body.id).to.eq(Number(requestBody.id))
                cy.fetchAPIResponse({ method: 'DELETE', endpoint: `/v2/pet/${id}`, body: '{}' }).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.fetchAPIResponse({ method: 'GET', endpoint: `/v2/pet/${id}`, body: '{}' }).then((response) => {
                        expect(response.status).to.eq(404)
                    })
                })
            })
        })
    })
})