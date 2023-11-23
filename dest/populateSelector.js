import { characters } from "./importCharacters.js";
function characterSelector(domNode) {
    let selector = domNode.querySelector("select");
    characters.forEach(char => {
        let option = document.createElement("option");
        option.textContent = char.name;
        option.value = char.name;
        selector.appendChild(option);
    });
}
characterSelector(document.body);
