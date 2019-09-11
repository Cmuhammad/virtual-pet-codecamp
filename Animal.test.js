const Animal = require("./Animal");
const underTest = new Animal ;

describe("Animal",() =>{
    describe("constructor", ()=>{
        test("does it return a name", ()=>{
            
            expect(typeof underTest.name).toBe("undefined");
        })
    })

    describe("does timeTick decrement variables properly?", ()=>{
        test("hunger, boredom, energy, hygiene for Organic", ()=>{
            const test = underTest.timeTick();
            if (underTest.organic){
                expect(underTest.hunger).toBe(49);
                expect(underTest.boredom).toBe(49);
                expect(underTest.energy).toBe(49);
                expect(underTest.hygiene).toBe(49);
            } else if (!underTest.organic){
                expect(underTest.oil).toBe(49);
                expect(underTest.maintenance).toBe(49);
                expect(underTest.charge).toBe(49);
            }
        })
            
            
        
    })


})