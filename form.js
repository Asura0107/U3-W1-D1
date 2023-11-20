var firstplay = document.querySelector("#firstplayer");
var secondplay = document.querySelector("#secondplayer");
var randomplay = Math.floor(Math.random() * 100);
var form = document.querySelector(".form");
form.onsubmit = function (event) {
    event.preventDefault();
    var value1 = firstplay === null || firstplay === void 0 ? void 0 : firstplay.value;
    var value2 = secondplay === null || secondplay === void 0 ? void 0 : secondplay.value;
    var difference1;
    var difference2;
    console.log("il numero scelto dal player 1 è: " + value1);
    console.log("il numero scelto dal player 2 è: " + value2);
    console.log("il numero uscito dal dado è: " + randomplay);
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
    }
    else {
        console.log("il player 1 è più vicino al risultato");
    }
};
