import { characters } from "./importCharacters.js";
import { Character } from "./attribute.js";

let randomCharacter = characters[Math.floor(Math.random() * characters.length)];

const selector = document.querySelector('select') as HTMLSelectElement;
const output = document.querySelector('#output') as HTMLDivElement;


selector.addEventListener('change', (event: Event) => {
  const selectedOption = (event.target as HTMLSelectElement).value;

  output.innerHTML = '';

  if (selectedOption) {
    let table = document.querySelector("table");
    let tbody = document.querySelector("tbody") 

    let index = finder(selectedOption)
    let commonality = randomCharacter.compare(characters[index]);

    let newRow = commonality.display()
    tbody.appendChild(newRow);

    if(selectedOption === randomCharacter.name) {
      let newPara = document.createElement("h1")
      newPara.textContent = `You won. The character is ${selectedOption}.`
      output.appendChild(newPara)
    }
  }
});



//finder
function finder(char: string): number {
  const characterIndex: number = characters.findIndex(
    character => character.name.toLowerCase().trim() === char.trim().toLowerCase()
  );

  return characterIndex;
}