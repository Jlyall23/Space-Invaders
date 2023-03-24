
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
//   const alienArmySpawner = [];
//   for (let i = 0; i < 6; i++) {
//     alienArmySpawner.push(new AlienShip());
//  
const alienArmySpawner= [
    ["yo", 70, 20, .8,],
    ["1", Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 3) + 2, (Math.floor(Math.random() * 3) + 6) / 10],
    ["2", Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 3) + 2, (Math.floor(Math.random() * 3) + 6) / 10],
    ["name", Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 3) + 2, (Math.floor(Math.random() * 3) + 6) / 10],
    ["name", Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 3) + 2, (Math.floor(Math.random() * 3) + 6) / 10],
    ["name", Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 3) + 2, (Math.floor(Math.random() * 3) + 6) / 10],
]
  //Spawns 6 Alien Ships

let attack = function () {
  while (hero.hull > 0 && alienArmySpawner[0].hull > 0) {
    if (Math.random() < hero.accuracy) {
      alienArmySpawner[0].hull = alienArmySpawner[0].hull - hero.firepower;
      console.log("we hit the alien ship, their ships hull hp is at", alienArmySpawner[0].hull);

      if (alienArmySpawner[0].hull > 0) {
        console.log("The alien is still alive");

        if (Math.random() < alienArmySpawner[0].accuracy) {
            hero.hull = hero.hull - alienArmySpawner[0].firepower
            console.log("they hit our ship, our hull hp is at" , hero.hull)
        }else{
            console.log("The alien missed us")
        }
      } else {
        console.log(`${alienArmySpawner[0].name} Was Destroyed!, The Next Ship is Inbound!`)
        alienArmySpawner.push()
        console.log(alienArmySpawner)
        //if i=6 game over
        break;
      }
    } else {
      console.log("we missed the alien ship");
      
      if (Math.random() < alienArmySpawner[0].accuracy) {
        hero.hull = hero.hull - alienArmySpawner[0].firepower
        console.log("they hit us, our hull hp is at" , hero.hull)
    }else{
        console.log("Alien missed us")
    }
    }
  }
}
console.log(alienArmySpawner[0].hull)
attack()