const fruit = prompt('quale frutta stai cercando?').trim();

const frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frigo.push('pesca');

console.log(frigo);

let dispay = 'NON TROVATA'
let messange = false;

for (let i=0; i < frigo.length && !messange; i++){
    if(fruit == frigo[i]){
        messange = true;
    }
}

if(messange){
    dispay = 'TROVATA';
}

console.log(dispay);