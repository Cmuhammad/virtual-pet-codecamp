const AnimalClass = require("./AnimalClass");
const underTest = new AnimalClass ;

describe("AnimalClass",() =>{
    describe("setOrganic", ()=>{
        test("does it return what is was given", ()=>{
            

            const actual = underTest.setOrganic(true);

            expect(actual).toBe(true);
        })
    })
    describe("isHungry", () =>{
        test("does hunger work?", () => {
            const actual = underTest.hungerLevel(2);
            expect(actual).toBe("hungry");
        })
    })
})