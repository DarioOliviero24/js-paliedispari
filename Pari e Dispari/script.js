let gameQuestion = prompt("Pari o Dispari?");

if (gameQuestion.toLowerCase() == "pari") {
    console.log(gameQuestion.toLowerCase());
}

let userPari = false; 

if (gameQuestion.toLowerCase() == "pari") {
    userPari = true;
    alert("Pari.");
} else {
    userPari = false;
    alert("Dispari.");
}

let userInput = parseInt(prompt("Scegli un numero da 1 a 5"));
const computerInput = parseInt(getRandomArbitrary(1,5));

function getRandomArbitrary(min, max) { 
    return Math.random() * (max - min) + min;
}

function winOrLose(userNum, aiNum) {
    let sum = userNum + aiNum;
    if(userPari && (sum % 2 == 0)) {
        alert(userNum + " | " + aiNum + " Risultato = " + sum + " | Hai perso.");
    } 
    else if(!userPari && (sum % 2 != 0)) {
        alert(userNum + " | " + aiNum + " Risultato = " + sum + " | Hai vinto.");
    }
}