let navButtonsDiv = document.createElement("div");
navButtonsDiv.id = "nav-buttons";
navButtonsDiv.className = "nav-buttons";

navButtons.forEach((el) => {
    navButtonsDiv.innerHTML += `
    <button onclick="choise(${el.id})">${el.btnName}</button>
    `
});

document.body.append(navButtonsDiv);