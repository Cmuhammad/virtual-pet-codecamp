
class Animal{
    constructor(name/*,organic*/){
        this.name= "name";
        this.hunger = 1;
        this.bordom=50;
        this.energy=50;
        // this.emotionIndex = 0;
        this.emotionArray = ["content", "angry","sad","excited","happy"];

 //       this.organic=organic;
    }
    
   
    // setName(){


    // }
        
    
    hungerLevel(){
        // 1 is starving , 2 is hungry, 3 is peckish, 0 is dead
        
        if(this.hunger >= 76 && this.hunger <= 100){
            return "full";
        }else if( this.hunger >=51 && this.hunger <=75){
            return "pekish";
        }else if ( this.hunger >=26 && this.hunger <=50 ){
            return "hungry";
        }else if ( this.hunger >= 1 && this.hunger <=25){
            return "starving";
        }else{
            return "dead";
        }
        
    }
    energyLevel(currentEnergy){
        if(currentEnergy >= 76 && currentEnergy<= 100){
            return "rested";
        }else if( currentEnergy >=51 && currentEnergy<=75){
            return "okay";
        }else if ( currentEnergy >=26 && currentEnergy <=50 ){
            return "sleepy";
        }else if ( currentEnergy >1 && currentEnergy <=25){
            return "exhuasted";
        }else{
            return "dead";
        }
    }
    petPlay(){
        let play = 3;
        this.bordom -= play;
        this.energy -= (play*3);
        let playDict = {energy: this.energy,boredom:this.bordom};
        return playDict;
        //this.energy -= (play*3);
    }
    // determineEmotion(){
        
    //     return this.emotionArray[newIndex];

    // }
    



    
}

module.exports = Animal;

const underTest = new Animal;
console.log(underTest.emotionIndex);
