const supertest = require('supertest')
const server = require('./server')

describe('server', () => {
    describe('get /', () => {
        it("should return a 200 status and a json", async () => {

            const response = await supertest(server).get("/")
            expect(response.status).toEqual(200)
            expect(response.type).toEqual('application/json')
            expect(response.body).toEqual({message: 'testing'})
        })
    })

    describe('get /gadgets', () => {
        it("should return a list of item", async () => {
            const response = await supertest(server).get('/gadgets')

            expect(response.status).toEqual(200)
            expect(response.type).toEqual("application/json")
            expect(response.body.length).toBeGreaterThanOrEqual(3)
        })
    })

    describe('post /gadgets', () => {
        it("should insert an item to the list", () => {
            const item = { name: "www" }
            return supertest(server)
              .post("/gadgets")
              .send(item)
              .then((res) => {
                expect(res.status).toBe(201)
              })
        })
    })

    describe('delete', () => {

    })
})

