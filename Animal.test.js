const Animal = require("./Animal");
const underTest = new Animal ;

describe("Animal",() =>{
    describe("constructor", ()=>{
        test("does it return a name", ()=>{
            
            expect(typeof underTest.name).toBe("undefined");
        })
    })

    // describe("isHungry", () =>{
        // test("level 1", () => {
        //     const actual = underTest.hungerLevel(1);
        //     expect(actual).toBe("starving");
        //     console.log(actual);

        // test(" level 0", () => {
        //     const actual = underTest.hungerLevel(0);
        //     expect(actual).toBe("dead");
        // })
    // })
    // describe("Energy levels work?", () =>{
    //      test("does print it rested", () => {
    //          let actual = underTest.energyLevel(76);
    //          expect(actual).toBe("rested");

    //      })
    //      test("does print it ded", () => {
    //         let actual = underTest.energyLevel(-3);
    //          expect(actual).toBe("dead");

    //      })
    // })

    //     test(`boredomLevel should return chillin'`, ()=>{
    //         const actual = underTest.boredomLevel();
    //         expect(actual).toBe("chillin'");
    //     })

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
    // describe("Does play work",()=>{
    //     test("is energy and play affected", ()=>{
    //         let actual = underTest.petPlay();
    //         expect(actual).toEqual({energy: 40,boredom: 52});
    //     })
    
    // })
    // describe("Does eat work",()=>{
    //     test("is energy and hunger affected", ()=>{
    //         let actual = underTest.petFeed();
    //         expect(actual).toEqual({energy: 31,hunger:40});
    //     })
        
    // })

    // describe("returns appropriate string from emotionalArray", ()=>{
    //     test("getEmotion", ()=>{
    //         let actual = underTest.getEmotion();
    //         expect(actual).toBe("content");
    //     })

    // })


})