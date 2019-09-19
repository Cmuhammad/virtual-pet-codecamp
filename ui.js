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

let userPet;
const shelter = new Shelter();
//Populate the shelter
let cat1 = new Cat("mees");
let cat2 = new CatR("meowss");
let dog1 = new Dog('barko');
let dog2 = new DogR("barkk");
shelter.addResident(cat1);
shelter.addResident(cat2);
shelter.addResident(dog1);
shelter.addResident(dog2);
//


let userInput;
while(userInput !="quit"){
    //creation of pet
    if (userSelection.toLowerCase() === "cat") {
        if (isOrganic.toLowerCase() === "no") {
            userPet = new Cat();
            userPet.setName(petName);
            console.log(userPet);
        }
        else if (isOrganic.toLowerCase() === "yes") {
            userPet = new CatR();
            userPet.setName(petName);
            console.log(userPet);
        }
    }
    if (userSelection.toLowerCase() === "dog") {
        if (isOrganic.toLowerCase() === "no") {
            userPet = new Dog();
            userPet.setName(petName);
            console.log(userPet);
        }
        else if (isOrganic.toLowerCase() === "yes") {
            userPet = new DogR();
            userPet.setName(petName);
            console.log(userPet);
        }
    }
    
    //Adds Shelter
    shelter.addResident(userPet);
    // Takes user to shelter.
    console.log("Away we go to the Shelter")
    console.log("________________________________________");
    console.log("Would you like to...");
    
    // Pet Tick//
    if(userPet.organic === true){
        userPet.tick();
        //Sets up organic switch//
        console.log("You can do many things with your pet:" + petName + "! ");
        console.log(`${petName}: (P)lay, (F)eed, (C)lean, or check their (E)motional status.`);
        console.log(` You can also create a (N)ew pet, (L)ook at all pets in the shelter?`);
        userInput = "";
        userInput = input.question("What would you like to do?  : ");
        switch (userInput.toLowerCase()) {
            case "p":
                userPet.petPlay();
                console.log(userPet.name + " is " + userPet.getBoredom());
                break;
            case "f":
                userPet.petFeed();
                console.log(userPet.name + " is " + userPet.hungerLevel());
                break;
            case "c":
                userPet.petClean();
                console.log(userPet.name + " is " + userPet.petClean());
                break;
            case "e":
                userPet.getEmotion();
                console.log(userPet.name + " is " + userPet.getEmotion());
                break;
            case "n" : 
                handleCreateNewPet();
                break;
            case "l" : 
                let currArr = shelter.getResidentArray();
                for(let i = 0; i < currArr.length; i++){
                    observe(currArr[i]);  
                }
                break;
            default:
                    whatWouldYouLikeToDo();
                    break;
                
        }
    }

    else if ( userPet.organic === false){
        userPet.tick()
        //Sets up Robotic switch//
        console.log("You can do many things with your pet:" + petName + "! ");
        console.log(`${petName}: (O)il, (C)harge, or (F)ix`);
        console.log(` You can also create a (N)ew pet, (L)ook at all pets in the shelter?`);
        console.log("________________________________________");
        console.log("________________________________________");
        userInput = "";
        userInput = input.question("What would you like to do?  : ");
        switch (userInput.toLowerCase()) {
            case "c":
                userPet.chargeRobot();
                console.log(userPet.name + " is " + userPet.getCharge());
                break;
            case "o":
                userPet.oilRobot();
                console.log(userPet.name + " is " + userPet.getOil());
                break;
            case "f":
                userPet.fixRobot();
                console.log(userPet.name + " is " + userPet.getFix());
                break;
            case "n" : 
                handleCreateNewPet();
                break;
            case "l" : 
                let currArr = shelter.getResidentArray();
                for(let i = 0; i < currArr.length; i++){
                    observe(currArr[i]);  
                }
                break;
            default:
                    whatWouldYouLikeToDo();
                    break;
        }
    }
    
    //


}

function whatWouldYouLikeToDo() {
    userInput = "";
    userInput = input.question("What would you like to do?  : ");
    
  }
function handleCreateNewPet() {
    let userSelection = input.question("Do You Want A Cat or Dog? either cat or dog ");
    let isOrganic = input.question("How about a Robot? either yes or no ");
    let petName = input.question("What is your pet's name? ");
    if (userSelection.toLowerCase() === "cat") {
        if (isOrganic.toLowerCase() === "no") {
            userPet = new Cat();
            userPet.setName(petName);
            console.log(userPet);
        }
        else if (isOrganic.toLowerCase() === "yes") {
            userPet = new CatR();
            userPet.setName(petName);
            console.log(userPet);
        }
    }
    if (userSelection.toLowerCase() === "dog") {
        if (isOrganic.toLowerCase() === "no") {
            userPet = new Dog();
            userPet.setName(petName);
            console.log(userPet);
        }
        else if (isOrganic.toLowerCase() === "yes") {
            userPet = new DogR();
            userPet.setName(petName);
            console.log(userPet);
        }
    }
    
    
    shelter.addResident(userPet);
    

}
function observe(userPet) {
    if (userPet.organic === true) {
        console.log(`animal status is below`);
        console.log(`| name  |    hunger     |    boredom       |       energy     |     hygine   |`);
        console.log(`|${userPet.name} | ${userPet.hunger} | ${userPet.boredom} | ${userPet.energy} |`);
        
    }
    else if (userPet.organic === false) {
        console.log(`animal status is below`);
        console.log(`| name  |  charge     |    oil       |       fix     |`);
        console.log(`|${userPet.name}          | ${userPet.charge}      |          ${userPet.oil} |         ${userPet.fix} |`);
    }
    else {
        whatWouldYouLikeToDo();
    }
}