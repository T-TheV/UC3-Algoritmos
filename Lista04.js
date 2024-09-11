
//     // Criar nota 1Quest
//     function classificarNota(){
//         const nota = parseInt(prompt("Digite a nota do aluno: ")) //ParseInt transforma tudo pra inteiro
//         let resultado;
//         if (nota > 90) {
//             resultado = "A. Excelente trabalho!";
//         } else if (nota >= 80)
//             {
//             resultado = "B. Bom trabalho!";
//         } else if (nota >= 70) 
//             {
//             resultado = "C. Trabalho satisfatório.";
//         } else if (nota >= 60){
//             resultado = "D. Precisa melhorar.";
//         } else 
//         {
//             resultado = "F. Insuficiente.";
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
    
//     classificarNota();
    

//     // Quest 2

//     function classificarNota(){
//         const nota = parseInt(prompt("Digite a nota do aluno: ")) //ParseInt transforma tudo pra inteiro
//         alert("Você irá definir um intervalo A, B, C e D, caso o aluno não atinja nenhum intervalo será F.")
//         const intervaloA= parseInt(prompt("digite o limite para a nota A"))
//         const intervaloB= parseInt(prompt("digite o limite para a nota B"))
//         const intervaloC= parseInt(prompt("digite o limite para a nota B"))
//         const intervaloD= parseInt(prompt("digite o limite para a nota B"))

//         let resultado;
    
//         if (nota > intervaloA) {
//             resultado = "A. Excelente trabalho!";
//         } else if (nota >= intervaloB)
//             {
//             resultado = "B. Bom trabalho!";
//         } else if (nota >= intervaloC) 
//             {
//             resultado = "C. Trabalho satisfatório.";
//         } else if (nota >= intervaloD){
//             resultado = "D. Precisa melhorar.";
//         } else 
//         {
//             resultado = "F. Insuficiente.";
//         }
//         alert(`Sua nota é ${resultado}`);
// }

// classificarNota();

// // Q3

// function classificarNota() {
//     const nota = parseInt(prompt("Digite a nota do aluno (0-100): "));

//     // Validação da nota
//     if (isNaN(nota) || nota < 0 || nota > 100) {
//         alert("Nota inválida! Por favor, digite um número entre 0 e 100.");
        
//         return; // Encerra a função caso a nota seja inválida
//     }

//     alert("Você irá definir um intervalo A, B, C e D, caso o aluno não atinja nenhum intervalo será F.");

//     // Validação dos intervalos (opcional, pode ser adicionada)
//     // ... (verificar se os intervalos estão em ordem decrescente e são positivos)

//     const intervaloA = isNaN(prompt("Digite o limite para a nota A"));
//     const intervaloB = isNaN(prompt("Digite o limite para a nota B"));
//     const intervaloC = isNaN(prompt("Digite o limite para a nota C"));
//     const intervaloD = isNaN(prompt("Digite o limite para a nota D"));

//     let resultado;

//     switch (true) {
//         case nota >= intervaloA:
//             resultado = "A. Excelente trabalho!";
//             break;
//         case nota >= intervaloB:
//             resultado = "B. Bom trabalho!";
//             break;
//         case nota >= intervaloC:
//             resultado = "C. Trabalho satisfatório.";
//             break;
//         case nota >= intervaloD:
//             resultado = "D. Precisa melhorar.";
//             break;
//         default:
//             resultado = "F. Insuficiente.";
//     }

//     alert(`Sua nota é ${resultado}`);
// }

// classificarNota();
// //Q3 de outra forma
// function classificarNota() {
//     const nota = parseInt(prompt("Digite a nota do aluno (0-100): "));

//     // Validação da nota
//   if (nota <0 || nota>100) {
//         alert("Nota inválida! Por favor, digite um número entre 0 e 100.");    
//         return; // Encerra a função caso a nota seja inválida
//     }


//     alert("Você irá definir um intervalo A, B, C e D, caso o aluno não atinja nenhum intervalo será F.");

//     const intervaloA = isNaN(prompt("Digite o limite para a nota A")); //Checa se não é um numero
//     const intervaloB = isNaN(prompt("Digite o limite para a nota B"));
//     const intervaloC = isNaN(prompt("Digite o limite para a nota C"));
//     const intervaloD = isNaN(prompt("Digite o limite para a nota D, LEMBRANDO SER A NOTA MÍNIMA"));

//     let resultado;

//     switch (true) {
//         case nota >= intervaloA:
//             resultado = "A. Excelente trabalho!";
//             break;
//         case nota >= intervaloB:
//             resultado = "B. Bom trabalho!";
//             break;
//         case nota >= intervaloC:
//             resultado = "C. Trabalho satisfatório.";
//             break;
//         case nota >= intervaloD:
//             resultado = "D. Precisa melhorar.";
//             break
//         case nota == (intervaloD - 5):
//             resultado = "Você está quase lá!"
//             break;
//         default:
//             resultado = "F. Insuficiente.";
//     }

