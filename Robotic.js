const Animal = require('./Animal');


class Robot extends Animal{
    constructor(name){
        super();
        this.organic = false;
        this.name = name;
        this.charge = 80;
        this.oil = 5;
        this.fix = 7;
       
    }
    getChargeLevel(){
        this.tick();
        if(this.charge >= 76 && this.charge <= 100){
            return ` ${this.charge}: fully charged.`;
        }else if( this.charge >=51 && this.charge <=75){
            return `${this.charge}: adequtly charged.`;
        }else if ( this.charge >=26 && this.charge <=50 ){
            return `${this.charge} : plan on plugging me in b!`;
        }else if ( this.charge >= 1 && this.charge <=25){
            return  `${this.charge} : yo you bugging!`;
        }else{
            animalDied();
            return "----------- 0% battery";

            // calls deadAnimal();this.isDead = true;
        }
    }

    tick(){
        this.charge--;
        this.oil--;
        this.fix++;
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
        this.charge = 100;
        this.getChargeLevel();
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
       this.fix=0;
        
    }

    playRobot(){
        this.charge -= 20;
        this.oil -= 2;
        this.fix +=2;

    }

    getName(){
        return this.name;
    }

}

module.exports = Robot;










