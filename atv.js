let texto = "javascript é incrível"
let separar = texto.split(" ")
let inverter = separar.reverse()
console.log(inverter)
let capitalizar = inverter.map(function(palavra){
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
})

let resultado = capitalizar.join(" ")

console.log("Texto Resultante:", resultado)