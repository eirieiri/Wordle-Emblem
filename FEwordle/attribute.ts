import * as fs from 'fs';
import * as path from 'path';

enum Game {
  FE1 = "Fire Emblem: Shadow Dragon and the Blade of Light",
  FE2 = "Fire Emblem: Gaiden",
  FE3 = "Fire Emblem: Mystery of the Emblem",
  FE4 = "Fire Emblem: Genealogy of the Holy War",
  FE5 = "Fire Emblem: Thracia 776",
  FE6 = "Fire Emblem: The Binding Blade",
  FE7 = "Fire Emblem: The Blazing Blade",
  FE8 = "Fire Emblem: The Sacred Stones",
  FE9 = "Fire Emblem: Path of Radiance",
  FE10 = "Fire Emblem: Radiant Dawn",
  FE11 = "Fire Emblem: Shadow Dragon",
  FE12 = "Fire Emblem: New Mystery of the Emblem",
  FE13 = "Fire Emblem Awakening",
  FE14 = "Fire Emblem Fates",
  FE15 = "Fire Emblem Echoes: Shadows of Valentia",
  FE16 = "Fire Emblem: Three Houses",
  FE17 = "Fire Emblem Engage",
  UNDEFINED = ""
}

// class
class Character {
  name: string;
  game: Game;
  gender: string;
  promotion: string;
  weapons: string[];
  mounts: string[];
  image: string;

  constructor(name: string, game: Game, gender: string, promotion: string, weapons: string[], mounts: string[], image: string) {
    this.name = name;
    this.game = game;
    this.gender = gender;
    this.promotion = promotion;
    this.weapons = weapons;
    this.mounts = mounts;
    this.image = image;
  }
  
  compare (other: Character) {
    var commonName = "";
    if (this.name == other.name) {
      commonName = this.name;
    }
    var commonGame = Game.UNDEFINED;
    if (this.game == other.game) {
      commonGame = this.game
    }
    var commonGender = "";
    if (this.gender == other.gender) {
      commonGender = this.gender
    }
    var commonPromo = "";
    if (this.promotion == other.promotion) {
      commonPromo = this.promotion
    }
    var commonWeapons : string[] = [];
    for (let i = 0; i < this.weapons.length; i++) {
      for (let j = 0; j < other.weapons.length; j++) {
        if (this.weapons[i] == other.weapons[j]) {
          commonWeapons.push(this.weapons[i])
        }
      }
    }
    var commonMounts : String[] = []
    for (let i = 0; i < this.mounts.length; i++) {
      for (let j = 0; j < other.mounts.length; j++) {
        if (this.mounts[i] == other.mounts[j]) {
          commonMounts.push(this.mounts[i])
        }
      }
    }
    return new Character(commonName, commonGame, commonGender, commonPromo, commonWeapons, commonWeapons, "");
  }
}



//pathing
const charactersFilePath = path.join(__dirname, '../characters/engage.json');

//read json file
const charactersJSON = fs.readFileSync(charactersFilePath, 'utf-8');
const characters: Character[] = JSON.parse(charactersJSON);

/*
//display everything 
characters.forEach((character) => {
  console.log(`Name: ${character.name}`);
  console.log(`Game: ${character.game}`);
  console.log(`Gender: ${character.gender}`);
  console.log(`Promotion: ${character.promotion}`);
  console.log(`Weapons: ${character.weapons.join(', ')}`);
  console.log(`Mounts: ${character.mounts.join(', ')}`);
  console.log(`Image: ${character.image}`);
  console.log('----------------------');
});

//finder
let find = "Madeline";
//finder function
let index = characters.findIndex(
  char => char.name.toLowerCase().trim() === find.trim().toLowerCase()
);
console.log("Character found at: " + index + " out of " + characters.length)

console.log(characters[index])
*/