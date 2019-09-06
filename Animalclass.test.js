const AnimalPet = require("./AnimalClass");
const underTest = new AnimalPet ;

describe("AnimalClass",() =>{
    describe("parse", ()=>{
        test("does it return 1", ()=>{
            

            const actual = underTest.parse(1);

            expect(actual).toBe(1);
        })
    })
})