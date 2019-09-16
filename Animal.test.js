const Animal = require("./Animal");
const underTest = new Animal ;

describe("Animal",() =>{
    describe("constructor", ()=>{
        test("does it return a name", ()=>{
            
            expect(typeof underTest.name).toBe("undefined");
        })
    })



})