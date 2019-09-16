const Cat = require("./Cat");

const underTest = new Cat ;

describe("Cat", ()=>{
    describe("speak", ()=>{
        test("cat returns an Mooooooow! string", ()=>{
            const actual = underTest.speak();
            expect(actual).toMatch("Mooooooow!");
        })
    })
})