/* Array de objetos */

let alunos = [
    {
        nome: 'Mia',
        idade: 10,
        notas: [6, 8, 10, 9],
        sala: '3A',
        escola: 'EM Cabral junior',
        endereco: {
            rua: 'Rua dos mosqueteiros',
            numero: 14,
            cidade: 'São Paulo',
            estado: 'SP',
        },
        escolaridade: '2 grau do Ensino Médio',
        responsável: 'Matheus - Pai',
    },
    {
        nome: 'Thomas',
        idade: 15,
        notas: [5, 8, 4, 7],
        sala: '33',
        escola: 'Capitão Amaral',
        endereco: {
            rua: 'Rua dos patos',
            numero: 28,
            cidade: 'São Paulo',
            estado: 'SP',
        },
        escolaridade: '1 grau do Ensino Médio',
        responsável: 'Maria - Mãe',
    },
    {
        nome: 'Gabi',
        idade: 17,
        notas: [5, 8, 8, 7],
        sala: '54',
        escola: 'Capitão Pedroso',
        endereco: {
            rua: 'Rua alameda salete',
            numero: 89,
            cidade: 'São Paulo',
            estado: 'SP',
        },
        escolaridade: '1 grau do Ensino Médio',
        responsável: 'Marcos - Pai',
    },
];

let soma = 0;
let media = 0;
let aprov = 0;

for (let x = 0; x < alunos.length; x++) {
    soma = 0;
    for (let i = 0; i < alunos[x].notas.length; i++) soma += alunos[x].notas[i];

    media = soma / alunos[x].notas.length;
    console.log(`media ${media}`);

    aprov = media >= 7 ? "aprovado" : "reprovado";
    console.log(` Aluno ${aprov}`)

}


