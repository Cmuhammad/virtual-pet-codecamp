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
console.log("There is a shelter nearby, as well!");
let q;

while (q != "quit"){
    if(userPet.organic=== true){
        console.log("(P)lay, (F)eed, or (C)lean");
        console.log("Or would you like to go to the (S)helter?");
        q = input.question("What would you like to do? ");
        switch(q.toLowerCase()){
            case "p":
                userPet.petPlay();
                console.log( userPet.name+ " is "+ userPet.getBoredom());
                break;
            case "f":
                userPet.petFeed();
                console.log( userPet.name+ " is "+ userPet.hungerLevel());
                break;
            case "c":
                userPet.petClean();
                console.log( userPet.name+ " is "+ userPet.getHygiene());
                break;
            case "feeling":
                userPet.getEmotion();
                console.log( userPet.name+ " is "+ userPet.getEmotion());
                break;
            case "s":
                    
            default:
                q = input.question("What would you like to do? ");
            break;
        }

    } else if (userPet.organic === false){
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
            default: 
                q = input.question("What would you like to do? ");

        }
    } else if (q === "s") {
        console.log("Welcome to the Animal Shelter!");
        console.log("Here you can (C)reate a new animal, (A)dd your current pet as a resident, (G)et a resident out, or go back (H)ome.");
        q = input.question("What would you like to do? ");
        
    }
    q = input.question("What would you like to do? ");
}



// if(userSelectio.toLowerCase() = "dog")
console.log("-----------------------------");


console.log("");
console.log("");

