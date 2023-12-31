export enum Game {
  FE1 = "Fire Emblem: Shadow Dragon and the Blade of Light",
  FE2 = "Fire Emblem: Gaiden",
  FE3 = "Fire Emblem: Mystery of the Emblem",
  FE4 = "Fire Emblem: Genealogy of the Holy War",
  FE5 = "Fire Emblem: Thracia 776",
  FE6 = "Fire Emblem: The Binding Blade",
  FE7 = "Fire Emblem: The Blazing Blade",
  FE8 = "Fire Emblem: The Sacred Stones",
  FE9 = "Fire Emblem: Path of Radiance",
  FE10 = "Fire Emblem: Radiant Dawn",
  FE11 = "Fire Emblem: Shadow Dragon",
  FE12 = "Fire Emblem: New Mystery of the Emblem",
  FE13 = "Fire Emblem Awakening",
  FE14 = "Fire Emblem Fates",
  FE15 = "Fire Emblem Echoes: Shadows of Valentia",
  FE16 = "Fire Emblem: Three Houses",
  FE17 = "Fire Emblem Engage",
  UNDEFINED = ""
}

// class
export class Character {
  name: string;
  game: Game;
  gender: string;
  promotion: string;
  weapons: string[];
  mounts: string[];
  image: string;

  constructor(name: string, game: Game, gender: string, promotion: string, weapons: string[], mounts: string[], image: string) {
    this.name = name;
    this.game = game;
    this.gender = gender;
    this.promotion = promotion;
    this.weapons = weapons;
    this.mounts = mounts;
    this.image = image;
  }

  comparisonRow(selectedCharacter: Character): HTMLTableRowElement {
    let row = document.createElement("tr")
    const imageCell = document.createElement('td');
    const imageElement = document.createElement('img');
    imageElement.height = 100
    imageElement.src = selectedCharacter.image;
    imageCell.appendChild(imageElement);
    row.appendChild(imageCell);

    //compare name
    let commonName = this.name == selectedCharacter.name;
    let nameCell = document.createElement("td");
    nameCell.textContent = selectedCharacter.name;
    if (commonName) {
      nameCell.bgColor = "C8FF69"
    } else {
      nameCell.bgColor = "FFA269"
    }
    row.appendChild(nameCell);

    //common game 
    let commonGame = this.game == selectedCharacter.game;
    let gameCell = document.createElement("td");
    gameCell.textContent = selectedCharacter.game;
    if (commonGame) {
      gameCell.bgColor = "C8FF69"
    } else {
      gameCell.bgColor = "FFA269"
    }
    row.appendChild(gameCell);

    //common gender
    let commonGender = this.gender == selectedCharacter.gender;
    let genderCell = document.createElement("td");
    genderCell.textContent = selectedCharacter.gender;
    if (commonGender) {
      genderCell.bgColor = "C8FF69"
    } else {
      genderCell.bgColor = "FFA269"
    }
    row.appendChild(genderCell);

    //common promotion
    let commonPromo = this.promotion == selectedCharacter.promotion;
    let promoCell = document.createElement("td");
    promoCell.textContent = selectedCharacter.promotion;
    if (commonPromo) {
      promoCell.bgColor = "C8FF69"
    } else {
      promoCell.bgColor = "FFA269"
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
    weaponCell.textContent = selectedCharacter.weapons.join(", ")
    if (commonWeapons == 0) {
      weaponCell.bgColor = "FFA269";
    } else if (this.weapons.length == selectedCharacter.weapons.length && selectedCharacter.weapons.length == commonWeapons) {
      weaponCell.bgColor = "C8FF69";
    } else {
      weaponCell.bgColor = "FFEB69"
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
    mountsCell.textContent = selectedCharacter.mounts.join(", ")
    if (commonMounts == 0) {
      mountsCell.bgColor = "FFA269";
    } else if (this.mounts.length == selectedCharacter.mounts.length && selectedCharacter.mounts.length == commonMounts) {
      mountsCell.bgColor = "C8FF69";
    } else {
      mountsCell.bgColor = "FFEB69"
    }
    row.appendChild(mountsCell);

    return row;
  }
}