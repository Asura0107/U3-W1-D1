var player1 = Math.floor(Math.random() * 100);
var player2 = Math.floor(Math.random() * 100);
var random = Math.floor(Math.random() * 100);
var result = function () {
    var difference1;
    var difference2;
    console.log("il numero scelto dal player 1 è: " + player1);
    console.log("il numero scelto dal player 2 è: " + player2);
    console.log("il numero uscito dal dado è: " + random);
    if (random > player1) {
        difference1 = random - player1;
    }
    else {
        difference1 = player1 - random;
    }
    if (random > player2) {
        difference2 = random - player2;
    }
    else {
        difference2 = player2 - random;
    }
    if (difference1 > difference2) {
        console.log("il player 2 è più vicino al risultato");
    }
    else {
        console.log("il player 1 è più vicino al risultato");
    }
};
result();
