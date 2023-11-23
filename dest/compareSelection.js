import { characters } from "./importCharacters.js";
let randomCharacter = characters[Math.floor(Math.random() * characters.length)];
const selector = document.querySelector('select');
const output = document.querySelector('#output');
selector.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    output.innerHTML = '';
    if (selectedOption) {
        let table = document.querySelector("table");
        let tbody = document.querySelector("tbody");
        let selectedChara = characters[finder(selectedOption)];
        let newRow = randomCharacter.comparisonRow(selectedChara);
        tbody.appendChild(newRow);
        if (selectedOption === randomCharacter.name) {
            let newPara = document.createElement("h1");
            newPara.textContent = `You won. The character is ${selectedOption}.`;
            output.appendChild(newPara);
        }
    }
});
//finder
function finder(char) {
    const characterIndex = characters.findIndex(character => character.name.toLowerCase().trim() === char.trim().toLowerCase());
    return characterIndex;
}
