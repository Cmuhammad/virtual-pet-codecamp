const Organic = require("./Organic");
const underTest = new Organic ;

describe("Organic",() =>{
    //Test passes
    describe("isHungry", () =>{
        test("hungered", () => {
            const actual = underTest.hungerLevel();
            expect(actual).toBe("49 : hungry");
            console.log(actual);
        })
    })
    describe("Energy Level",() => {
        test("does it return what we expect sleepy",() =>{
            let actual = underTest.energyLevel(27);
            expect(actual).toMatch("sleepy");
        })
    })
    describe("does it get bored",() =>{
        test("you bored?", () => {
            let actual = underTest.getBoredom();
            expect(actual).toMatch("chillin'");
        })
    })
    describe("Emotion change work?",() => {
        test("does return angry",() =>{
            let actual = underTest.getEmotion();
            expect(actual).toMatch("content");
        })
    })
    describe("Hygiene change work?",() => {
        test("does return funky?",() =>{
            let actual = underTest.getHygiene();
            expect(actual).toMatch("smelly");
        })
    })
    describe("Does play work",()=>{
        test("is energy and play affected", ()=>{
            let actual = underTest.petPlay();
            expect(actual).toEqual({energy: 40,boredom:52});
        })

    })  
    describe("Does feeding work",()=>{
        test("is u eating", ()=>{
            let actual = underTest.petFeed();
            expect(actual).toEqual({hunger: 59,energy: 30});
        })
    })
    describe("does cleaning work",() => {
        test("are we clean?",()=> {
            let actual = underTest.petClean();
            expect(actual).toBe(100);
        })
    })
    describe("does getHealth does return correct value",() => {
        test("feeling great",()=> {
            let actual = underTest.getHealth();
            expect(actual).toBe("feeling great");
        })
    })
})
