const array = [];

// chiediamo all' utente quanti numero devono essere inseriti nell'array 

const length = parseInt(prompt('quanti numeri vuoi?'));


const numberHow = parseInt(prompt('quanti numeri finali vuoi?'));

if(length < numberHow){
    alert('Hai sbagliato qualcosa!')

}else {

    for(let i=0 ; i < length; i++){
        //generiamo un numero casuale da 1 a 100
        let randomNumber = Math.floor(Math.random()*100)+1;
        //lo inseriamo nell'array
        array.push(randomNumber);
    }

    //stampiamo
    console.log(array)

    let messange = '';
    let messangeToAdd = '';

    for(let i=0; i < numberHow; i++){
        //creamo il messaggio
        messangeToAdd += `Il numero nella posizione ${array.length - i}: ${array[array.length - (i+1)]} `;
    }
    messange=messangeToAdd;
    console.log(messange);
}
