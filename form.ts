let firstplay:any = document.querySelector("#firstplayer")
let secondplay:any = document.querySelector("#secondplayer")
let randomplay: number = Math.floor(Math.random() * 100);
let form :any = document.querySelector(".form")

form.onsubmit= (event)=> {
    event.preventDefault()
    var difference1:number;
    var difference2:number;
    console.log("il numero scelto dal player 1 è: " + firstplay);
    console.log("il numero scelto dal player 2 è: " +secondplay);
    console.log("il numero uscito dal dado è: " + randomplay);
    if (randomplay > firstplay) {
        difference1 = randomplay - firstplay;
    }
    else {
        difference1 = firstplay - randomplay;
    }
    if (randomplay >secondplay) {
        difference2 = randomplay -secondplay;
    }
    else {
        difference2 =secondplay - randomplay;
    }
    if (difference1 > difference2) {
        console.log("il player 2 è più vicino al risultato");
    }
    else {
        console.log("il player 1 è più vicino al risultato");
    }
};


