import supertest from "supertest";
import { app } from "../src/app/app";
import { logger } from "../src/app/logging";
describe('POST /api/users', ()=>{
    it('should return 400',async ()=>{
        const response = await supertest(app)
        .post("/api/users")
        .send({
            username:"",
            password:"",
            name: ""
        });
       
        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    })
})