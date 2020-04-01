gamesList = {
    0: {
        id: 0,
        name: "Simple Guessing Game",
        level: "easy"
    },
    1: {
        id: 1,
        name: "Springer",
        level: "easy"
    }
}

function renderGamesList(){
    let gameListHTML = document.getElementById("game-list");
    for(let i = 0; i < Object.keys(gamesList).length; i++){
        let li = document.createElement("li");
        li.setAttribute("class", "game");
        let a = document.createElement("a");
        a.setAttribute("href", "./games/" + gamesList[i].id + ".html");
        a.innerHTML = gamesList[i].name;
        li.appendChild(a);
        gameListHTML.appendChild(li)
        console.log(gameListHTML);
    }
}

renderGamesList();