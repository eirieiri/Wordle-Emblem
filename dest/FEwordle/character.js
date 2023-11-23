console.log("*** Hello World from FEwordle/attribute.ts ***");
export var Game;
(function (Game) {
    Game["FE1"] = "Fire Emblem: Shadow Dragon and the Blade of Light";
    Game["FE2"] = "Fire Emblem: Gaiden";
    Game["FE3"] = "Fire Emblem: Mystery of the Emblem";
    Game["FE4"] = "Fire Emblem: Genealogy of the Holy War";
    Game["FE5"] = "Fire Emblem: Thracia 776";
    Game["FE6"] = "Fire Emblem: The Binding Blade";
    Game["FE7"] = "Fire Emblem: The Blazing Blade";
    Game["FE8"] = "Fire Emblem: The Sacred Stones";
    Game["FE9"] = "Fire Emblem: Path of Radiance";
    Game["FE10"] = "Fire Emblem: Radiant Dawn";
    Game["FE11"] = "Fire Emblem: Shadow Dragon";
    Game["FE12"] = "Fire Emblem: New Mystery of the Emblem";
    Game["FE13"] = "Fire Emblem Awakening";
    Game["FE14"] = "Fire Emblem Fates";
    Game["FE15"] = "Fire Emblem Echoes: Shadows of Valentia";
    Game["FE16"] = "Fire Emblem: Three Houses";
    Game["FE17"] = "Fire Emblem Engage";
    Game["UNDEFINED"] = "";
})(Game || (Game = {}));
// class
export class Character {
    constructor(name, game, gender, promotion, weapons, mounts, image) {
        this.name = name;
        this.game = game;
        this.gender = gender;
        this.promotion = promotion;
        this.weapons = weapons;
        this.mounts = mounts;
        this.image = image;
    }
    comparisonRow(selectedCharacter) {
        let row = document.createElement("tr");
        const imageCell = document.createElement('td');
        const imageElement = document.createElement('img');
        imageElement.height = 100;
        imageElement.src = selectedCharacter.image;
        imageCell.appendChild(imageElement);
        row.appendChild(imageCell);
        //compare name
        let commonName = this.name == selectedCharacter.name;
        let nameCell = document.createElement("td");
        nameCell.textContent = selectedCharacter.name;
        if (commonName) {
            nameCell.bgColor = "green";
        }
        else {
            nameCell.bgColor = "red";
        }
        row.appendChild(nameCell);
        //common game 
        let commonGame = this.game == selectedCharacter.game;
        let gameCell = document.createElement("td");
        gameCell.textContent = selectedCharacter.game;
        if (commonGame) {
            gameCell.bgColor = "green";
        }
        else {
            gameCell.bgColor = "red";
        }
        row.appendChild(gameCell);
        //common gender
        let commonGender = this.gender == selectedCharacter.gender;
        let genderCell = document.createElement("td");
        genderCell.textContent = selectedCharacter.gender;
        if (commonGender) {
            genderCell.bgColor = "green";
        }
        else {
            genderCell.bgColor = "red";
        }
        row.appendChild(genderCell);
        //common promotion
        let commonPromo = this.promotion == selectedCharacter.promotion;
        let promoCell = document.createElement("td");
        promoCell.textContent = selectedCharacter.promotion;
        if (commonPromo) {
            promoCell.bgColor = "green";
        }
        else {
            promoCell.bgColor = "red";
        }
        row.appendChild(promoCell);
        //common weapon
        let commonWeapons = 0;
        for (let i = 0; i < this.weapons.length; i++) {
            for (let j = 0; j < selectedCharacter.weapons.length; j++) {
                if (this.weapons[i] == selectedCharacter.weapons[j]) {
                    commonWeapons++;
                }
            }
        }
        let weaponCell = document.createElement("td");
        weaponCell.textContent = selectedCharacter.weapons.join(", ");
        if (commonWeapons == 0) {
            weaponCell.bgColor = "red";
        }
        else if (commonWeapons == this.weapons.length) {
            weaponCell.bgColor = "green";
        }
        else {
            weaponCell.bgColor = "yellow";
        }
        row.appendChild(weaponCell);
        //common mounts 
        let commonMounts = 0;
        for (let i = 0; i < this.mounts.length; i++) {
            for (let j = 0; j < selectedCharacter.mounts.length; j++) {
                if (this.mounts[i] == selectedCharacter.mounts[j]) {
                    commonMounts++;
                }
            }
        }
        let mountsCell = document.createElement("td");
        mountsCell.textContent = selectedCharacter.mounts.join(", ");
        if (commonMounts == 0) {
            mountsCell.bgColor = "red";
        }
        else if (commonMounts == this.mounts.length) {
            mountsCell.bgColor = "green";
        }
        else {
            mountsCell.bgColor = "yellow";
        }
        row.appendChild(mountsCell);
        return row;
    }
}
