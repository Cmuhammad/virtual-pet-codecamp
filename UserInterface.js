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

handleCreateNewPet();

// Game Loop
let userInput;
while (userInput != "quit") {
    if(userPet.organic === true) {
        homeMenuOrganic();
        organicSwitchStatemnt();
    } 
    

    else if (userPet.organic === false){
        homeMenuRobot();
        roboticSwitchStatment();
    }
}

function organicSwitchStatemnt() {
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
        case "s":
            shelterMenuSwitch();
            break;
        default:
            whatWouldYouLikeToDo();
    }
}

function roboticSwitchStatment() {
    switch (userInput.toLowerCase()) {
        case "c":
            userPet.chargeRobot();
            console.log(userPet.name + " is " + userPet.chargeRobot());
            break;
        case "o":
            userPet.oilRobot();
            console.log(userPet.name + " is " + userPet.oilRobot());
            break;
        case "f":
            userPet.fixRobot();
            console.log(userPet.name + " is " + userPet.fixLevel());
            break;
        case "s":
            shelterMenuSwitch();
            break;
        default:
            whatWouldYouLikeToDo();
    }
}

function homeMenuOrganic() {
    console.clear();
    console.log("Welcome Home!");
    console.log("You can do many things with your pet:" + petName + "! ");
    console.log("There is a shelter nearby, as well!");
    console.log(`${petName}: (P)lay, (F)eed, (C)lean, or check their (E)motional status.`);
    console.log("Or would you like to go to the (S)helter?");
    whatWouldYouLikeToDo();
}

function homeMenuRobot() {
    console.clear();
    console.log("Welcome Home!");
    console.log("You can do many things with your pet:" + petName + "! ");
    console.log("There is a shelter nearby, as well!");
    console.log(`${petName}: (O)il, (C)harge, or (F)ix`);
    console.log("Or would you like to go to the (S)helter?");
    whatWouldYouLikeToDo();
}

function shelterMenu() {
    console.clear();
    console.log("Welcome to the Animal Shelter!");
    console.log(`${petName} is with you.`)
    console.log(`Charge level is: ${userPet.getChargeLevel()}`);
    console.log("Would you like to...");
    console.log(`Create a (N)ew pet, (O)bserve all pets in the shelter, or (L)eave a pet with us?`);
    console.log("...or go (B)ack home?");
    whatWouldYouLikeToDo();
}

function shelterMenuSwitch(){
    shelterMenu();
    switch(userInput.toLowerCase){
        case "n" : 
            handleCreateNewPet();
        case "l" : 
            //work on this later
        case "o" : 
            //work on this later
        case "b" : 
           if(userPet.isOrganic){
               homeMenuOrganic();
               break;
           } else {
               homeMenuRobot();
               break;
               
           }
    }

}

function whatWouldYouLikeToDo() {
    userInput = "";
    userInput = input.question("What would you like to do?  : ");
    if(userPet.isOrganic){
        Robot.tick();
    }
}

function handleCreateNewPet() {
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
    userPet;
}

