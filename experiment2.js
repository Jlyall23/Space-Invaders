///PSA
//This code does not run anywhere! It was used for me to experiment before i put it in my actual js



//Class Ship
class Ship {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
  
  }
  
  //////////////////////////////////////////////////////////////////////
  //Sub class for hero
  class HeroShip extends Ship {
    constructor() {
      super();
      this.name = "USS Assembly";
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = 0.7;
    }
  
    }
  
  
  //}
  //////////////////////////////////////////////////////////
  const hero = new HeroShip();
  //////////////////////////////////////////////////////////////
  // subclass for alien ships
  class AlienShip extends Ship {
    constructor(name,hull,firepower,accuracy) {
      super(name,hull,firepower,accuracy);
      this.name = "name";
     // this.hull = Math.floor(Math.random() * 4) + 3;
     // this.firepower = Math.floor(Math.random() * 3) + 2;
     // this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
     this.hull = this.hull
     this.firepower = firepower
     this.accuracy = this.accuracy
    }
  
   
  }
  ////////////////////////////////////////////////
const alienArmySpawner = [];
for (let i = 0; i < 6; i++) {
alienArmySpawner.push(new AlienShip());
}

let i = 0;

//NEW Function attack()
//{loop for while our hull && alien hull still >0
// we attack
//if successful
//update stats
// if alien hull <=0...break loop alienspawner[i++](add another ship)
// else alien attacks (alien not dead yet)

    
let attack = function () {
  while (hero.hull > 0 && alienArmySpawner[i].hull > 0) {

    if(i=7){
        console.log("You saved our instructors and the world, GAME OVER!!")
        //window.close()
    }
    if(hero.hull <=0){
        console.log("You failed our instructors and the entire world. GAME OVER")
        //window.close()
    }

    if (Math.random() < hero.accuracy) {
      alienArmySpawner[i].hull = alienArmySpawner[i].hull - hero.firepower;
      console.log("we hit the alien ship, their ships hull hp is at", alienArmySpawner[i].hull);
      
      if (alienArmySpawner[i].hull > 0) {
        console.log("The alien is still alive");
        
        if (Math.random() < alienArmySpawner[i].accuracy) {
            hero.hull = hero.hull - alienArmySpawner[i].firepower
            console.log("they hit our ship, our hull hp is at" , hero.hull)
        }else{
            console.log("The alien missed us")
        }
       
      } else {
        console.log(`${alienArmySpawner[i].name} Was Destroyed!, The Next Ship is Inbound!`)
        i++
        //if i=6 game over
        break;
      }
    } else {
      console.log("we missed the alien ship");
      
      if (Math.random() < alienArmySpawner[i].accuracy) {
        hero.hull = hero.hull - alienArmySpawner[i].firepower
        console.log("they hit us, our hull hp is at" , hero.hull)
    }else{
        console.log("Alien missed us")
    }
    }
  }
}



