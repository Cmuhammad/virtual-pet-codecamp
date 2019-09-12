const Robot = require("./Robotic");
const underTest = new Robot;

describe("Robot",() =>{
    describe("organic", ()=>{
        test("does it return false", ()=>{
    

            expect(underTest.organic).toBeFalsy();
        })
describe("charge",() =>{
    test("does it return 80", ()=>{

        expect(underTest.charge).toBe(80);
    })
})
    })
describe("oil",() =>{
    test("does it return 5", ()=>{

        expect(underTest.oil).toBe(5);
    })
})
describe("fix",() =>{
    test("does it return 7", ()=>{

        expect(underTest.fix).toBe(7);
    })
})
describe("chargeLevel", () =>{
    test("does it print fully charged", ()=>{
        let actual= underTest.chargeLevel(80);
        expect(actual).toMatch("fully charged");
    })
})
describe("oilRobot", =>{
    test("d", ()=>{
        let actual= underTest.chargeLevel
    })
})
})

