const Animal = require("./Animal");

class Organic extends Animal{

constructor(){
    super();
    this.hunger = 50;
    this.boredom = 50;
    this.energy = 50;
    this.hygiene = 50;
    this.emotionArray = ["content", "angry","sad","excited","happy"];
    this.organic = true;
    }
   
    tick(){
        this.hunger--;
        this.boredom--;
        this.energy--;
        this.hygiene--;
    }
    
    hungerLevel(){        
        if (this.hunger >= 76 && this.hunger <= 100){
            return "full";
        }else if (this.hunger >= 51 && this.hunger <= 75){
            return "pekish";
        }else if (this.hunger >= 26 && this.hunger <= 50 ){
            return "hungry";
        }else if (this.hunger >= 1 && this.hunger <= 25){
            return "starving";
        }else{
            return "dead";
        }
    }

    energyLevel(currentEnergy){
        if (currentEnergy >= 76 && currentEnergy <= 100){
            return "rested";
        }else if (currentEnergy >= 51 && currentEnergy <= 75){
            return "okay";
        }else if (currentEnergy >= 26 && currentEnergy <= 50 ){
            return "sleepy";
        }else if (currentEnergy >= 1 && currentEnergy <= 25){
            return "exhuasted";
        }else{
            return "dead";
        }
    }

    getBoredom(){
        if (this.boredom >= 76 && this.boredom <= 100){
            return "ecstatic";
        }else if (this.boredom >= 51 && this.boredom <= 75){
            return "entertained";
        }else if (this.boredom >= 26 && this.boredom <= 50 ){
            return "chillin'";
        }else if (this.boredom >= 1 && this.boredom <= 25){
            return "lethargic";
        }else{
            return "not entertained!";
        }
    }

    petPlay(){        
        let play = 3;
        this.boredom += play;
        this.energy -= (play*3);
        this.hygiene -= 8;
        let playDict = {energy: this.energy,boredom:this.boredom};
        return playDict;
    }
    petFeed(){
        let food = 10;
        this.hunger += food;
        this.energy -=(food);
        let playDict = {energy: this.energy,hunger:this.hunger};
        return playDict;
    }
    petClean(){
        this.hygiene = 100;
        return this.hygiene;
     
    }

    getEmotion(){
        let emotionLevel;
        emotionLevel = (this.energy + this.hunger + this.boredom + this.hygiene) / 4;
        if (emotionLevel >= 1 && emotionLevel <= 20){
            return this.emotionArray[1];
        } else if (emotionLevel >= 21 && emotionLevel <= 39){
            return this.emotionArray[2];
        } else if (emotionLevel >= 40 && emotionLevel <= 59){
            return this.emotionArray[0];
        } else if (emotionLevel >= 60 && emotionLevel <= 79){
            return this.emotionArray[4];
        } else if (emotionLevel >= 80 && emotionLevel <= 100){
            return this.emotionArray[3];
        } else {
            return "Error : " + emotionLevel;
        }
    }
    getHygiene(){
        if (this.hygiene >= 76 && this.hygiene <= 100){
            return "fresh";
        }else if (this.hygiene >= 51 && this.hygiene <= 75){
            return "okay";
        }else if (this.hygiene >= 26 && this.hygiene <= 50 ){
            return "smelly";
        }else if (this.hygiene >= 1 && this.hygiene <= 25){
            return "dirty";
        }else{
            return "stank";
        }
    }
}   
module.exports = Organic;
