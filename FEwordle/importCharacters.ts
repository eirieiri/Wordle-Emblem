import { Character, Game } from "./character.js";
import * as fs from 'fs';

const data = fs.readFileSync('./characters/engage.json', 'utf8');
const engageCharacters = JSON.parse(data);


//import engageCharacters from "../characters/engage.json" assert {type: 'json'};

export let characters : Character[] = []

for (let i = 0; i < engageCharacters.length; i++) {
    let element = engageCharacters[i]
    let game = Game[element.game]
    characters.push(new Character(
        element.name,
        game,
        element.gender,
        element.promotion,
        element.weapons,
        element.mounts,
        element.image))
}

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
