"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("*** Hello World from FEwordle/hintBox.tsx ***");
var importCharacters_1 = require("./importCharacters");
function characterSelector(domNode) {
    var selector = domNode.querySelector("select");
    if (!selector) {
        selector = document.createElement("select");
        selector.name = "character";
        selector.id = "character";
        domNode.appendChild(selector);
    }
    var index = 0;
    importCharacters_1.characters.forEach(function (char) {
        console.log(index++);
        var opt = document.createElement("option");
        opt.textContent = char.name;
        opt.value = char.name;
        selector.appendChild(opt);
        console.log(opt.textContent);
    });
    var title = document.createElement("h2");
    title.textContent = "Hi";
    var container = document.createElement("div");
    container.appendChild(selector);
    container.appendChild(title);
    domNode.appendChild(container);
}
characterSelector(document.body);
