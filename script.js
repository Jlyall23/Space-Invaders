//Start game window prompt
const begin = window.prompt("Do you want to play a game? Type yes or no")
if (begin==="yes"){
    alert("Hit start game to begin")
    }else if(begin==="no"){
        window.close()
    }else{
        window.alert("invalid input, please type yes or no")
    }
// Start button that gives the user background knowledge and directions
const startBtn = document.getElementById("start")
startBtn.addEventListener("click", function(){
    alert("A few weeks ago our space rover detected life on another planet. These aliens were outraged that they had been discovered. They snuck onto our planet and abducted Tishana, Kasper, and Dylan. Your Job as captain of this ship is to destroy the alien army and save our favorite intructors")
    alert("Hit the Attack button to attack. If you are low on HP, hit retreat. WARNING, if you retreat, our instructors will be gone forever. ")
})
//retreat button
const retreatBtn = document.getElementById('retreat')
retreatBtn.addEventListener('click', function() {
      window.alert("You are a coward. You couldn't save our instructors. Now the rest of the world will meet the same fate")
      window.close()
})
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
  constructor() {
    super();
    this.name = "Invader";
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }

 
}
////////////////////////////////////////////////
const alienArmySpawner = [];
for (let i = 0; i < 6; i++) {
  alienArmySpawner.push(new AlienShip());
}
//Spawns 6 Alien Ships

////////////////////////////////////////////////////////////////////////////////////////////////////////

//Hero Attacking Alien Code
// isHeroTurn=true
// if(isHeroTurn==true){for(let j=0; j< alienArmySpawner.length ; j++){



//     if(alienArmySpawner[0].hull <=0){
//          alienArmySpawner.shift()
//          console.log(`${alienArmySpawner[0].name} Was Destroyed!, The Next Ship is Inbound!`)
//      }
//      isHeroTurn=false;
// }
// }
//////////////////////////////////////////////////////////
//Alien Attacking Hero Code

//  if(isHeroturn=false){for(let i=0; i< hero.hull; i++){
//      if (Math.random() < alienArmySpawner[0].accuracy){
//           alienArmySpawner[0].attack(hero)
//           console.log(`You were Hit by ${alienArmySpawner[0].name}!`)
//       }else{
//           console.log("That Loser Missed!")}
//          }
//         if(hero.hull <=0){
//              console.log(`Game Over! You had ${alienArmySpawner.length} alien ships remaining`)
//              isHeroTurn = true
//             }

////LOOP TO MAKE IT TURN BASED
let isHeroTurn = true;

let battle = function () {
  let heroFight = function () {
    if (isHeroTurn == true) {
      for (let j = 0; j < alienArmySpawner.length; j++) {
        if (isHeroTurn == true && Math.random() < hero.accuracy) {
          hero.attackAlien(alienArmySpawner[0]);
          console.log(`You hit ${alienArmySpawner[0].name}!`);
          isHeroTurn = false;
        } else {
          console.log("You Missed");
          isHeroTurn = false;
        }
      }
    }
  }; //herofight closer

  let alienFight = function () {
    if ((isHeroturn = false)) {
      for (let i = 0; i < hero.hull; i++) {
        if (Math.random() < alienArmySpawner[0].accuracy) {
          alienArmySpawner[0].attackHero();
          console.log(`You were Hit by ${alienArmySpawner[0].name}!`);
          isHeroTurn = true;
        } else {
          console.log("The Alien Missed!");
          isHeroTurn = true;
        }
      }
    }
  }; //alienFight function closing bracket
  if (isHeroTurn == true) {
    heroFight();
  } else {
    alienFight();
  }
}; //battle closing bracket

//If You Destroy the army
if (alienArmySpawner.length === 0) {
  console.log("You saved the world! You are a hero! GAME OVER!");
}
//If You Die
if (hero.hull <= 0) {
  console.log(
    `Game Over! You had ${alienArmySpawner.length} alien ships remaining`
  );
}

let i = 0;

//NEW Function attack()
//{loop for while our hull && alien hull still >0
// we attack
//if successful
//update stats
// if alien hull <=0...break loop alienspawner[i++](add another ship)
// else alien attacks (alien not dead yet)
let attackBtn= document.getElementById("attack")
attackBtn.addEventListener("click", function(){
    
let attack = function () {
  while (hero.hull > 0 && alienArmySpawner[i].hull > 0) {

    if (Math.random() < hero.accuracy) {
      alienArmySpawner[i].hull = alienArmySpawner[i].hull - hero.firepower;
      console.log("we hit the alien ship, their ships hull hp is at", alienArmySpawner[i].hull);
      console.log("clicked")
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
attack()
})



