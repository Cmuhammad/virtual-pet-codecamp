const Shelter = require('./Shelter');
const Robot = require('./Robotic');
const Organic = require('./Organic');
const Animal = require('./Animal');
const input = require("readline-sync");
const Cat = require("./Cat");
const CatR = require("./robotcat");
const Dog = require("./Dog");
const DogR = require("./robotdog");

console.log("Welcome to Your Virtual Pet! ");
console.log("-----------------------------");

let userSelection = input.question("Do You Want A Cat or Dog? either cat or dog ");
let isOrganic = input.question("How about a Robot? either yes or no ");
let petName = input.question("What is your pet's name? ");

if(userSelection.toLowerCase() === "cat"){
    if(isOrganic.toLowerCase() === "no"){
        let userPet = new Cat();
        userPet.setName(petName);
        return console.log(userPet);
    }
    else if(isOrganic.toLowerCase() === "yes"){
        let userPet = new CatR();
        userPet.setName(petName);
        return console.log(userPet);
    }
}
if(userSelection.toLowerCase() === "dog"){
    if(isOrganic.toLowerCase() === "no"){
        let userPet = new Dog();
        userPet.setName(petName);
        return console.log(userPet);
    }else if(isOrganic.toLowerCase() === "yes"){
        let userPet = new DogR();
        userPet.setName(petName);
        return console.log(userPet);
    }}
console.log(userPet);
if(isOrganic === "yes"){

}
console.log("You can do many things with your new pet:" + ${petName}+ "! ")
console.log("Play, Feed")
let q= input.question("What would you like to do? ")

if(userPet.Organic= true){
    switch(q.toLowerCase()){
        case "play":

    }

}

// }
// if(userSelectio.toLowerCase() = "dog")
console.log("-----------------------------");


console.log("");
console.log("");

