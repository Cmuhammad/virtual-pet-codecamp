const Organic = require ("./Organic");
class Cat extends Organic{

    speak(){
        return "Mooooooow!";
    }
    
}

module.exports = Cat;