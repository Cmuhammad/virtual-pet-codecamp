const Robotic = require ("./Robotic");
class DogR extends Robotic{

    constructor(name){
        super();
        this.type = "robot dog";
        this.name = name;
    }

    speak(){
        return "Mooooooow!";
    }
    
}

module.exports = DogR;