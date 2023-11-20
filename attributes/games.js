//all games
const Game = {
    FE1 : "Fire Emblem: Shadow Dragon and the Blade of Light",
    FE2 : "Fire Emblem: Gaiden",
    FE3 : "Fire Emblem: Mystery of the Emblem",
    FE4 : "Fire Emblem: Genealogy of the Holy War",
    FE5 : "Fire Emblem: Thracia 776",
    FE6 : "Fire Emblem: The Binding Blade",
    FE7 : "Fire Emblem: The Blazing Blade",
    FE8 : "Fire Emblem: The Sacred Stones",
    FE9 : "Fire Emblem: Path of Radiance",
    FE10 : "Fire Emblem: Radiant Dawn",
    FE11 : "Fire Emblem: Shadow Dragon",
    FE12 : "Fire Emblem: New Mystery of the Emblem",
    FE13 : "Fire Emblem Awakening",
    FE14 : "Fire Emblem Fates",
    FE15 : "Fire Emblem Echoes: Shadows of Valentia",
    FE16 : "Fire Emblem: Three Houses",
    FE17 : "Fire Emblem Engage",


    //returns release year of the game
    getReleaseYear : function(Game) {
        switch(Game) {
            case this.FE1: return 1990;
            case this.FE2: return 1992;
            case this.FE3: return 1994;
            case this.FE4: return 1996;
            case this.FE5: return 1999;
            case this.FE6: return 2002;
            case this.FE7: return 2003;
            case this.FE8: return 2004;
            case this.FE9: return 2005;
            case this.FE10: return 2007;
            case this.FE11: return 2008;
            case this.FE12: return 2010;
            case this.FE13: return 2012;
            case this.FE14: return 2015;
            case this.FE15: return 2017;
            case this.FE16: return 2019;
            case this.FE17: return 2023;
        }
    }
}

