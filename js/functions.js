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
        default:
            break;
    }
}