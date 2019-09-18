const Organic = require ("./Organic");
class Cat extends Organic{

    constructor(name){
        super();
        this.type = "Cat";
        this.name = name;
    }

    speak(){
        return "Mooooooow!";
    }
    
}

module.exports = Cat;