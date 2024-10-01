// Questão 01

/*
let numeros = [34, 7, 23, 32, 5, 62]
numeros.push(9, 12)
numeros.unshift(1)
numeros.sort((a,b) => a - b);
numeros.reverse()
console.log(numeros)*/

//

// Questão 02

/*
let saudacao = "Olá"
let nome = "Mundo"
let completo = saudacao.concat(' ', nome)
let maiusculo = completo.toUpperCase()
console.log(completo)
console.log(maiusculo)
let removemundo = completo.substring(4,9)
console.log(removemundo)
*/

//

// Questão 03

/*
let valores = [10, 25, 30, 45, 50, 60]
let maior_que_trinta = valores.filter(function(numero){
        return numero > 30
});
console.log(maior_que_trinta)
let soma = maior_que_trinta.reduce(function(acumulador, numero){
    return acumulador + numero
},0);
console.log(soma)
*/

// Questão 04

/*
let numeros = [1, 2, 3, 4, 5]
let dobro = numeros.map(function(numero){
    return numero * 2
})

console.log(dobro)
*/

//

// Questão 05

/*
let frase = "A programação é divertida e desafiadora."
console.log(frase.length)
let separado = frase.split(' ')
console.log(separado)
let maiusculo = separado.map(separado => separado.toUpperCase())
console.log(maiusculo);
let hifen = maiusculo.join("-")
console.log(hifen)
*/

//

// Questão 06

/*
let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"]
let substituir = frutas.splice(2,1, "Abacaxi")

let extraia = frutas.slice(0, 3)

let adicionar = frutas.push("Melancia")
console.log(frutas)
*/

//

// Questão 07

/*
let nomes = ["Ana", "Carlos", "João", "Maria"]
console.log(nomes.indexOf("Carlos"))
let substituir = nomes.splice(2,1, "José")
nomes.unshift("Fernanda")
nomes.push("Rafael")
console.log(nomes)
*/

//

// Questão 08

/*
let precos = [15.5, 10.0, 20.75, 30.0, 8.0];

let dezporcento = precos.map(function(num){
    return num * 1.1;
})

// console.log(dezporcento)

let filtro = dezporcento.filter(function(num){
    return num > 20;
})

console.log(filtro);

let soma = filtro.reduce(function (acumulador, numero){
    return acumulador + numero
});

console.log(soma)

*/

//

// Questão 09

/*
Não é pra ser feito
*/

//

// Questão 10

/*
let notas = [7.5, 8.0, 6.5, 9.0, 7.0]
let media = notas.reduce(function (acumulador,numero){
    return acumulador + numero;
})
let resultado = media / notas.length
console.log(resultado);

if (resultado >= 7){
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}

*/

//

// Questão 11

/*

*/

//