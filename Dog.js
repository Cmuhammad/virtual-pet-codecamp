const Organic = require ("./Organic");
class Dog extends Organic{

    speak(){
        return "Awoooo!";
    }
    
}

module.exports = Dog;