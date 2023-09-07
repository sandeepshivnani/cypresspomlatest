const { faker } = require('@faker-js/faker');
describe('POST API', () => {


   

    it('Validate updation of new pet', () => {
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
        const modifiedRequestBody = {
            "id": `${id}`,
            "category": {
                "id": `102`,
                "name": "dog"
            },
            "name": `${name} Updated`,
            "photoUrls": [
                "xyz"
            ],
            "tags": [
                {
                    "id": 101,
                    "name": "string"
                }
            ],
            "status": "pending"
        }
        cy.fetchAPIResponse({ method: 'POST', endpoint: '/v2/pet', body: requestBody }).then((response) => {
            expect(response.status).to.eq(200)
            cy.wait(5000)
            cy.fetchAPIResponse({ method: 'GET', endpoint: `/v2/pet/${id}`, body: '{}' }).then((response) => {
                expect(response.body.id).to.eq(Number(requestBody.id))
                cy.fetchAPIResponse({ method: 'PUT', endpoint: `/v2/pet`, body: modifiedRequestBody }).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.fetchAPIResponse({ method: 'GET', endpoint: `/v2/pet/${id}`, body: '{}' }).then((response) => {
                        expect(response.body.status).to.eq('pending')
                        expect(response.body.name).to.eq(`${name} Updated`)
                    })
                })
            })
            
        })
    })
})