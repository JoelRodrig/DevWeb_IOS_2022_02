const numeros = [17, 43, 8, 4, 97, 56, 29, 10];
numeros.forEach(verificador);

function verificador(valor) {
    if (valor % 2 == 0) {
        console.log(`Números Pares ${valor}`)
    } else {
        console.log(`Números Impares ${valor}`)
    }
}



