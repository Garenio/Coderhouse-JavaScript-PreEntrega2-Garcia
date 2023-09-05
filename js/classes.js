class Character{
    constructor(id, charName, race, charClass, playerName, level=1, gold=10){
        this.id = id;
        this.charName = charName;
        this.race = race;
        this.charClass = charClass;
        this.level = level;
        this.gold = gold;
        this.playerName = playerName;
        this.isActive = true;
    }
}