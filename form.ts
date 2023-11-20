let firstplay:any = document.querySelector("#firstplayer") as HTMLInputElement | null;
let secondplay:any = document.querySelector("#secondplayer") as HTMLInputElement | null;
let randomplay: number = Math.floor(Math.random() * 100);
let form :any = document.querySelector(".form")

form.onsubmit= (event)=> {
    event.preventDefault()
    let value1 : number = firstplay?.value
    let value2 : number = secondplay?.value
    let diceresult : any = document.querySelector(".diceresult") as HTMLParagraphElement
    let winner : any = document.querySelector(".winner") as HTMLParagraphElement
    diceresult.innerText= randomplay
    var difference1:number;
    var difference2:number;
    console.log("il numero scelto dal player 1 è: " +value1);
    console.log("il numero scelto dal player 2 è: " +value2);
    console.log("il numero uscito dal dado è: " + randomplay);
    if (randomplay >value1) {
        difference1 = randomplay -value1;
    }
    else {
        difference1 =value1 - randomplay;
    }
    if (randomplay >value2) {
        difference2 = randomplay -value2;
    }
    else {
        difference2 =value2 - randomplay;
    }
    if (difference1 > difference2) {
        console.log("il player 2 è più vicino al risultato");
        winner.innerText= "player 2"
    }
    else {
        console.log("il player 1 è più vicino al risultato");
        winner.innerText= "player 1"

    }
};


