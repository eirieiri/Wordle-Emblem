"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
var engage_json_1 = require("../characters/engage.json");
var attribute_1 = require("./attribute");
exports.characters = [];
for (var i = 0; i < engage_json_1.default.length; i++) {
    var element = engage_json_1.default[i];
    var game = attribute_1.Game[element.game];
    exports.characters.push(new attribute_1.Character(element.name, game, element.gender, element.promotion, element.weapons, element.mounts, element.image));
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
