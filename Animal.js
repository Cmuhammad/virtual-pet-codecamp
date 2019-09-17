
class Animal{
    constructor(name){
        this.name = name;
        this.animalId;
        this.isDead = false;
    }
   tick(){

   }
    setName(newName){ this.name = newName; }
        
    getId(){ return animalId; }
    
    getName(){ return this.name; }

/*    animalDied(){
        if (this.isDead === true){
            // remove pet object attributes
            console.log("This animal died! (animalDied() in Animal class)");
        }
    }
*/
}
module.exports = Animal;