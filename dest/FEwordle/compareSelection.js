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
        if (!table || !tbody) {
            table = document.createElement("table");
            output.appendChild(table);
            tbody = document.createElement("tbody");
            table.appendChild(tbody);
            let title_row = document.createElement("tr");
            let imageRow = document.createElement("th");
            imageRow.textContent = "image";
            title_row.appendChild(imageRow);
            let nameRow = document.createElement("th");
            nameRow.textContent = "name";
            title_row.appendChild(nameRow);
            let gameRow = document.createElement("th");
            gameRow.textContent = "game";
            title_row.appendChild(gameRow);
            let genderRow = document.createElement("th");
            genderRow.textContent = "gender";
            title_row.appendChild(genderRow);
            let promotionRow = document.createElement("th");
            promotionRow.textContent = "promotion";
            title_row.appendChild(promotionRow);
            let weaponsRow = document.createElement("th");
            weaponsRow.textContent = "weapons";
            title_row.appendChild(weaponsRow);
            let mountsRow = document.createElement("th");
            mountsRow.textContent = "character type";
            title_row.appendChild(mountsRow);
            tbody.appendChild(title_row);
        }
        let index = finder(selectedOption);
        let commonality = randomCharacter.compare(characters[index]);
        let newRow = commonality.display();
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
