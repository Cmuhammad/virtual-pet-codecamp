const Robotic = require ("./Robotic");
class DogR extends Robotic{

    constructor(){
        super();
        this.type = "robot dog";
    }

    speak(){
        return "Mooooooow!";
    }
    
}

module.exports = DogR;