console.log("*** Hello World from FEwordle/hintBox.tsx ***");

import {Character} from "./attribute.js";
import {characters} from "./importCharacters.js"

function characterSelector(domNode : Element) {
    let selector = domNode.querySelector("select");

    characters.forEach(char => {
        let option = document.createElement("option");
        option.textContent = char.name;
        option.value = char.name;
        selector.appendChild(option)
        let img = document.createElement("img")
        img.setAttribute("src", char.image);
    })
}

characterSelector(document.body);