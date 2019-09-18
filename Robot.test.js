const Robot = require("./Robotic");
const underTest = new Robot;

describe("Robot",() =>{
    describe("organic", ()=>{
        test("does it return false", ()=>{
    

            expect(underTest.organic).toBeFalsy();
})           })
describe("charge",() =>{
    test("does it return 80", ()=>{

        expect(underTest.charge).toBe(80);
    })
})
    })
describe("oil",() =>{
    test("does it return 0", ()=>{

        expect(underTest.oil).toBe(0);
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
describe("oilRobot", ()=>{
    test("no oil", ()=>{
        let actual= underTest.oilRobot()
        expect(actual).toBe("bro I am ded");
    })
})
// describe("tick", () =>{
    // test("charge going down",() =>{
        // let actual= underTest.tick()
        // expect(underTest.charge).toBe(78);
    // })
    // test("oil is going down",() =>{
        // let actual= underTest.tick()
        // expect(underTest.oil).toBe(0);
   // })
    // test("robot needs fixing",() =>{
        // let actual= underTest.tick()
        // expect(underTest.fix).toBe(11);
    // })
// })
// })
describe("chargeRobot", ()=>{
    test("charging level", ()=>{
        expect(underTest.charge).toBe(79);
    })
})
describe("fixLevel", ()=>{
    test("I am good son", ()=>{
        expect(underTest.fixLevel()).toBe("yeah imma die");
    }) 
})
describe("fixRobot", ()=>{
    test("fix the robot",()=>{
        expect(underTest.fixRobot()).toBe(0);
 
    })
})