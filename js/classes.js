class Character{
    constructor(id, charName, charClass, race, level=1, gold, playerName){
        this.id = id;
        this.charName = charName;
        this.charClass = charClass;
        this.race = race;
        this.level = level;
        this.gold = gold;
        this.playerName = playerName;
        this.isActive = true;
    }
}