
class Animal{
    constructor(name){
    this.name = name;
    this.hunger = 50;
    this.boredom = 50;
    this.energy = 50;
    this.hygiene = 50;
    this.oil = 50;
    this.maintenance = 50;
    this.charge = 50;
    this.organic = true;
    this.emotionArray = ["content", "angry","sad","excited","happy"];
    }
   
    setName(newName){
        this.name = newName;
    }
    timeTick(){
        if (this.organic === true)
        {
        this.hunger--;
        this.boredom--;
        this.energy--;
        this.hygiene--;
        }
        else if(this.organic === false) {
        this.oil--;
        this.maintenance--;
        this.charge--;
        }
        else {
        console.log("Error organic is not defined")}

    }
}
module.exports = Animal;