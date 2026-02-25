function mostrarHoraAtual() {
    let HoraAtual = new Date();
    console.log("Horas: ", HoraAtual.getHours());
    console.log("Minutos: ", HoraAtual.getMinutes());
    console.log("Segundos: ", HoraAtual.getSeconds());
    console.log("Hora atual: " + HoraAtual.getHours() + ":" + HoraAtual.getMinutes() + ":" + HoraAtual.getSeconds()
);
}
mostrarHoraAtual();

function somar(x, y) {
    return x + y;
}
let x = Number(prompt("Digite um número:"));
let y = parseFloat(prompt("Digite outro número:"));
console.log("Soma: ", somar(x, y));




function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}
let n1 = Number(prompt("Digite um número:"));
let n2 = Number(prompt("Digite outro número:"));
console.log("Média: ", calcularMedia(n1, n2));


function QuantidadeCaracteres(texto) {
    return texto.length;
}
console.log("Quantidade de caracteres: " + QuantidadeCaracteres("JavaScript é incrível!"));

console.log("Maiúsculas: ", "JavaScript é incrível!".toUpperCase());


function VerificarPalavra(frase) {
    console.log(frase.includes("HTML"));
}
VerificarPalavra("HTML é legal");
