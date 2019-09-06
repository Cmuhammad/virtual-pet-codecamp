const Animal = require("./Animal");
const underTest = new Animal ;

describe("Animal",() =>{
    describe("setOrganic", ()=>{
        test("does it return what is was given", ()=>{
            

            const actual = underTest.setOrganic(true);

            expect(actual).toBe(true);
        })
    })
    describe("isHungry", () =>{
        test("level1", () => {
            const actual = underTest.hungerLevel(1);
            expect(actual).toBe("starving");
        })
        test("level2", () => {
            const actual = underTest.hungerLevel(2);
            expect(actual).toBe("hungry");
        })
        test("level 3", () => {
            const actual = underTest.hungerLevel(3);
            expect(actual).toBe("peckish");
        })
        test(" level 3", () => {
            const actual = underTest.hungerLevel(0);
            expect(actual).toBe("dead");
        })
    })
    describe("Energy levels work?", () =>{
         test("does print it rested", () => {
             let actual = underTest.energyLevel(76);
             expect(actual).toBe("rested");

          })
         test("does print it okay", () => {
             let actual = underTest.energyLevel(51);
             expect(actual).toBe("okay");

         })
         test("does print it sleepy", () => {
            let actual = underTest.energyLevel(26);
            expect(actual).toBe("sleepy");

         })
         test("does print it exhausted", () => {
            let actual = underTest.energyLevel(25);
             expect(actual).toBe("exhuasted");

         })
         test("does print it ded", () => {
            let actual = underTest.energyLevel(-3);
             expect(actual).toBe("ded");

         })
    })
    // describe("emotions work?", () =>{
    //     test("is there an emotion?", ()=>{
    //         let actual = underTest.currentEmotion();
    //         expect(actual).toContain();
            
        


    //     })
    // })
})