/* Criando Array unidimensional */

var array1 = ["marcello", 15, "colin", 47, true];
console.log(array1)
 /* Alterando o valor do array Unidimensional */
 console.clear();
 array1[3] = 80;
 console.log(array1)


/* Array bidimensional */
var array2 = [["pipoca", 10, false],
            ["string", 20, true],
            ["margarina", 12, false]
]
// console.log(array2);
console.log(array2[2][0]);

/* Alterando o valor do array Bidimensional */
console.clear();
array2[1][0] = "salsicha"
console.log(array2)

/* array de objeto carro */
console.clear();
var carro = ["Uno", 1998, "0km", false, 2];
var x = carro.toString(); /* Serve para alterar um array para string */
console.log(typeof x) /* Retorna o tipo de x - que seria string */
console.log(typeof carro) /* Retorna o tipo da variavel - que seria objeto */
console.log(carro) /* Retorna a variavel - que seria o array completo  */
console.log(x)  /* Retorna a variavel x - que seria a variavel em string completa*/

console.clear();
var y = carro.join(" ? "); /* Converte o array em string e também para separar os elementos ou valor do array */
console.log(carro)
console.log(x)
console.log(y)

console.log(carro.length) /* Retorna o tamanho do array */
console.clear();

/*
var t = carro.pop();  Retira o elemento ou valor final do seu array
console.log(carro)
console.log(t)
*/

/* Insere uma informação no final do array */
console.clear();
var u = carro.push('Lego'); /* Insere uma informação no final do array */
console.log(carro)
console.log(u)

/* Remove o elemento no inicio do array */
console.clear();
var p = carro.shift(); /* Remove o elemento no inicio do array */
console.log(carro)
console.log(p)

/* Insere uma informação no inicio do array */
console.clear();
var w = carro.unshift("console.log");
console.log(carro);
console.log(w)

/* Apaga o elemento em uma posição pré selecionada do array */
delete carro[1];
console.log(carro)