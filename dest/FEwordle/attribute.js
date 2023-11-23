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
    compare(other) {
        var commonName = "";
        if (this.name == other.name) {
            commonName = this.name;
        }
        var commonGame = Game.UNDEFINED;
        if (this.game == other.game) {
            commonGame = this.game;
        }
        var commonGender = "";
        if (this.gender == other.gender) {
            commonGender = this.gender;
        }
        var commonPromo = "";
        if (this.promotion == other.promotion) {
            commonPromo = this.promotion;
        }
        var commonWeapons = [];
        for (let i = 0; i < this.weapons.length; i++) {
            for (let j = 0; j < other.weapons.length; j++) {
                if (this.weapons[i] == other.weapons[j]) {
                    commonWeapons.push(this.weapons[i]);
                }
            }
        }
        var commonMounts = [];
        for (let i = 0; i < this.mounts.length; i++) {
            for (let j = 0; j < other.mounts.length; j++) {
                if (this.mounts[i] == other.mounts[j]) {
                    commonMounts.push(this.mounts[i]);
                }
            }
        }
        return new Character(commonName, commonGame, commonGender, commonPromo, commonWeapons, commonWeapons, "");
    }
    display() {
        let row = document.createElement("tr");
        //image
        const imageCell = document.createElement('td');
        const imageElement = document.createElement('img');
        imageElement.src = this.image;
        imageCell.appendChild(imageElement);
        row.appendChild(imageCell);
        //name
        const nameCell = document.createElement('td');
        nameCell.textContent = this.name;
        row.appendChild(nameCell);
        //game
        const gameCell = document.createElement('td');
        gameCell.textContent = this.game;
        row.appendChild(gameCell);
        //gender
        const genderCell = document.createElement('td');
        genderCell.textContent = this.gender.toLowerCase();
        row.appendChild(genderCell);
        //promotion
        const promotionCell = document.createElement('td');
        promotionCell.textContent = this.promotion.toLowerCase();
        row.appendChild(promotionCell);
        //weapons
        const weaponsCell = document.createElement('td');
        weaponsCell.textContent = this.weapons.map(weapon => weapon.toLowerCase()).join(', ');
        row.appendChild(weaponsCell);
        //mounts
        const mountsCell = document.createElement('td');
        mountsCell.textContent = this.mounts.map(mount => mount.toLowerCase()).join(', ');
        row.appendChild(mountsCell);
        return row;
    }
}
