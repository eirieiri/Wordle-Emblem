//define class
class character {
    constructor(name, game, gender, promotion, weapon = [], mount = [], image) {
        this.name = name
        this.game = game;
        this.gender = gender;
        this.promotion = promotion;
        this.weapons = weapon;
        this.mounts = mounts;
        this.image = image;
    }

    comparison (otherCharacter) {
        let nameComp = (this.name == otherCharacter.name);
        let gameComp = (this.game == otherCharacter.game);
        let years = this.game.getReleaseYear() - otherCharacter.game.getReleaseYear();
        let promoComp = this.promotion == otherCharacter.promotion;
        let sameWeapons = [];
        //add same weapon to a list 
        this.weapons.forEach(weaponChar => {
            otherCharacter.weapons.forEach(weaponOther =>  {
                if (weaponChar == weaponOther) {
                    sameWeapons.push(weaponChar);
                }
            })
        });

        let sameMounts = [];
        //add same mounts to a list
        this.mounts.forEach(mountChar => {
            otherCharacter.mounts.forEach(mountOther =>  {
                if (mountChar == mountOther) {
                    sameMounts.push(mountChar);
                }
            })
        });

        return {
            name : nameComp,
            gameComp : gameComp,
            yearsAppart : years,
            promotion : promoComp,
            weapons : sameWeapons,
            mounts : sameMounts
        }
    }
}

//list of characters 
