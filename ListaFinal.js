// Questão 01

/*
frutas.push("Manga"); // Adiciona ao final
frutas.unshift("Uva"); // Adiciona ao início
frutas.splice(frutas.indexOf("Laranja"), 1); // Remove "Laranja"
console.log(frutas); // Resultado: ["Uva", "Maçã", "Banana", "Manga"]
*/

// Questão 02

/*
let saudacao = "Olá";
let nome = "Maria";
let mensagem = `${saudacao}, ${nome}!`;
console.log(mensagem); // Resultado: "Olá, Maria!"
/*

// Questão 3

/*
let numero = 10;
function paridade(numero){
    if (numero % 2 == 0){
        return "Par";
    }
    else{
        return "impar"
    }
};
console.log(paridade(numero))
*/

//Questão 4

/*
let valores = [10, 20, 30, 40];
let soma = valores.reduce((acc, val) => acc + val, 0);
console.log(soma); // Resultado: 100
*/

// Questão 5

/*
let valores = [10, 20, 30, 40]
somar = valores.reduce(function(acumulador, numero){
    return acumulador + numero
})
console.log(somar)
*/

// Questão 6

/*
let texto = "javascript é legal"
palavra = texto.toUpperCase()

console.log("Texto Resultante:", palavra)
*/

// Questão 7

/*
let nome = "Carlos"
verificarA = nome.includes("a")
console.log(verificarA)
*/

// Questão 8

/*
let cores = ["Azul", "Verde", "Amarelo", "Roxo"]
removeVerde = cores.splice(1, 1)
console.log(cores)
removeAmarelo = cores.splice(1, 1)
*/

// Questão 9

/*
let numeros = [10, 20, 30];
adicionarInicio = numeros.unshift(5)
adicionarFinal = numeros.push(40)
removerInicio = numeros.shift()
removerFinal = numeros.pop()
*/

// Questão 10

/*
let frase = "Programação é divertida";
contar = frase.length
console.log(contar)
*/

// Questão 11

/*
let frase = "Aprender JavaScript é muito bom"
divida = frase.split(" ")
console.log(divida)
*/

// Questão 12

/*
let texto = "Eu gosto de JavaScript";
divida = texto.split(" ")
reverter = divida.reverse()
console.log(reverter)
*/

// Questão 13

/*
let numeros = [1, 2, 3, 4, 5];
dobrado = numeros.map(function(numero){
    return numero * 2
})
console.log(dobrado)
*/

// Questão 14

/*
let criararray = [];
for (let i = 0; i < 10; i++){
criararray.push(Math.floor(Math.random() * 101))
}
let filtro = criararray.filter(function(num){
    return num > 50
})
console.log(filtro)
*/

// Questão 15

/*
let criararray = [];
for (let i = 0; i < 5; i++){
criararray.push(Math.floor(Math.random() * 101))
}

let soma = criararray.reduce(function(acumulador, numero){
    return acumulador + numero
})
let versenumero = isNaN(soma)

console.log(!versenumero)
*/

// Questão 16

/*
let frase = "O clima está ensolarado";
console.log(frase.replace("ensolarado", "chuvoso"))
*/

// Questão 17

/*
let numeros = [40, 10, 30, 20, 50];
console.log(numeros.sort())
*/

// Questão 18

/*
let notas = [7.5, 8.0, 6.5, 9.0, 7.0];

let somaNota = notas.reduce(function(acumulador, numero){
    return acumulador + numero 

})

let media = somaNota/notas.length

if (media >= 7){
    console.log( "Aprovado")
}
else{
console.log("Reprovado")}
*/

// Questão 19

/*
let numeroStr = "45.67";
console.log(Math.floor(numeroStr));
console.log(Math.ceil(numeroStr));
*/

// Questão 20 

/*

*/


