const request = require("supertest");
const app = require("./index")

describe("Power route", () => {
    it("It should return the power", async() => {
        const data = {
            base: 4,
            exp: 2
        }
        const res = await request(app).post("/power").send(data);

        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty("message")
        expect(res.body).toHaveProperty("result")
    })
})