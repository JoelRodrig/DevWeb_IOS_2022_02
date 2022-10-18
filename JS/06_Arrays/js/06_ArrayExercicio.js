/* Crie um Array Unidimensional com as seguintes informações. */

var dados = ["HTML", 1993, "CSS", 1996, "BOOTSTRAP", 2011, "js", 1995, "REACT", 2013, "JAVA", 1995];
console.log(dados);
console.log(dados.length);
console.log(dados[6])

var x = dados.toString();
console.log(typeof x);
console.log(typeof dados)

var y = dados.join(' / ');
console.log(y)

var p = dados.unshift("IOS");
console.log(dados)
console.log(dados.length)


/* Crie um Array bidimensional com as seguintes informações. */

var info = [ ["HTML", 1993, "CSS", 1996],
            ["BOOTSTRAP", 2011, "JS", 1995],
            ["REACT", 2013, "JAVA", 1995]
]
console.log(info)
console.log(info.length)
console.log(info[2][1])

info[1][2] = "JAVASCRIPT";
delete info [2][2]
var t = info.push("pipoca")
console.log(info)

