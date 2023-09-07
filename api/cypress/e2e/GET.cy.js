
describe('GET API - positive', () => {
    let resp;
    before(() => {
        cy.fetchAPIResponse({ method: 'GET', endpoint: '/v2/pet/findByStatus?status=available', body: '{}' }).then((response) => {
            resp = response
            //cy.log(JSON.stringify(resp))
        })
    })

    afterEach(() => {
        cy.screenshot();
    })

    it('TC1: Validate count of pets', () => {
        expect(resp.body.length).to.be.greaterThan(1)
    })

    it('TC2: Validate name of pet', () => {
        for (let i = 0; i < resp.body.length; i++) {
            if (resp.body[i].name == 'siyaan') {
                cy.log(`Successfully found at index ${i + 1}`)
            }
        }
    })

    it('TC3: Validate status code', () => {
        expect(resp.status).to.eq(200)
    })

    it('TC4: Validate category name', () => {
        for (let i = 0; i < resp.body.length; i++) {
            if (resp.body[i].category) {
                if (resp.body[i].category.name == 'cat')
                    cy.log(`Successfully found at index ${i + 1}`)
            }
        }
    })

    it("TC5 - Different Get request ", function () {
        cy.request("GET", "https://jsonplaceholder.cypress.io/comments", {
        }).then((resp) => {
            // cy.log(JSON.stringify(r))
            cy.log('body size is ' + resp.body.length)

            for (let i = 0; i < resp.body.length; i++) {
                cy.log(i)
                if (resp.body[i].email == 'Hayden@althea.biz') {
                    cy.log('email found at' + i + ' ' + resp.body[i].email)
                }
            }

            cy.log(JSON.stringify(resp.body))
            //expect(resp.status).to.eq(200)
            //  expect(resp).to.have.property('headers')
            // expect(resp).to.have.property('duration')
        });
        cy.screenshot();
    })

})

describe('GET API - negative', () => {
    let resp;
    before(() => {
        cy.fetchAPIResponse({ method: 'GET', endpoint: '/v2/pet/', body: '{}' }).then((response) => {
            resp = response
            //cy.log(JSON.stringify(resp))
        })
    })

    afterEach(() => {
        cy.screenshot();
    })

    it('TC1: Validate error on not providing status', () => {
        expect(resp.status).to.eq(405)
    })
})