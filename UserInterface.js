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
    else{
        return console.log("Error Code: 1738, Check response.")
        }}

if(userSelection.toLowerCase() === "dog"){
    if(isOrganic.toLowerCase() === "no"){
        let userPet = new Dog();
        userPet.setName(petName);
        return console.log(userPet);
    }else if(isOrganic.toLowerCase() === "yes"){
        let userPet = new DogR();
        userPet.setName(petName);
        return console.log(userPet);
    }
    else{
        return console.log("Error Code: 1738, Check response.")
}}
console.log("You can do many things with your new pet:" + petName+ "! ");
console.log("Play, Feed");
let q= input.question("What would you like to do? ");

if(userPet.organic=true){
    switch(q.toLowerCase()){
        case "Play":
            userPet.petPlay(); 
            console.log(userPet);
            break;
        case "Feed":
            userPet.petFeed();
            console.log(userPet);
            break;
        case "Clean":
            userPet.petClean();
            console.log(userPet);
            break;
}}
if(userPet.organic=false){
    switch(q.toLowerCase()){
        case "Charge":
            userPet.chargeRobot(); 
            console.log(userPet);
            break;
        case "Oil":
            userPet.oilRobot();
            console.log(userPet);
            break;
        case "Fix":
            userPet.fixRobot();
            console.log(userPet);
            break;
}}


// if(userSelectio.toLowerCase() = "dog")
console.log("-----------------------------");


console.log("");
console.log("");

