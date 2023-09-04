function contentMaker(searchTitle, list) {
    let searchContent = searchTitle;
    list.forEach((el) => searchContent += `
    ${el.charName} (id: ${el.id})
    \nNivel actual: ${el.level} | Oro: ${el.gold} | Raza: ${el.race} | Clase: ${el.charClass} 
    \nJugador: ${el.playerName}
    \n_______________________________________________________________
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
        divContent.innerText = searchContent
        document.body.append(divContent);
    }
};

function activeCharacterList() {

    let activeCharacters = characters.filter((el) => el.isActive);

    let searchContent = contentMaker("LISTADO DE PERSONAJES ACTIVOS \n\n", activeCharacters);

    if (document.getElementById("div-content")) {
        document.getElementById("div-content").innerHTML = "";
        setTimeout(() => {
            document.getElementById("div-content").innerText = searchContent
        }, 100);
    } else {
        let divContent = document.createElement("div");
        divContent.id = "div-content";
        divContent.innerText = searchContent
        document.body.append(divContent);
    }
};
function inactiveCharacterList() {

    let inactiveCharacters = characters.filter((el) => el.isActive == false);

    let searchContent = contentMaker("LISTADO DE PERSONAJES INACTIVOS \n\n", inactiveCharacters);

    if (document.getElementById("div-content")) {
        document.getElementById("div-content").innerHTML = "";
        setTimeout(() => {
            document.getElementById("div-content").innerText = searchContent
        }, 100);
    } else {
        let divContent = document.createElement("div");
        divContent.id = "div-content";
        divContent.innerText = searchContent
        document.body.append(divContent);
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
        default:
            break;
    }
}