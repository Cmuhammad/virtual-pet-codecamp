const Robot = require("./Robotic");
const underTest = new Robot;

describe("Robot",() =>{
    /*describe("Constructor", ()=>{
        describe("this.organic", ()=>{
            test("does isOrganic return false (false means animal is a robot)",() => {
                expect(underTest.organic).toBeFalsy();
            })
        })           
        describe("this.charge",() =>{
            test("does this.charge return 80 (80 is defaut vaule)", ()=>{
                expect(underTest.charge).toBe(80);
            })
        })
        describe("this.oil",() =>{
            test("does it return 5 (default value is 5)", ()=>{
                expect(underTest.oil).toBe(5);
            })
        })
        describe("this.fix",() =>{
            test("does it return 7", ()=>{
                expect(underTest.fix).toBe(7);
            })
        })
    })
    */
    /*
    describe("getChargeLevel", () =>{
        test("does it print fully charged (this.charge default is 80", ()=>{
            let actual= underTest.getChargeLevel();
            expect(actual).toMatch("80: fully charged.")
        })
    })
    describe("getOilLevel", () => {
        test("should return this.oil (default is 5)", () => {
            const actual = underTest.getOilLevel();
            expect(actual).toBe(5);
        })
    })
    describe("getFixLevel", ()=>{
        test("should return yeah imma die (this.fix default is 7)", ()=>{
            expect(underTest.getFixLevel()).toBe("yeah imma die");
        }) 
    })
    describe("getBoredom", ()=>{
        test("should return 99 (boredom is set to 99)", ()=>{
            expect(underTest.getBoredom()).toBe(99);
        })
    })
    */
    /*
    describe("oilRobot", ()=>{
        test("this.oil should equal 6 (oil by default is 5)", ()=>{
            let actual= underTest.oilRobot()
            expect(underTest.oil).toBe(6);
            underTest.oil = 5; 
        })
    })
    
    describe("chargeRobot", ()=>{
        test("this.charge should be set to 100 (this.charge set to 80)", ()=>{
            expect(underTest.charge).toBe(80);
        })
    })
    describe("fixRobot", ()=>{
        test("should set this.fix to 0",()=>{
            const actual = underTest.fixRobot();
            expect(underTest.fix).toBe(0);
        })
    })
    */

    describe("playRobot", ()=>{        
        test("should set this.oil to be 3 (default is set to 5)" , ()=>{
            underTest.playRobot();
            expect(underTest.getOil()).toBe(3);
        })
         test("should divide this.charge by 2 (default is set to 80)", ()=>{     
            expect(underTest.getCharge()).toBe("40 : plan on plugging me in b!");
        })
        test("should set this.fix to 8 (default is set to 7)", ()=>{
            expect(underTest.getFix()).toBe("yeah imma die");
        }) 
        test("should set this.boredom to 100(default is set to 99)", ()=>{
            expect(underTest.getBoredom()).toBe(100);
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

})