//     alert(`Sua nota é ${resultado}`);
// }

// classificarNota();

// //Q4
// function classificarNota(){
//     const nota = parseInt(prompt("Digite a nota do aluno: ")) //ParseInt transforma tudo pra inteiro
//     let resultado;
//     if (nota > 90) {
//         resultado = "A. Excelente trabalho!";
//     } else if (nota >= 80)
//         {
//         resultado = "B. Bom trabalho!";
//     } else if (nota >= 70) 
//         {
//         resultado = "C. Trabalho satisfatório.";
//     } else if (nota >= 60){
//         resultado = "D. Precisa melhorar.";
//     } else if (nota >=55 && nota <60){
//         resultado = "F. Insuficiente.";
    
//     }else 
//     {
//         resultado = "F. Insuficiente.";
//     }
//     if (nota >=60){
//     alert(`Sua nota é ${resultado}`);}
//     else if (nota >=55){alert(`Sua nota é ${resultado}`)
// alert("Você está quase lá!")
// }else{alert(`Sua nota é ${resultado}`)}
// }

// classificarNota();
// //Q5
// function classificarNota(){
//     const nota = parseInt(prompt("Digite a nota do aluno: ")) //ParseInt transforma tudo pra inteiro
//     let resultado;
//     if (nota > 90) {
//         resultado = "A. Excelente trabalho!";
//     } else if (nota >= 80)
//         {
//         resultado = "B. Bom trabalho!";
//     } else if (nota >= 70) 
//         {
//         resultado = "C. Trabalho satisfatório.";
//     } else if (nota >= 60){
//         resultado = "D. Precisa melhorar.";
//     } else if (nota >=55 && nota <60){
//         resultado = "F. Insuficiente.";
    
//     }else 
//     {
//         resultado = "F. Insuficiente.";
//     }
//     if (nota >=60){
//     alert(`Sua nota é ${resultado}`);}
//     else if (nota >=55){alert(`Sua nota é ${resultado}`)
// alert("Você está quase lá!")
// }else{alert(`Sua nota é ${resultado}`)}
// }

// classificarNota();

// //Q6
// function classificarNota() {
//     const nota = parseInt(prompt("Digite a nota do aluno: "));
//     let mensagem = prompt("Digite a mensagem personalizada: ");
  
//     // Validação da nota
//     if (isNaN(nota)) {
//       alert("Digite um número válido para a nota.");
//       return;
//     }
  
//     // Validação da mensagem
//     if (!isNaN(mensagem)) {
//       alert("Digite uma mensagem válida.");
//       return;
//     }
  
//     // Verifica se a nota está dentro do intervalo (ajuste o intervalo conforme necessário)
//     if (nota < 0 || nota > 100) {
//       alert("A nota deve estar entre 0 e 100.");
//       return;
//     }
  
//     alert(`Sua nota é ${nota} e o professor deixou a mensagem: ${mensagem}`);
//   }
  
//   classificarNota();


// classificarNota();

// //Q7
// function classificarNota() {
//     const nota = parseInt(prompt("Digite a nota do aluno: "));
//     let mensagem = prompt("Digite a mensagem personalizada: ");
  
//     // Validação da nota
//     if (isNaN(nota)) {
//       alert("Digite um número válido para a nota.");
//       return;
//     }
  
//     // Validação da mensagem
//     if (!isNaN(mensagem)) {
//       alert("Digite uma mensagem válida.");
//       return;
//     }
  
   
//     if (nota < 0 || nota > 100) {
//       alert("A nota deve estar entre 0 e 100.");
//       return;
//     }
  
//     alert(`Sua nota é ${nota} e o professor deixou a mensagem: ${mensagem}`);

//     if (nota >= 10 && nota < 20){
//         alert("A nota está entre 10-20")
//     }else if (nota >=20 && nota < 30){
//         alert("A sua nota está entre 20-30")
//     }else if (nota >=30 && nota < 40){
//         alert("A sua nota está entre 30-40")
//     }
//     else if (nota >=40 && nota < 60){
//         alert("A sua nota está entre 40-60")
//     }else if (nota >=60 && nota < 70){
//         alert("A sua nota está entre 60-70")
//     }else if (nota >=70 && nota < 80){
//         alert("A sua nota está entre 70-80")
//     }else if (nota >=80 && nota <= 100){
//         alert("A sua nota está entre 80-100")
//     }
//   }
  
//   classificarNota();

//   //Q8
//   function classificarNota() {
//     const nota = parseInt(prompt("Digite a nota do aluno: "));
//     let mensagem = prompt("Digite a mensagem personalizada: ");
  
