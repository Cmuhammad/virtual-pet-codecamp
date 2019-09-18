const Organic = require ("./Organic");
class Dog extends Organic{

    constructor(name){
        super();
        this.type = "Dog";
        this.name = name;
    }

    speak(){
        return "Awoooo!";
    }
    
}

module.exports = Dog;

