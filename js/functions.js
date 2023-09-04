function contentMaker(searchTitle, list) {

    let searchContent = searchTitle;

    list.forEach((el) => searchContent += `
    ${el.charName} (id: ${el.id})
    \nNivel actual: ${el.level} | Oro: ${el.gold} | Raza: ${el.race} | Clase: ${el.charClass} 
    \nJugador: ${el.playerName}
    \n⤜ - - - - - - - - - - - - - - - - - -  - - - - - - - ✠ - - - - - - - - - - - - - - - - - -  - - - - - - - ⤛
    `);

    return searchContent;
}

function characterList() {

    let searchContent = contentMaker("LISTADO DE PERSONAJES \n\n", characters);

    if (document.getElementById("div-content")) {
        document.getElementById("div-content").innerHTML = "";
        setTimeout(() => {
            document.getElementById("div-content").innerText = searchContent
        }, 100);
    } else {
        let divContent = document.createElement("div");
        divContent.id = "div-content";
        divContent.innerText = searchContent;
        document.body.append(divContent);
    }
};

function activeCharacterList() {

    let activeCharacters = characters.filter((el) => el.isActive);

    let searchContent = contentMaker("PERSONAJES ACTIVOS \n\n", activeCharacters);

    if (document.getElementById("div-content")) {
        document.getElementById("div-content").innerHTML = "";
        setTimeout(() => {
            document.getElementById("div-content").innerText = searchContent
        }, 100);
    } else {
        let divContent = document.createElement("div");
        divContent.id = "div-content";
        divContent.innerText = searchContent;
        document.body.append(divContent);
    }
};

function inactiveCharacterList() {

    let inactiveCharacters = characters.filter((el) => el.isActive == false);

    let searchContent = contentMaker("PERSONAJES INACTIVOS \n\n", inactiveCharacters);

    if (document.getElementById("div-content")) {
        document.getElementById("div-content").innerHTML = "";
        setTimeout(() => {
            document.getElementById("div-content").innerText = searchContent
        }, 100);
    } else {
        let divContent = document.createElement("div");
        divContent.id = "div-content";
        divContent.innerText = searchContent;
        document.body.append(divContent);
    }
};

function advancedSearch() {

    let parameter;

    parameter = parseInt(prompt("Selecciona un parámetro de búsqueda:\n\n1. Buscar por nombre de Jugador.\n2. Buscar por Raza.\n3. Buscar por Clase.\n4. Cancelar"));

    switch (parameter) {
        case 1:
            searchByPlayerName();
            break;
        case 2:
            searchByRace();
            break;
        case 3:
            searchByClass();
            break;
        case 4:
            break;
        default:
            alert("Ingresa una opción válida.")
            return advancedSearch()
    }
}

function searchByPlayerName() {

    let entryPlayerName;

    entryPlayerName = prompt("Ingrese un nombre de jugador:")

    if (characters.some(el => el.playerName === entryPlayerName)) {

        let charByPlayer = characters.filter((el) => el.playerName === entryPlayerName);
        let searchContent = contentMaker(`PERSONAJES DE ${entryPlayerName}\n\n`, charByPlayer);

        if (document.getElementById("div-content")) {
            document.getElementById("div-content").innerHTML = "";
            setTimeout(() => {
                document.getElementById("div-content").innerText = searchContent
            }, 100);
        } else {
            let divContent = document.createElement("div");
            divContent.id = "div-content";
            divContent.innerText = searchContent;
            document.body.append(divContent);
        }
    }else{
        alert(`No existen personajes del jugador ${entryPlayerName}.`);
        return advancedSearch();
    }

};

function searchByRace() {

    let entryRace;

    entryRace = prompt("Ingrese una Raza:")

    if (characters.some(el => el.race === entryRace)) {

        let charByRace = characters.filter((el) => el.race === entryRace);
        let searchContent = contentMaker(`PERSONAJES DE RAZA ${entryRace}\n\n`, charByRace);

        if (document.getElementById("div-content")) {
            document.getElementById("div-content").innerHTML = "";
            setTimeout(() => {
                document.getElementById("div-content").innerText = searchContent
            }, 100);
        } else {
            let divContent = document.createElement("div");
            divContent.id = "div-content";
            divContent.innerText = searchContent;
            document.body.append(divContent);
        }
    }else{
        alert(`No existen personajes de raza ${entryRace}.`);
        return advancedSearch();
    }

};

function searchByClass() {

    let entryClass;

    entryClass = prompt("Ingrese una Clase:")

    if (characters.some(el => el.charClass === entryClass)) {

        let charByClass = characters.filter((el) => el.charClass === entryClass);
        let searchContent = contentMaker(`PERSONAJES DE CLASE ${entryClass}\n\n`, charByClass);

        if (document.getElementById("div-content")) {
            document.getElementById("div-content").innerHTML = "";
            setTimeout(() => {
                document.getElementById("div-content").innerText = searchContent
            }, 100);
        } else {
            let divContent = document.createElement("div");
            divContent.id = "div-content";
            divContent.innerText = searchContent;
            document.body.append(divContent);
        }
    }else{
        alert(`No existen personajes de la clase ${entryClass}.`);
        return advancedSearch();
    }

};

function giveGold() {

    let goldChoise;

    goldChoise = parseInt(prompt("Selecciona una opción:\n\n1. Dar oro a un jugador.\n2. Dar oro a todos los jugadores.\n3. Cancelar"));

    switch (goldChoise) {
        case 1:
            giveGoldToPlayer();
            break;
        case 2:
            giveGoldToAll();
            break;
        case 3:
            break;
        default:
            alert("Ingresa una opción válida.")
            return giveGold()
    }
}

function giveGoldToPlayer(){

    charNameToGiveGold = prompt("Ingrese el nombre del personaje:");

    if (characters.some(el => el.charName === charNameToGiveGold)) {

        goldQty = parseInt(prompt("Ingrese la cantidad de oro:"));
        charIndex = characters.findIndex(obj => obj.charName === charNameToGiveGold);
        characters[charIndex].gold += goldQty;

        alert(`Has agregado ${goldQty} gold al personaje ${charNameToGiveGold}.`)

    }else {
        alert("No existe un personaje con ese nombre.");
        return giveGold();
    }
}

function giveGoldToAll(){

    goldQty = parseInt(prompt("Ingrese la cantidad de oro:"));

    for (const character of characters) {
        character.gold += goldQty;
    }

    alert(`Se han agregado ${goldQty} gold a todos los personajes.`)

}

function giveLevel(){

    charNameToGiveLevel = prompt("Ingrese el nombre del personaje:");

    if (characters.some(el => el.charName === charNameToGiveLevel)) {

        levelQty = parseInt(prompt("Ingrese la cantidad de niveles:"));
        charIndex = characters.findIndex(obj => obj.charName === charNameToGiveLevel);
        characters[charIndex].level += levelQty;

        alert(`Has agregado ${levelQty} niveles al personaje ${charNameToGiveLevel}.`)

    }else {
        alert("No existe un personaje con ese nombre.");
    }
}

function choise(btnValue) {
    switch (btnValue) {
        case 1:
            return characterList();
        case 2:
            return activeCharacterList();     
        case 3:
            return inactiveCharacterList();     
        case 4:
            return advancedSearch();     
        case 5:
            return giveGold();     
        case 6:
            return giveLevel();     
        default:
            break;
    }
}