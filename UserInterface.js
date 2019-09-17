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

if(userSelection.toLowerCase() === "cat"){
    if(isOrganic.toLowerCase() === "no"){
        userPet = new Cat();
        userPet.setName(petName);
        console.log(userPet);
    }
    else if(isOrganic.toLowerCase() === "yes"){
        userPet = new CatR();
        userPet.setName(petName);
        console.log(userPet);
    }
}
if(userSelection.toLowerCase() === "dog"){
    if(isOrganic.toLowerCase() === "no"){
        userPet = new Dog();
        userPet.setName(petName);
        console.log(userPet);
    }else if(isOrganic.toLowerCase() === "yes"){
        userPet = new DogR();
        userPet.setName(petName);
       console.log(userPet);
    }}
userPet;

console.log("You can do many things with your new pet:" + petName+ "! ")
let q;

// Interacting with pet loop
while(q != "quit"){
    if(userPet.organic=== true){
            console.log("Play, Feed, or Clean");
            q = input.question("What would you like to do? ");
        switch(q.toLowerCase()){
            case "play":
                userPet.petPlay();
                console.log( userPet.name+ " is "+ userPet.getBoredom());
                break;
            case "feed":
                userPet.petFeed();
                console.log( userPet.name+ " is "+ userPet.hungerLevel());
                break;
            case "clean":
                userPet.petClean();
                console.log( userPet.name+ " is "+ userPet.getHygiene());
                break;
            case "feeling":
                userPet.getEmotion();
                console.log( userPet.name+ " is "+ userPet.getEmotion());
                break;
            default:
            console.log("not recognized selection");
            break;
        }

    }
    else if(userPet.organic=== false){
            console.log("Oil, Charge, or Fix ");
            q = input.question("What would you like to do? ");
        switch(q.toLowerCase()){
            case "charge":
            userPet.chargeRobot();
            console.log (userPet.name+ " is "+ userPet.chargeRobot());
            break;
            case "oil":
                userPet.oilRobot();
                console.log(userPet.name+ " is "+ userPet.oilRobot());
                break;
            case "fix":
                userPet.fixRobot();
                console.log (userPet.name+" is "+ userPet.fixLevel());
                break;

        }
    }
    q= input.question("What would you like to do? ")
}

///shelter interactions
console.log("We also have shelter near by as well.")
console.log(" You can interact with the shelter in many ways")
console.log("")
let shelter;
let cat1;
let cat2; 
let dog1 ;
let dog2;
newShelter();




// if(userSelectio.toLowerCase() = "dog")
console.log("-----------------------------");


console.log("");
console.log("");

function newShelter() {
    const shelter = new Shelter();
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

