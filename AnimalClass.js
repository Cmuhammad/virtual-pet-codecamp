class AnimalClass{
   
    setOrganic(bool){
        return bool;
       
   }
   hungerLevel(currentHunger){
       // 1 is starving , 2 is hungry, 3 is peckish, 0 is dead
       switch(currentHunger){
           case 1:
               return "starving";
               break;
            case 2:
                return "hungry"
                break;
            case 3:
                return "peckish";
                break;
            default:
                return "dead";
                break;
       }


   }



    
}

module.exports = AnimalClass;