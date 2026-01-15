


const name = document.getElementById("name");
const namePr = document.getElementById("namePr");
const all = document.getElementById("all");
const playerGames = document.getElementById("playerGames");
const creatorGames = document.getElementById("creatorGames");
const iiGames = document.getElementById("iiGames");




function ready() {
    const playerName = input.value.trim();
    if(!playerName) return
    all.style.display = "block";
    login.style.display = "none";
    name.textContent = playerName;
    namePr.textContent = playerName;
}

function FplayerGames() {
    playerGames.style.display = "block";
    creatorGames.style.display = "none";
    iiGames.style.display = "none";
}

function FcreatorGames() {
    playerGames.style.display = "none";
    creatorGames.style.display = "block";
    iiGames.style.display = "none";
}

function FiiGames() {
    playerGames.style.display = "none";
    creatorGames.style.display = "none";
    iiGames.style.display = "block";
}
