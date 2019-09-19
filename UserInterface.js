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
populateShelter(shelter); ///populates shleter
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
    // console.clear();
    console.log("Welcome Home!");
    console.log("You can do many things with your pet:" + petName + "! ");
    console.log("There is a shelter nearby, as well!");
    console.log(`${petName}: (P)lay, (F)eed, (C)lean, or check their (E)motional status.`);
    console.log("Or would you like to go to the (S)helter?");
    whatWouldYouLikeToDo();
}

function homeMenuRobot() {
    // console.clear();
    console.log("Welcome Home!");
    console.log("You can do many things with your pet:" + petName + "! ");
    console.log("There is a shelter nearby, as well!");
    console.log(`${petName}: (O)il, (C)harge, or (F)ix`);
    console.log("Or would you like to go to the (S)helter?");
    whatWouldYouLikeToDo();
}
//Needs to be adjusts
function shelterMenu() {
    // console.clear();

    observe(userPet);
    console.log("Would you like to...");
    console.log(`Create a (N)ew pet, (O)bserve all pets in the shelter?`);
    console.log("...or go (B)ack home?");
    whatWouldYouLikeToDo();
}
//works
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
//Needs work
function shelterMenuSwitch(){
    shelterMenu();
    switch(userInput.toLowerCase().trim()){
        case "n" : 
            handleCreateNewPet();
            break;
        case "o" : 
            let currArr = shelter.getResidentArray();
            for(let i = 0; i < currArr.length; i++){
                observe(currArr[i]);  
            }
            break;
        case "b" : 
           if(userPet.isOrganic){
               homeMenuOrganic();
               break;
           } else {
               homeMenuRobot();
               break;}
        default:
            console.log("workings");

               
           
    }

}
//works- needs adjustment
function whatWouldYouLikeToDo() {
    userInput = "";
    userInput = input.question("What would you like to do?  : ");
    if(userPet.isOrganic){
        Robot.tick();
    }

    
}
//works
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
    
    
    shelter.addResident(userPet);
    

}
//Works - remove setters, use constructor
function populateShelter(shelter) {
    let cat1 = new Cat();
    let cat2 = new CatR();
    let dog1 = new Dog();
    let dog2 = new DogR();
    dog1.setName('barko');
    dog2.setName("barkk");
    cat1.setName("meowss");
    cat2.setName("beeeo");
    shelter.addResident(cat1);
    shelter.addResident(cat2);
    shelter.addResident(dog1);
    shelter.addResident(dog2);
}


