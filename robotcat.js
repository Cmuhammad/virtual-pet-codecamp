const Robot = require ("./Robotic");
class CatR extends Robot{

    constructor(name){
        super();
        this.type = "robot cat";
        this.name = name;
    }

    speak(){
        return "Mooooooow!";
    }
    
}

module.exports = CatR;