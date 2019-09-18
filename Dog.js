const Organic = require ("./Organic");
class Dog extends Organic{

    constructor(){
        super();
        this.type = "Dog";
    }

    speak(){
        return "Awoooo!";
    }
    
}

module.exports = Dog;