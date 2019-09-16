const Dog = require("./Dog");

const underTest = new Dog ;

describe("Dog", ()=>{
    describe("speak", ()=>{
        test("dog console.logs an Awoooo!", ()=>{
            const actual = underTest.speak();
            expect(actual).toMatch("Awoooo!");
        })
    })
})