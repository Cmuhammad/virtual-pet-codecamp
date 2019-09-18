const Animal = require('./Animal');


class Robot extends Animal{
    constructor(name){
        super();
        this.organic = false;
        this.name = name;
        this.charge = 80;
        this.oil = 0;
        this.fix = 7;
        delete this.hunger;
        delete this.energy;
        delete this.boredom;
        delete this.emotionArray;
    }
    chargeLevel(){
        // super.chargeLevel();
            this.tick();
            if(this.charge >= 76 && this.charge <= 100){
                return "fully charged";
            }else if( this.charge >=51 && this.charge <=75){
                return "adequte charge";
            }else if ( this.charge >=26 && this.charge <=50 ){
                return "plan on plugging me in b";
            }else if ( this.charge >= 1 && this.charge <=25){
                return " yo you bugging";
            }else{
                return "----------- 0% battery";
            }
        }
    tick(){
        this.charge -- ;
        this.oil --;
        this.fix ++;

    }
    oilRobot(){
        if(this.oil <= 10 && this.oil >=0){
        this.oil ++;
        return this.oil;
        }else{
            return "bro I am ded";
        }
    }

    chargeRobot(){
        this.charge ++;
        return this.charge;
    }

    fixLevel(){
        if(this.fix <= 4){
            return "I am good son";
        }else if (this.fix <=6){
            return "bro I need a doctor";
        }else if ( this.fix <=9){
            return "yeah imma die";
        }else{
            return "Your Robet is broken beyond repair";
        }
        

    }

    fixRobot(){
        do {
            this.fix --;
        }
        while(this.fix>(0);

        return this.fix;
        
    }

    playRobot(){
        this.charge -= 20;
        this.oil -= 2;
        this.fix +=2;

    }

}

module.exports = Robot;
const Roboplay = new Robot("Scooby");
console.log(Roboplay);










