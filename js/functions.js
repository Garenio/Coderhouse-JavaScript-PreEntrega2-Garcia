//let divEnDom = document.getElementById("div-content")

function contentMaker(searchTitle, list) {
    let title = searchTitle;
    list.forEach((el) => title += `
    ${el.charName} (id: ${el.id})
    \nNivel actual: ${el.level} | Oro: ${el.gold} | Raza: ${el.race} | Clase: ${el.charClass} 
    \nJugador: ${el.playerName}
    \n__________________________________________________
    `);

    return title;
}

function characterList() {
    let title = contentMaker("Listado de personaes: \n\n", characters);

    if (document.getElementById("div-content")) {
        document.getElementById("div-mensaje").innerHTML = "";
    } else {
        let divContent = document.createElement("div");
        divContent.id = "div-content";
        divContent.innerText = title
        document.body.append(divContent);
    }
};

function choise(btnValue) {
    switch (btnValue) {
        case 1:
            return characterList();
        default:
            break;
    }
}