//     // Validação da nota
//     if (isNaN(nota)) {
//       alert("Digite um número válido para a nota.");
//       return;
//     }
  
//     // Validação da mensagem
//     if (!isNaN(mensagem)) {
//       alert("Digite uma mensagem válida.");
//       return;
//     }
  
   
//     if (nota < 0 || nota > 100) {
//       alert("A nota deve estar entre 0 e 100.");
//       return;
//     }
  
//     alert(`Sua nota é ${nota} e o professor deixou a mensagem: ${mensagem}`);

//     if (nota >= 10 && nota < 20){
//         alert("A nota está entre 10-20")
//     }else if (nota >=20 && nota < 30){
//         alert("A sua nota está entre 20-30")
//     }else if (nota >=30 && nota < 40){
//         alert("A sua nota está entre 30-40")
//     }
//     else if (nota >=40 && nota < 60){
//         alert("A sua nota está entre 40-60")
//     }else if (nota >=60 && nota < 70){
//         alert("A sua nota está entre 60-70")
//     }else if (nota >=70 && nota < 80){
//         alert("A sua nota está entre 70-80")
//     }else if (nota >=80 && nota <= 100){
//         alert("A sua nota está entre 80-100")
//     }
//   }
  
//   classificarNota();

//   //Q9
//   function classificarNota() {
//     const nota = parseInt(prompt("Digite a nota do aluno: "));
//     let mensagem = prompt("Digite a mensagem personalizada: ");
  
//     // Validação da nota
//     if (isNaN(nota)) {
//       alert("Digite um número válido para a nota.");
//       return;
//     }
  
//     // Validação da mensagem
//     if (!isNaN(mensagem)) {
//       alert("Digite uma mensagem válida.");
//       return;
//     }

   
//     if (nota < 0 || nota > 100) {
//       alert("A nota deve estar entre 0 e 100.");
//       return;
//     }
  
//     alert(`Sua nota é ${nota} e o professor deixou a mensagem: ${mensagem}`);

//     if (nota >= 10 && nota < 20){
//         alert("A nota está entre 10-20")
//         alert("Você está de recuperação")
//     }else if (nota >=20 && nota < 30){
//         alert("A sua nota está entre 20-30")
//         alert("Você está de recuperação")
//     }else if (nota >=30 && nota < 40){
//         alert("A sua nota está entre 30-40")
//         alert("Você está de recuperação")
//     }
//     else if (nota >=40 && nota < 60){
//         alert("A sua nota está entre 40-60")
//         alert("Você está de recuperação")
//     }else if (nota >=60 && nota < 70){
//         alert("A sua nota está entre 60-70")
//     }else if (nota >=70 && nota < 80){
//         alert("A sua nota está entre 70-80")
//     }else if (nota >=80 && nota <= 100){
//         alert("A sua nota está entre 80-100")
//     }
//   }
  
//   classificarNota();

//Q10
// function classificarNota() {
//     for (i = 0; i <= 2; i++){
//         let materia = prompt("Digite a matéria que deseja atribuir nota: ")
//         const nota = parseInt(prompt("Digite a nota do aluno: "));
//         let mensagem = prompt("Digite a mensagem personalizada: ");
//          // Validação da nota
//         if (isNaN(nota)) {
//             alert("Digite um número válido para a nota.");
//             return;
//         }
    
//         // Validação da mensagem
//         if (!isNaN(mensagem)) {
//             alert("Digite uma mensagem válida.");
//             return;
//         }
    
//         // Validação da matéria
//         if (!isNaN(mensagem)) {
//             alert("Digite uma matéria válida.");
//             return;
//             }
        
        
//         if (nota < 0 || nota > 100) {
//             alert("A nota deve estar entre 0 e 100.");
//             return;
//         }
        
//         alert(`Sua nota em ${materia} é ${nota} e o professor deixou a mensagem: ${mensagem}`);
    
//         if (nota >= 10 && nota < 20){
//             alert("A nota está entre 10-20")
//             alert("Você está de recuperação")
//         }else if (nota >=20 && nota < 30){
//             alert("A sua nota está entre 20-30")
//             alert("Você está de recuperação")
//         }else if (nota >=30 && nota < 40){
//             alert("A sua nota está entre 30-40")
//             alert("Você está de recuperação")
//         }
//         else if (nota >=40 && nota < 60){
//             alert("A sua nota está entre 40-60")
//             alert("Você está de recuperação")
//         }else if (nota >=60 && nota < 70){
//             alert("A sua nota está entre 60-70")
//         }else if (nota >=70 && nota < 80){
//             alert("A sua nota está entre 70-80")
//         }else if (nota >=80 && nota <= 100){
//             alert("A sua nota está entre 80-100")
//         }
//         }
        

        
//         }
//         classificarNota();