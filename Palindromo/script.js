/*
CONSEGNA
Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
//Domanda all utente 
const inputParola = prompt("Scrivi una parola per verificare se è palindroma");

function verifiPalindroma(word){
    let notify = 'la parola è palindroma'
    let k = word.length; -1; 
    
    for( let i=0; i< word.lenght; i++){
        
        if (word[i] != word[k] K > i ) {
            console.log('i è diverso da k')
            notify = 'la parola non è palindroma'
        }
    }
    return notify;
}
let result = verifiPalindroma(inputParola);
