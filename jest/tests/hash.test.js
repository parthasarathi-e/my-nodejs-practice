const {hashedPassword} = require("../app");

describe("Testing the password hash function", () => {
    it("Should hash the password", async () => {
        const password = "thisisajesttestingfunction";
        const hash = await hashedPassword(password);
        expect(hash).not.toBe(password);

    })
})