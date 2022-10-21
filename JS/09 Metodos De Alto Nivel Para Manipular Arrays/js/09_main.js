/*Metodo ForEach() */

var frutas = ['banana', 'maca', 'kiwi', 'melancia'];

/*Metodo ForEach() é utilizado para percorrer
um array e aplicar alguma mudança ou configuração */

frutas.forEach(minhaFuncao)

function minhaFuncao(valor, indice) {
    console.log(`O indice é ${valor}`);
    console.log(`O valor é ${indice}`);
}

/*Metodo ForEach() com Array de objetos utilizando Arrow Function */

const alunos = [
    {
        id: 1,
        nome: "Marcelo",
        passou: true,
    },
    {
        id: 2,
        nome: "Agatha",
        passou: false,
    },
    {
        id: 3,
        nome: "Vitor",
        passou: false,
    }
];

alunos.forEach((aprovados) => console.log(aprovados.passou))


/* Metodo map() */
const numeros = [2, 7, 8, 50, 34];
const novosNumeros = numeros.map(Math.sqrt);
console.log(novosNumeros);

console.clear();
const cachorro = [
    {
        id: 1,
        nome: "Bololinho",
        idade: 11,
    },
    {
        id: 2,
        nome: "Toby",
        idade: 7,
    },
    {
        id: 3,
        nome: "Pingo",
        idade: 6,
    },
];

const mapCachorro = cachorro.map((nomeDog) => {
    return nomeDog.nome;
});
console.log(cachorro);
console.log(mapCachorro);

console.clear();
/*Metodo filter() percorre o array e retorna as informações que passam no filtro */
const idade = [5, 9, 10, 15, 25, 35, 45, 89];
/*Percorrer array e retornar apenas as idades abaixo de 30 */
let filtraIdade = idade.filter((idade) => {
    return idade < 30;
});
console.log(filtraIdade);


console.clear();
/*Metodo find() */
console.log(
    cachorro.find((procuraNome) => {
        return procuraNome.nome === "Pingo";
    })
)







/* Métodos de Alto Nível para manipular Arrays:
Os parâmetros entre colchetes são opcionais e cada um significa:
● callback: é a função que será chamada para ser executada em
cada elemento do array.
● currentValue: é o valor do elemento que está sendo
processado no momento.
● index (opcional): O índice do elemento atual sendo processado
no array.
● array (opcional): O array que forEach() está sendo aplicado.
● thisArg (opcional): Valor a ser usado como this quando
executar callback.
 */