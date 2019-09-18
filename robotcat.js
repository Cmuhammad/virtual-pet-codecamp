const Robot = require ("./Robotic");
class CatR extends Robot{

    constructor(){
        super();
        this.type = "robot cat";
    }

    speak(){
        return "Mooooooow!";
    }
    
}

module.exports = CatR;