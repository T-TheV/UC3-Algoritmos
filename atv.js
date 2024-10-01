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
