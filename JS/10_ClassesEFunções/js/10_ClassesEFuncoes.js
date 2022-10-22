class carro {
    constructor(nome,ano,porta,janelas){
        this.nome = nome;
        this.ano = ano;
        this.porta = porta;
        this.janelas = janelas;
    }

    /*Metodo que retorna a idade do meu carro */
    idadeCarro(anoAtual){
        return anoAtual - this.ano;
    }
}

/*Criação de objetos de herda a caracteristicas da classe carro */
let carro1 = new carro("Celta", 2002, 2, 4);
let carro2 = new carro("Veloster", 2016, 3, 4);

/*Apresentar os OBJETOS no console.log */
console.log(carro1);
console.log(carro1.nome);


/*Pegar o ano Atual
 */
let dataHoje = new Date();
let ano = dataHoje.getFullYear();

/*Retornar a idade do objeto carro1 */
console.log(carro1.idadeCarro(ano));