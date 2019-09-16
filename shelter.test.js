const Shelter = require('./Shelter');
const Robot = require('./Robotic');
const Organic = require('./Organic.js');

const underTest = new Shelter;
const animal = new Robot("robet");

describe("Shelter", () =>{
    test("Does it add and robet",()=>{
        const underTest = new Shelter;
        const animal = new Robot("robet");
        underTest.addResident(animal);
        const actual = underTest.getResidentArray();
        expect(actual).toContain(animal);
    })
    describe("getResident", () => {
        test("should return resident when given a name ", () => {
            const underTest = new Shelter;
            const animal = new Robot("robet");
    
            underTest.addResident(animal);
            const actual = underTest.getResident("robet");
            expect(actual).toBe(animal);
        });
      });
})
