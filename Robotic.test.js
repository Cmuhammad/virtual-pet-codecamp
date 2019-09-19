const Robot = require("./Robotic");
const underTest = new Robot("testName");

describe("Robot class", () => {
    describe("constructor",() => {
        test("organic should return false", () => {
            const actual = underTest.organic;
            expect(actual).toBe(false);
        })
        test("name should return any string", () => {
            const actual = underTest.name;
            expect(actual).toBe("testName");
        })
        // Make sure other variables work
    })
    

})