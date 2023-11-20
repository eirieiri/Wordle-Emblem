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

//finer
let targetCharacterName = "Madeline";
//finder function
let targetCharacterIndex = characters.findIndex(
  character => character.name.toLowerCase().trim() === targetCharacterName.trim().toLowerCase()
);
*/