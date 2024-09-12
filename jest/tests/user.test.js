const {createUser} = require("../app");

describe("Testing the create user function",()=>{
    it("Should create a user",()=>{
       
        const user = createUser({username:"Test",password:"test"});

        expect(user).toBe(true);
    })
})