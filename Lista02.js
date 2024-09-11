// console.log("Primeira da 2 atividade")

// function verificaridade(listaDeIdades){
//     for (let i=0; i < listaDeIdades.length; i++){
//     if (listaDeIdades[i] < 18){
//         return "Alguém não poderá entrar!"
//     }
        
// }
//     return "Todos podem entrar!"
// }

// let idades = [15, 19, 18, 20, 23, 28]
// console.log(verificaridade(idades));

// // questao 2



// function contar(){
//     let i = 1
//     let contador = 0;
//     // 1 - lista de 1 a 50
//     // 2 - quais são pares
//     // 3- Contar os pares
//     while (i <= 50){
//         if (i % 2 ===0){
//             contador = contador + 1;
//             console.log(i, "par")
//         }

//     i++
// }
// return contador;
// }
// console.log(contar())

// // questão 3

// function definirCor(numero){
//     switch (numero){
//         case 1:
//             return "Cor clara"
//         case 2:
//             return "Cor Média"
//         case 3:
//             return "Cor Escura"
//         default:
//             return "Cor desconhecida";
//         }
//     }
//     console.log(definirCor(1)) // Cor clara

//     //Questão 4 

//     function validarSenha(senha){
//         const comprimento = senha.length;
//         switch (true){
//             case (comprimento < 8):
//                 return ("Senha Fraca");
//             case (comprimento >= 8 && comprimento <=12):
//                 return ("Senha Média")
//             case (comprimento > 12):
//                 return ("Senha Forte")
//         }
//     }
    
//     console.log(validarSenha("1234567")) // fraca
//     console.log(validarSenha("12345678")) // média
//     console.log(validarSenha("1234567891234")) // forte

//     // Questão 5

//     function classificarNotas(nota){
//         switch (true){
//             case (nota >= 90 && nota <= 100):
//                 return ("A");
//             case (nota >= 80 && nota <= 89):
//                 return ("B")
//             case (nota >= 70 && nota <= 79):
//                 return ("C")
//             case (nota >= 60 && nota <= 69):
//                 return ("D")
            
//             case (nota < 60):
//                 return("F")
//             default:
//                 return ("Nota Inválida")
//         }
//     }
    
//     console.log(classificarNotas(200)) // A


//     // Questão 6

//     function fizzBuzzBoom() {
//         for (let i = 1; i <= 100; i++) {
//             let output = "";
    
//             if (i % 2 === 0) output += "Fizz";
//             if (i % 3 === 0) output += "Buzz";
//             if (i % 5 === 0) output += "Boom";
    
//             // Se o output estiver vazio, significa que o número não é divisível por 2, 3 ou 5
//             if (output === "") {
//                 console.log(i);
//             } else {
//                 console.log(output);
//             }
//         }
//     }
    
//     fizzBuzzBoom();








