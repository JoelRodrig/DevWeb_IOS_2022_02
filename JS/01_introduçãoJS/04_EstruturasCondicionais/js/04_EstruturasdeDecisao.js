//Preço de três produtos - Defina qual é o menor valor
const fruta = 20;
const verdura = 30;
const carne = 10;

if (fruta < carne || verdura < carne) {
    console.log('Esse é o menor valor');
} else if (carne < fruta || carne < verdura) {
    console.log(carne + ' É o menor valor que a fruta e a verdura');
}


//Mostrar 3 números de forma crescente
let html = 9;
let css = 10;
let js = 8;

if (html < css  && css > js) {
    console.log(js + ', ' + html + ', ' + css);
}


//Receber um número correspondente a um determinado
//ano e em seguida informar se este ano é bissexto.


let ano = 1996
if (ano % 100 == 0) {
    console.log(ano + ' Não é um ano bissexto');
} else if (ano % 400 == 0 || ano % 4 ==0) {
    console.log(ano + ' É um ano bissexto');
}


/*
var noAno = 1992;

if  (noAno % 400 == 0){
    console.log( `400 corresponde a que ${noAno} é um ano bissexto`)
} else if (noAno % 100 == 0) {
    console.log(noAno + ' Não é um ano bissexto');
} else if (noAno % 4 == 0) {
    console.log(`4 corresponde que ${noAno} é um ano bissexto`);
}
*/