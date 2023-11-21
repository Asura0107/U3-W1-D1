var firstplay = document.querySelector("#firstplayer");
var secondplay = document.querySelector("#secondplayer");
// uso il null così se il io input è nullo almeno il mio typescript non crolla, al null si associa il ?
var randomplay = Math.floor(Math.random() * 100 + 1);
var form = document.querySelector(".form");
form.onsubmit = function (event) {
    event.preventDefault();
    var value1 = firstplay === null || firstplay === void 0 ? void 0 : firstplay.value;
    var value2 = secondplay === null || secondplay === void 0 ? void 0 : secondplay.value;
    var diceresult = document.querySelector(".diceresult");
    var winner = document.querySelector(".winner");
    diceresult.innerText = randomplay;
    var difference1;
    var difference2;
    console.log("il numero scelto dal player 1 è: " + value1);
    console.log("il numero scelto dal player 2 è: " + value2);
    console.log("il numero uscito dal dado è: " + randomplay);
    // posso usare anche il math.abs per ricavarmi la differenza assoluto
    // diff= math.abs(randomplay-value1)
    // diff= math.abs(randomplay-value2)
    if (randomplay > value1) {
        difference1 = randomplay - value1;
    }
    else {
        difference1 = value1 - randomplay;
    }
    if (randomplay > value2) {
        difference2 = randomplay - value2;
    }
    else {
        difference2 = value2 - randomplay;
    }
    if (difference1 > difference2) {
        console.log("il player 2 è più vicino al risultato");
        winner.innerText = "player 2";
    }
    else {
        console.log("il player 1 è più vicino al risultato");
        winner.innerText = "player 1";
    }
};
