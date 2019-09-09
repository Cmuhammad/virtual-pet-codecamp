const Animal = require("./Animal");
const underTest = new Animal ;

describe("Animal",() =>{
    describe("constructor", ()=>{
        test("does it return a name", ()=>{
            
            expect(typeof underTest.name).toMatch("string");
        })
    })
    describe("isHungry", () =>{
        // test("level 1", () => {
        //     const actual = underTest.hungerLevel(1);
        //     expect(actual).toBe("starving");
        //     console.log(actual);
        // })
        test("level 2", () => {
            const actual = underTest.hungerLevel();
            expect(actual).toBe("hungry");
        })
        // test("level 3", () => {
        //     const actual = underTest.hungerLevel(3);
        //     expect(actual).toBe("peckish");
        // })
        // test(" level 4", () => {
        //     const actual = underTest.hungerLevel(4);
        //     expect(actual).toBe("full");
        // })
       
        // test(" level 0", () => {
        //     const actual = underTest.hungerLevel(0);
        //     expect(actual).toBe("dead");
        // })
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
             expect(actual).toBe("dead");

         })
    })
    // describe("Emotion change work?",() => {
    //     test("does return angry",() =>{
    //         let actual = underTest.determineEmotion(1);
    //         expect(actual).toMatch("angry");
    //     })
    //     test("does return sad",() =>{
    //         let actual = underTest.determineEmotion(2);
    //         expect(actual).toMatch("sad");
    //     })
    // })
    describe("Does play work",()=>{
        test("is energy and play affected", ()=>{
            let actual = underTest.petPlay();
            expect(actual).toEqual({energy: 41,boredom:47});
        })
        
    })
    describe("Does eat work",()=>{
        test("is energy and hunger affected", ()=>{
            let actual = underTest.petFeed();
            expect(actual).toEqual({energy: 31,hunger:40});
        })
        
    })
})