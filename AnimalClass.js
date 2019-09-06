class AnimalClass{

    constructor(){
        this.emotion = [];
    }
   
    setOrganic(bool){
        return bool;
        
    }
    hungerLevel(currentHunger){
        // 1 is starving , 2 is hungry, 3 is peckish, 0 is dead
        switch(currentHunger){
            case 1:
                return "starving";
                break;
            case 2:
                return "hungry"
                break;
            case 3:
                return "peckish";
                break;
            default:
                return "dead";
                break;
        }

    }
    energyLevel(currentEnergy)
    {
        if(currentEnergy >= 76 && currentEnergy<= 100){
            return "rested";
        }else if( currentEnergy >=51 && currentEnergy<=75){
            return "okay";
        }else if ( currentEnergy >=26 && currentEnergy <=50 ){
            return "sleepy";
        }else if ( currentEnergy >1 && currentEnergy <=25){
            return "exhuasted";
        }else{
            return "ded";
        }
    }
    currentEmotion(emotion){
        

    }
    



    
}

module.exports = AnimalClass;