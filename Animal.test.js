const Animal = require("./Animal");
describe("Animal", () => {
    test(`return one when returnOne is called`, () =>{
        // Arrange
        const underTest = new Animal();
        // Act
        const actual = Animal.returnOne();
        // Assert
        expect(actual).toBe(1);
    }) 
    }
)