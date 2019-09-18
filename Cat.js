const Organic = require ("./Organic");
class Cat extends Organic{

    constructor(){
        super();
        this.type = "Cat";
    }

    speak(){
        return "Mooooooow!";
    }
    
}

module.exports = Cat;