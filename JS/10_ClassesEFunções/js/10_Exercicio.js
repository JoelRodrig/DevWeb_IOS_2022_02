class aluno {
    constructor(id, nome, idade, desistente) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.desistente = desistente;
    }
}

let aluno1 = new aluno (6, 'Samy', 26, true);
let aluno2 = new aluno (8, 'Mariana', 23, false);
let aluno3 = new aluno (10, 'Joana', 22, true);

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);